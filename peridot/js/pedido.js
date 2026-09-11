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