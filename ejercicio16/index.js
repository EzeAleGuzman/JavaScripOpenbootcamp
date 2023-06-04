const img = document.querySelectorAll(".img");
const cuadriculas = document.querySelectorAll(".cuadricula");

img.forEach((img) => {
  img.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando la imagen: " + img.alt);
    img.classList.add("dragging");
    event.dataTransfer.setData("text/plain", img.id);
    event.dataTransfer.effectAllowed = "move";
  });

  img.addEventListener("dragend", () => {
    img.classList.remove("dragging");
  });
});

cuadriculas.forEach((cuadricula) => {
  cuadricula.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  cuadricula.addEventListener("drop", (event) => {
    event.preventDefault();
    const id_img = event.dataTransfer.getData("text/plain");
    const img = document.getElementById(id_img);

    // Verificar si la cuadrícula ya contiene una imagen
    const existingImg = cuadricula.querySelector("img");
    if (existingImg) {
      // Si la cuadrícula ya contiene una imagen, intercambiar las posiciones
      const sourceCuadricula = img.closest(".cuadricula");
      cuadricula.removeChild(existingImg);
      sourceCuadricula.appendChild(existingImg);
    }

    // Mover la imagen a la cuadrícula de destino
    cuadricula.appendChild(img);
  });
});
