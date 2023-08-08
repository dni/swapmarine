import { useI18n } from "@solid-primitives/i18n";

import Submarine from "./components/Submarine";


const Overview = () => {
    const [t, { locale }] = useI18n();

    return (
        <div id="overview">
            <Submarine />
            <h1>Swapmarine</h1>
            <center>Lightning enabled Liquid BTC Wallet via Submarine Swaps by Boltz</center>
        </div>
    );
};

export default Overview;
