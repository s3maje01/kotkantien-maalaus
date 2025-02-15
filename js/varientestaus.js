$(document).ready(function () {
    let selectedBox = null; // tallennetaan valittu laatikko
    const colors = [ // värivaihtoehdot
        "#DD4132", "#9E1030", "#FE840E", "#FF6F61", "#C62168", "#8D9440",
        "#FFD662", "#00539C", "#775139", "#D69C2F", "#616247", "#E8B5CE",
        "#D2C29D", "#343148", "#F0EAD6", "#615550"
    ];

    function generateColorCircles() {
        const colorContainer = $(".color-options"); // Haetaan värivalintaelementti
        colors.forEach(color => {
            // Luodaan väriympyrä ja siihen liittyvä värikoodi
            const colorElement = $(`
                <div class="text-center">
                    <div class="color-circle" data-color="${color}" style="background-color: ${color};"></div>
                    <div class="color-code">${color}</div>
                </div>
            `);
            // Lisätään klikkaustapahtuma värin valitsemiseksi
            colorElement.find(".color-circle").click(function () {
                $(".color-circle").removeClass("selected");
                $(this).addClass("selected"); // Valitaan klikattu ympyrä
            });
            colorContainer.append(colorElement); // Lisätään värielementti DOM:iin
        });
    }

    window.selectBox = function (boxNumber) {
        $(".box").removeClass("selected");
        selectedBox = `#box${boxNumber}`;
        $(selectedBox).addClass("selected"); // Korostetaan valittu laatikko
    };
    // Väriasetuspainikkeen tapahtumankäsittelijä
    $("#applyColor").click(function () {
        if (!selectedBox) {
            alert("Valitse ensin seinä!");
            return;
        }
        const selectedColor = $(".color-circle.selected").data("color"); // Haetaan valittu väri
        if (!selectedColor) {
            alert("Valitse väri!");
            return;
        }
        $(selectedBox).css("background-color", selectedColor);
    });

    $("#resetColors").click(function () {
        $(".box").css("background-color", "white"); // Palautetaan oletusväri
    });

    generateColorCircles(); // Luodaan värivalintaympyrät sivun latautuessa
});
