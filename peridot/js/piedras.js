function showStone(name) {

    document.getElementById("modalTitle").textContent = name;

    document.getElementById("modalText").textContent =
        `Información sobre ${name}.
        Esta piedra forma parte de las opciones
        de la colección PERIDOT.sv.`;

    document
        .getElementById("modal")
        .classList
        .remove("hidden");
}


function closeModal() {

    document
        .getElementById("modal")
        .classList
        .add("hidden");
}