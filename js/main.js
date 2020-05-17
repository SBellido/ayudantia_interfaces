
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

let figures = []
let pictures = []

canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let width = canvas.width
let height = canvas.height 
let startCanvasX = 0
let startCanvasY = 0
let alpha = 255

// let imageData = context.createImageData(20, 20, alpha)

setInterval(() => {
    addCircleWidthContex()
}, 1000)

function addCircleWidthContex() {
    let circleContext = new CircleContext(160, 140, 100)
    let context = circleContext.context()
    context.clearRect(0, 0, context.width, context.height); 
    let picture = document.getElementById('img1')
    var pattern = context.createPattern(picture, 'no-repeat');
    circleContext.fillFigure(pattern)
}

function draw() {
    var c = document.getElementById('canvas');
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); 
    var img = document.getElementById('img1')
    var pat = ctx.createPattern(img, 'no-repeat');
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
  }
/*
SE CARGAN TODAS LAS IMÉGENES DE LA CARPETA IMG EN UN ARREGLO.
SE DIBUJAN POR PANTALLA.
*/

// window.onload = () => {
//     let picturesCount = 4
//     let picturesLoaded = 0
//     for (var i = 1; i <= picturesCount; i++) {
//         let img = new Image()
//         img.src = "img/img" + i +".jpg"
//         img.onload = () => {
//             pictures.push(img)
//             picturesLoaded++
//             // Una vez que se cargaron todas las imagenes, comenzamos el juego
//             if(picturesLoaded == picturesCount) drawAllPictures() 
//             // if(imagesLoaded == imageCount) startGame(6, 100, 100)
//         }
//     }
// }
// function drawAllPictures() {
//     for (let i = 0; i < pictures.length; i++) {
//         let picture = pictures[i];
//         context.drawImage(picture, 0, 0)       
//     }
// }

// function draw() {
//     context.clearRect(0, 0, c.width, c.height); 
//     var img = document.getElementById("lamp")
//     var pat = context.createPattern(img, 'no-repeat');
//     context.rect(0, 0, 150, 100);
//     context.fillStyle = pat;
//     context.fill();
// }

function putImageInShape() {
    let image = new Image()
    image.src = "img/img1.jpg"
    image.onload = () => {
        drawPictureInShare(image.src)
        context.drawImage(imageData, 0, 0) 
        context.putImage(imageData, 0, 0)
    }
}

function drawPictureInShare(image) {
    let imagePattern = context.createPattern(imgage,"repeat");
    let rect = new Rect(10, 10, imagePattern, 20, 20)
    rect.draw(context)
}
  
function CallDrawImageMethod(imageData) {
    context.drawImage(imageData, 0, 0)     
}

/* 
CARGA RANDOM DE GRADIENTES EN UN OBJETO RECTÁNGULO 
QUE SE DIBUJA OCUPANDO EL 100% DEL CANVAS
*/

// setInterval(() => {
//     drawFiguresGradientFill()
// }, 3000)

function drawFiguresGradientFill() {
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context)
    }
    addRectGradientFill()
}

function addRectGradientFill() {
    let color1 = randomRGBA()
    let color2 = randomRGBA()
    let color3 = randomRGBA()
    let gradient = context.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, color1)
    gradient.addColorStop(0.5, color2)
    gradient.addColorStop(1, color3)
    let rect = new Rect(startCanvasX, startCanvasY, gradient, width, height)
    figures.push(rect)    
}

/* 
EVENTOS: SE DETECTA LA POSICIÓN Y EL CLICK DEL MOUSE. 
SE IMPRIME POR CONSOLA
*/
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


/* 
CARGA RANDOM DE POSICIONES Y COLORES.
SE DIBUJAN CIRCULOS Y RECTÁNGULOS EN CANVAS.
SU AGREGA CADA BJETO A UN ARREGLO.
*/

// setInterval(() => {
//     drawFigures()
// }, 1000)

function drawFigures() {
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context)
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
