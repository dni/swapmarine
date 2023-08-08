// import { useI18n } from "@solid-primitives/i18n";
import { useNavigate } from "@solidjs/router";

import Submarine from "./components/Submarine";


const Overview = () => {
    // const [t] = useI18n();
    const navigate = useNavigate();

    return (
        <div id="overview">
            <Submarine />
            <h1>Swapmarine<small>Lightning enabled Liquid BTC Wallet via Submarine Swaps by Boltz</small></h1>
            <button onClick={() => navigate("/wallet")}>Create Wallet</button>
        </div>
    );
};

export default Overview;
