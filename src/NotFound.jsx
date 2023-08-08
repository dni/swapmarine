import { useNavigate } from "@solidjs/router";
// import { useI18n } from "@solid-primitives/i18n";

const NotFound = () => {
    // const [t] = useI18n();

    const navigate = useNavigate();

    return (
        <div id="notfound" class="inner-wrap">
            <h1>
                404: Page not found
            </h1>
            <span class="btn btn-inline" onclick={() => navigate("/")}>
                Back to home
            </span>
        </div>
    );
};

export default NotFound;

