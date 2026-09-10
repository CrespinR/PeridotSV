/* =========================================
   PRODUCTOS PARA HOMBRES
========================================= */

const menProducts = [

    {
        name: "Pulsera Fiera",
        price: 18,
        image: "img/pulsera-fiera.jpg"
    },

    {
        name: "Cielo Profundo",
        price: 20,
        image: "img/cielo-profundo.jpg"
    },

    {
        name: "Selva Nocturna",
        price: 19,
        image: "img/selva-nocturna.jpg"
    },

    {
        name: "Pulsera Alpha",
        price: 22,
        image: "img/pulsera-alpha.jpg"
    },

    {
        name: "Pulsera Eclipse",
        price: 21,
        image: "img/pulsera-eclipse.jpg"
    },

    {
        name: "Piedras Naturales",
        price: 17,
        image: "img/piedras-naturales.jpg"
    }

];


/* =========================================
   PRODUCTOS PARA MUJERES
========================================= */

const womenProducts = [

    {
        name: "Venturina",
        price: 18,
        image: "img/venturina.jpg"
    },

    {
        name: "Pulsera Verde",
        price: 19,
        image: "img/pulsera-verde.jpg"
    },

    {
        name: "Mar",
        price: 28,
        image: "img/Mar.jpg"
    },

    {
        name: "Asimétricos",
        price: 22,
        image: "img/asimetricos.jpg"
    },

    {
        name: "Cuarzo Rosa",
        price: 20,
        image: "img/cuarzo-rosa.jpg"
    },

    {
        name: "Acero inoxidable estilo gota",
        price: 24,
        image: "img/acero-gota.jpg"
    }

];


/* =========================================
   CARRITO
========================================= */

let cart = 0;


/* =========================================
   PRODUCTOS PERSONALIZADOS
========================================= */

let customBeads = [];


/* =========================================
   CREAR TARJETA DE PRODUCTO
========================================= */

function productCard(product) {

    return `

        <article class="product">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.onerror=null;this.src='img/placeholder.svg';"
                >

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Piedras naturales · Hecho a mano
                </p>


                <div class="product-row">

                    <span class="price">
                        $${product.price.toFixed(2)}
                    </span>


                    <button
                        onclick="showProduct('${product.name}', ${product.price})">

                        Más info

                    </button>

                </div>

            </div>

        </article>

    `;
}


/* =========================================
   MOSTRAR PRODUCTOS
========================================= */

document.getElementById("menGrid").innerHTML =
    menProducts
        .map(productCard)
        .join("");


document.getElementById("womenGrid").innerHTML =
    womenProducts
        .map(productCard)
        .join("");



/* =========================================
   MOSTRAR INFORMACIÓN DEL PRODUCTO
========================================= */

function showProduct(name, price) {

    document.getElementById("modalTitle").textContent =
        name;


    document.getElementById("modalText").textContent =

        `${name} — $${price.toFixed(2)}.

        Producto de joyería artesanal.
        Puedes solicitarlo mediante el formulario
        de pedido.`;


    document
        .getElementById("modal")
        .classList
        .remove("hidden");
}



/* =========================================
   INFORMACIÓN DE LAS PIEDRAS
========================================= */

function showStone(name) {

    document.getElementById("modalTitle").textContent =
        name;


    document.getElementById("modalText").textContent =

        `Información sobre ${name}.
        Esta piedra forma parte de las opciones
        de la colección PERIDOT.sv.`;


    document
        .getElementById("modal")
        .classList
        .remove("hidden");
}



/* =========================================
   CERRAR MODAL
========================================= */

function closeModal() {

    document
        .getElementById("modal")
        .classList
        .add("hidden");

}



/* =========================================
   AGREGAR UNA PIEZA AL DISEÑO
========================================= */

function addBead(value, type) {

    customBeads.push({

        value: value,

        type: type

    });


    renderBracelet();

}



/* =========================================
   MOSTRAR PULSERA PERSONALIZADA
========================================= */

function renderBracelet() {

    const bracelet =
        document.getElementById("bracelet");


    if (customBeads.length === 0) {

        bracelet.innerHTML = `

            <span class="custom-bead">
                ●
            </span>

            <span class="custom-bead">
                ●
            </span>

            <span class="custom-bead">
                ●
            </span>

        `;

    }

    else {

        bracelet.innerHTML =

            customBeads
                .map(function(bead) {

                    return `

                        <span
                            class="custom-bead
                            ${bead.type === "stone" ? "stone" : ""}">

                            ${bead.value}

                        </span>

                    `;

                })
                .join("");

    }


    /* Precio */

    const price =
        15 +
        (customBeads.length * 1.50);


    document.getElementById("customPrice").textContent =

        `Precio estimado: $${price.toFixed(2)}`;

}



/* =========================================
   LIMPIAR PULSERA
========================================= */

function clearBracelet() {

    customBeads = [];

    renderBracelet();

}



/* =========================================
   AGREGAR PERSONALIZADA AL CARRITO
========================================= */

function addCustom() {

    cart++;


    document.getElementById("cartCount").textContent =
        cart;


    alert(
        "Diseño personalizado agregado al carrito."
    );

}



/* =========================================
   FORMULARIO
========================================= */

document
    .getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const message =
            document.getElementById("formMessage");


        message.textContent =
            "¡Pedido registrado correctamente! " +
            "Nos pondremos en contacto contigo.";


        this.reset();

    });



/* =========================================
   INICIAR PULSERA
========================================= */

renderBracelet();