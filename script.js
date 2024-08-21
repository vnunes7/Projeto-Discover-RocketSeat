function toggleMode() {
  const html = document.documentElement

  /* Utilizando IF e ELSE */
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  /*Podemos utilizar uma unca linha de código
  html.classList.toggle("light") */

  // Pegar a tag Imagem (img)
  const img = document.querySelector("#profile img")

  //substituindo a imagem
  if (html.classList.contains("light")) {
    //Se estiver em light mode, adicionar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se não estiver em light mode, manter imagem original
    img.setAttribute("src", "./assets/avatar.png")
  }
}
