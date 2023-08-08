import { ECPairFactory } from "ecpair";
import { initEccLib } from "bitcoinjs-lib";
import { BIP32Factory } from "bip32";
import { SLIP77Factory } from "slip77";
import * as ecc from "./noble";

initEccLib(ecc);
const ECPair = ECPairFactory(ecc);
const bip32 = BIP32Factory(ecc)
const slip77 = SLIP77Factory(ecc)

export { ECPair, bip32, slip77 };
