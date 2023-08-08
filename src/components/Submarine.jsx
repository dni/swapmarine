import "../style/submarine.scss";
const Submarine = (params) => {
    params.circle = "0";
    return (
        <div class="sea">
            <div class={params.circle === "1" ? "circle-wrapper" : ""}>
                <div class="bubble"></div>
                <div class="submarine-wrapper">
                    <div class="submarine-body">
                        <div class="window"></div>
                        <div class="engine"></div>
                        <div class="light"></div>
                    </div>
                    <div class="helix"></div>
                    <div class="hat">
                      <div class="leds-wrapper">
                          <div class="periscope"></div>
                          <div class="leds"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submarine;
