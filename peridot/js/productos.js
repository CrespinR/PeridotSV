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
   MOSTRAR PRODUCTOS DE HOMBRES
========================================= */

const menGrid = document.getElementById("menGrid");

if (menGrid) {

    menGrid.innerHTML =
        menProducts
            .map(productCard)
            .join("");

}


/* =========================================
   MOSTRAR PRODUCTOS DE MUJERES
========================================= */

const womenGrid = document.getElementById("womenGrid");

if (womenGrid) {

    womenGrid.innerHTML =
        womenProducts
            .map(productCard)
            .join("");

}


/* =========================================
   MOSTRAR INFORMACIÓN DEL PRODUCTO
========================================= */

function showProduct(name, price) {

    const modal = document.getElementById("modal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalText =
        document.getElementById("modalText");


    if (!modal || !modalTitle || !modalText) {
        return;
    }


    modalTitle.textContent = name;


    modalText.textContent =
        `${name} — $${price.toFixed(2)}. ` +
        `Producto de joyería artesanal. ` +
        `Puedes solicitarlo mediante el formulario ` +
        `de pedido.`;


    modal.classList.remove("hidden");
}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal() {

    const modal =
        document.getElementById("modal");


    if (!modal) {
        return;
    }


    modal.classList.add("hidden");
}