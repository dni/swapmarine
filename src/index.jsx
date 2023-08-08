/* @refresh reload */
import "./utils/patches";
import { render } from "solid-js/web";
import { Router, Route, Routes, Navigate } from "@solidjs/router";
import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { i18n, setWasmSupported } from "./signals";
import log from "loglevel";
import NotFound from "./NotFound";
import Overview from "./Overview";
import Wallet from "./Wallet";
import { loglevel } from "./config";
import { checkWasmSupported } from "./utils/wasmSupport";
import dict from "./i18n";
import "./style/index.scss";

log.setLevel(loglevel);

const i18n_context = createI18nContext(dict, i18n());
setWasmSupported(checkWasmSupported());

const cleanup = render(
    () => (
        <I18nContext.Provider value={i18n_context}>
            <Router>
                <Routes>
                    <Route path="*" element={<Navigate href={"/404"} />} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/" component={Overview} />
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/wallet/:action" component={Wallet} />
                </Routes>
            </Router>
        </I18nContext.Provider>
    ),
    document.getElementById("root")
);

if (import.meta.hot) {
    console.log("Hot reload");
    import.meta.hot.dispose(cleanup);
}
