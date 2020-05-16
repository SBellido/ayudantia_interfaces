
let canvas = document.getElementById('canvasFigures')
let ctx = canvas.getContext('2d')

let figures = []
let pictures = []

canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let width = canvas.width
let height = canvas.height 
let startCanvasX = 0
let startCanvasY = 0
let alpha = 255

let imageData = ctx.createImageData(20, 20, alpha)
window.onload = () => {
    let picturesCount = 4
    let picturesLoaded = 0
    for (var i = 1; i <= picturesCount; i++) {
      let img = new Image()
      img.src = "img/img" + i +".jpg"
      img.onload = () => {
        pictures.push(img)
        picturesLoaded++
        // Una vez que se cargaron todas las imagenes, comenzamos el juego
        if(picturesLoaded == picturesCount) drawAllPictures() 
        // if(imagesLoaded == imageCount) startGame(6, 100, 100)
      }
    }
  }
 
function drawAllPictures() {
    for (let i = 0; i < pictures.length; i++) {
        let picture = pictures[i];
        ctx.drawImage(picture, 0, 0)
        
    }
} 
  
  function CallDrawImageMethod(imageData) {
      ctx.drawImage(imageData, 0, 0)
      
  }



// setInterval(() => {
//     drawFiguresGradientFill()
// }, 3000)

function drawFiguresGradientFill() {
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(ctx)
    }
    addRectGradientFill()
}
function addRectGradientFill() {
    let color1 = randomRGBA()
    let color2 = randomRGBA()
    let color3 = randomRGBA()
    let gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, color1)
    gradient.addColorStop(0.5, color2)
    gradient.addColorStop(1, color3)
    let rect = new Rect(startCanvasX, startCanvasY, gradient, width, height)
    figures.push(rect)    
}

function getMousePos(canvas, event) {
    let clientRect = canvas.getBoundingClientRect()
    return {
        posX: Math.round(event.clientX - clientRect.left),
        posY: Math.round(event.clientY - clientRect.top),
        width: clientRect.width,
        height: clientRect.height
    }
}

canvas.addEventListener ('mousedown', (event) => {
    event.preventDefault()
    event.stopPropagation()
    let mousePos = getMousePos(canvas, event)
    let message = 'Las coordenadas del clic son X = ' + mousePos.posX 
        + ', Y = ' + mousePos.posY
        + ', Width = ' + mousePos.width 
        + ', Height = ' + mousePos.height
    console.log(message)
    console.log(canvas.width, canvas.height)
})

canvas.addEventListener('mousemove', (event) => {
    event.preventDefault()
    event.stopPropagation()
    let mousePos = getMousePos(canvas, event)
    console.log(mousePos); 
})


// setInterval(() => {
//     drawFigures()
// }, 1000)

function drawFigures() {
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(ctx)
    }
    addRect()
    addCircle()
}

function addRect() {
    let posX = Math.round(Math.random() * width)
    let posY = Math.round(Math.random() * height)
    let color = randomRGBA()
    let rect = new Rect(posX, posY, color, 20, 20)
    figures.push(rect)    
}

function addCircle() {  
    let posX = Math.round(Math.random() * width)
    let posY = Math.round(Math.random() * height)
    let color = randomRGBA()
    let circle = new Circle(posX, posY, color, 20)
    figures.push(circle)
}

function randomRGBA() {
	let r = Math.round(Math.random() * 255)
	let g = Math.round(Math.random() * 255)
	let b = Math.round(Math.random() * 255)
	let a = 255
	return `rgba(${r}, ${g}, ${b}, ${a})`
}
