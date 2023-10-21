function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // se tiver light mode, adicionar a img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/chmcapel_profile_light.png")
    img.setAttribute("alt", "Foto Carlos Henrique M. Capel (Light Mode)")
  } else {
    // caso não esteja light mode, manter a img normal
    img.setAttribute("src", "./assets/chmcapel_profile_dark.png")
    img.setAttribute("alt", "Foto Carlos Henrique M. Capel (Dark Mode)")
  }
}
