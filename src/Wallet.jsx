import "./style/nav.scss";
import { createSignal, createEffect } from "solid-js";
import { createStorageSignal } from "@solid-primitives/storage";
import { useParams, A } from "@solidjs/router";
import { networks, payments, } from 'liquidjs-lib'
import { bip32, slip77 } from './ecpair/ecpair'
import { generateMnemonic, mnemonicToSeed } from 'bip39'

const regtest = networks.regtest

const [mnemonic, setMnemonic] = createSignal(null);
const [seed, setSeed] = createSignal(null);
const [addresses, setAddresses] = createSignal([]);
const [addressIndex, setAddressIndex] = createStorageSignal("addressIndex", 0);

const create_seed = async () => {
    try {
        const mnemonic = generateMnemonic()
        const seed = await mnemonicToSeed(mnemonic)
        setMnemonic(mnemonic);
        console.log(mnemonic, seed)
        setSeed(seed);
    } catch (err) {
        console.log(err)
    }
}

const delete_wallet = () => {
    setAddressIndex(0);
    setMnemonic();
    setSeed();
};
const derivePath = "m/600'/0'/0'/";

const Addresses = () => {

    createEffect(() => {
        const addresses = [];
        const node = bip32.fromSeed(seed(), regtest);
        // workaround for browsers, Expected Buffer got Buffer3???
        const nodeBlinding = slip77.fromSeed(seed().toString("hex"), regtest)
        for (let i = 0; i < addressIndex(); i++) {
            let child = node.derivePath(derivePath + i)
            let p2wpkh = payments.p2wpkh({ pubkey: child.publicKey, network: regtest });
            let blindingKeyPair = nodeBlinding.derive(p2wpkh.output)
            addresses.push({
                i: i,
                derivePath: derivePath + i,
                p2wpkh: p2wpkh.address,
                confidentialAdress: p2wpkh.confidentialAddress,
                blindingPublicKey: blindingKeyPair.publicKey,
                blindingPrivateKey: blindingKeyPair.privateKey,
            });
        }
        setAddresses([]);
        setAddresses(addresses);
    });

    return (
        <div class="addresses">
            <For each={addresses()}>
                {(address) => (
                    <div class="address">
                        <p>Address #{address.i}: {address.p2wpkh}</p>
                        <p>Derive Path: {address.derivePath}</p>
                        <p>Confidential Address: {address.confidentialAdress}</p>
                        <p>Blinding Public Key: {address.blindingPublicKey.toString("hex")}</p>
                        <p>Blinding Private Key: {address.blindingPrivateKey.toString("hex")}</p>
                    </div>
                )}
            </For>
        </div>
    );
};

const Overview = () => {
    return (
        <>
            <Show when={!seed()}>
                <button onClick={create_seed}>Create Seed</button>
            </Show>
            <Show when={mnemonic()}>
                <p>Mnemonic: {mnemonic()}</p>
            </Show>
            <Show when={seed()}>
                <p>Seed: {seed().toString("hex")}</p>
                <Addresses />
                <button onClick={() => setAddressIndex(parseInt(addressIndex()) + 1)}>Add Address</button>
                <button onClick={delete_wallet}>Delete Seed</button>
            </Show>
        </>
    );
};

const Receive = () => {
    return (
        <p>hello, receive!</p>
    );
};

const Navigation = () => {
    return (
        <nav>
            <A href="/">home</A>
            <A href="/wallet">overview</A>
            <A href="/wallet/receive">receive</A>
            <A href="/wallet/send">send</A>
            <A href="/wallet/history">history</A>
        </nav>
    );
};

const Wallet = () => {
    const params = useParams();
    return (
        <div>
            <Navigation />
            <Switch fallback={<Overview />}>
              <Match when={params.action == "receive"}>
                <Receive />
              </Match>
            </Switch>
        </div>
    );
};

export default Wallet;
