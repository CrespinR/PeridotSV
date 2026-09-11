let cart = 0;
let customBeads = [];


/* =========================================
   AGREGAR PIEZA
========================================= */

function addBead(value, type) {
    customBeads.push({
        value: value,
        type: type
    });

    renderBracelet();
}


/* =========================================
   MOSTRAR PULSERA
========================================= */

function renderBracelet() {

    const bracelet =
        document.getElementById("bracelet");

    const priceElement =
        document.getElementById("customPrice");

    if (!bracelet || !priceElement) {
        return;
    }


    /* SIN PIEZAS */

    if (customBeads.length === 0) {

        bracelet.innerHTML = `
            <span class="empty-bracelet">
                Agrega piezas para comenzar
            </span>
        `;

    } else {

        /* PIEZAS SELECCIONADAS */

        bracelet.innerHTML =
            customBeads
                .map(function(bead) {

                    return `
                        <span class="custom-bead
                            ${bead.type === "stone" ? "stone" : ""}">
                            ${bead.value}
                        </span>
                    `;

                })
                .join("");
    }


    /* PRECIO BASE + PIEZAS */

    const price =
        1.50 + (customBeads.length * 1.50);

    priceElement.textContent =
        `Precio estimado: $${price.toFixed(2)}`;
}


/* =========================================
   LIMPIAR DISEÑO
========================================= */

function clearBracelet() {

    customBeads = [];

    renderBracelet();
}


/* =========================================
   AGREGAR AL CARRITO
========================================= */

function addCustom() {

    cart++;

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart;
    }

    alert(
        "Diseño personalizado agregado al carrito."
    );
}


/* =========================================
   INICIAR
========================================= */

renderBracelet();