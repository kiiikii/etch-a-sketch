let container = document.getElementById("grid-container")
let slider = document.getElementById("sizeSlider")

function createGrid(size) {
  container.innerHTML = ''
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')

    pixel.style.opacity = 0

    pixel.addEventListener("mouseover", () => {
      if (!pixel.style.backgroundColor) {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      }

      let currentOpacity = parseFloat(pixel.style.opacity)
      if (currentOpacity < 1) {
        pixel.style.opacity = currentOpacity + 0.1
      }
    })

    container.appendChild(pixel)
  }
}

function reset() {
  let newSize = prompt('Enter squares per side (2-64): ', slider.value)
  newSize = parseInt(newSize)

  if (!isNaN(newSize) && newSize >= 2 && newSize <= 64) {
    slider.value = newSize
    createGrid(newSize)
  } else if (newSize !== null) {
    alert('please enter a valid number between 2 & 64.')
  }
}

slider.addEventListener("input", (e) => {
  createGrid(e.target.value)
})

createGrid(16)