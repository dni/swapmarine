import "./style/nav.scss";
// import { createSignal } from "solid-js";
import { useParams, A } from "@solidjs/router";
import { networks, payments, } from 'liquidjs-lib'
import { bip32, slip77 } from './ecpair/ecpair'
import { generateMnemonic, mnemonicToSeed } from 'bip39'

const regtest = networks.regtest

import { createStorageSignal } from "@solid-primitives/storage";

const [mnemonic, setMnemonic] = createStorageSignal("mnemonic", null);
const [seed, setSeed] = createStorageSignal("seed", null);
const [address, setAddress] = createStorageSignal("address", null);
const [addressIndex, setAddressIndex] = createStorageSignal("addressIndexx", 0);
const [blindingPublicKey, setBlindingPublicKey] = createStorageSignal("blindingPublicKey", null);
const [blindingPrivateKey, setBlindingPrivateKey] = createStorageSignal("blindingPrivateKey", null);

const create_wallet = async () => {
    try {
        const mnemonic = generateMnemonic()
        const seed = await mnemonicToSeed(mnemonic)
        const node = bip32.fromSeed(seed, regtest)
        // workaround for browsers, Expected Buffer got Buffer3???
        const nodeBlinding = slip77.fromSeed(seed.toString("hex"), regtest)

        const child = node.derivePath(`m/44'/0'/0'/${addressIndex()}`)
        const p2wpkh = payments.p2wpkh({ pubkey: child.publicKey, network: regtest })

        // Now we pass the scriptPubKey down to the derive function to get the corresponding blinding key
        const blindingKeyPair = nodeBlinding.derive(p2wpkh.output)
        setMnemonic(mnemonic);
        setSeed(seed.toString("hex"));
        setAddress(p2wpkh.address);
        setBlindingPublicKey(blindingKeyPair.publicKey.toString("hex"));
        setBlindingPrivateKey(blindingKeyPair.privateKey.toString("hex"));
    } catch (err) {
        console.log(err)
    }
}

const delete_wallet = () => {
    setAddressIndex(0);
    setMnemonic();
    setAddress();
    setSeed();
    setBlindingPublicKey();
    setBlindingPrivateKey();
};

const Overview = () => {
    return (
        <>
            <Show when={!mnemonic()}>
                <button onClick={create_wallet}>Create Wallet</button>
            </Show>
            <Show when={mnemonic()}>
                <p>Mnemonic: {mnemonic()}</p>
                <p>Seed: {seed()}</p>
                <p>Address #{addressIndex()}: {address()}</p>
                <p>Blinding Public Key: {blindingPublicKey()}</p>
                <p>Blinding Private Key: {blindingPrivateKey()}</p>
                <button onClick={delete_wallet}>Delete Wallet</button>
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
            <A href="/wallet">Overview</A>
            <A href="/wallet/receive">Receive</A>
            <A href="/wallet/send">Send</A>
            <A href="/wallet/history">History</A>
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
