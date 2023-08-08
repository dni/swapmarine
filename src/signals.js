// import { getAddress, getNetwork } from "./compat";
import { createSignal } from "solid-js";
// import { createStorageSignal } from "@solid-primitives/storage";
// import { pairs } from "./config";

export const [hamburger, setHamburger] = createSignal(false);
export const [wasmSupported, setWasmSupported] = createSignal(true);
export const [i18n, setI18n] = createSignal("en");
