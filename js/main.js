let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

let figures = []
let pictures = []

canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let widthCanvas = canvas.width
let heightCanvas = canvas.height 
let startCanvasX = 0
let startCanvasY = 0
let alpha = 255

/* 
CARGA RANDOM DE GRADIENTES EN UN OBJETO RECTÁNGULO 
QUE SE DIBUJA CADA 2 SEGUNDOS OCUPANDO EL 100% DEL CANVAS
*/

setInterval(() => {
    drawFiguresGradientFill()
}, 2000)

function drawFiguresGradientFill() {
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context)
    }
    addCircleGradientFill()
}

function addCircleGradientFill() {
    radio = widthCanvas / 2
    let color1 = randomRGBA()
    let color2 = randomRGBA()
    let color3 = randomRGBA()

    let gradient = context.createLinearGradient(startCanvasX, startCanvasY, widthCanvas, heightCanvas)
    // let gradientRadial = context.createRadialGradient(0, 0, 0, 250, 250, 500)
    let gradientRadial = context.createRadialGradient(250, 250, 0, 250, 250, 500)

    gradientRadial.addColorStop(0, color1)
    gradientRadial.addColorStop(0.5, color2)
    gradientRadial.addColorStop(1, color3)
    
    gradient.addColorStop(0, color1)
    gradient.addColorStop(0.5, color2)
    gradient.addColorStop(1, color3)

    let circle = new Circle(widthCanvas / 2, heightCanvas / 2, gradientRadial, radio)
    figures.push(circle)    

}

// function addRectGradientFill() {
//     let color1 = randomRGBA()
//     let color2 = randomRGBA()
//     let color3 = randomRGBA()
//     let gradient = context.createLinearGradient(0, 0, widthCanvas, heightCanvas)
//     gradient.addColorStop(0, color1)
//     gradient.addColorStop(0.5, color2)
//     gradient.addColorStop(1, color3)
//     let rect = new Rect(startCanvasX, startCanvasY, gradient, widthCanvas, heightCanvas)
//     figures.push(rect)    
// }


/*
RELLENA UN OBJETO FIGURA CON UNA IMAGEN
*/
let contextPicture = canvas.getContext('2d')
let radio = 100
let posXCircle = radio
let posYCircle = radio
let circleContext = new CircleContext(posXCircle, posYCircle, radio)
let rectContext = new RectContext(startCanvasX, startCanvasY, widthCanvas, heightCanvas)

addCircleFillPicture()

function addCircleFillPicture() {
    // contextPicture.translate((width / 2) - radio, (height / 2) - radio);
    let picture = document.getElementById('img4')
    let pattern = contextPicture.createPattern(picture, 'no-repeat')
    rectContext.fillFigure(pattern)
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


/* 
EVENTOS: SE DETECTA LA POSICIÓN Y EL CLICK DEL MOUSE. 
SE IMPRIME POR CONSOLA
*/
// function getMousePos(canvas, event) {
//     let clientRect = canvas.getBoundingClientRect()
//     return {
//         posX : Math.round(event.clientX - clientRect.left),
//         posY: Math.round(event.clientY - clientRect.top),
//         // width: clientRect.width,
//         // height: clientRect.height
//     }
// }

// canvas.addEventListener ('mousedown', (event) => {
//     event.preventDefault()
//     event.stopPropagation()
//     let mousePos = getMousePos(canvas, event)
//     let message = 'Las coordenadas del clic son X = ' + mousePos.posX 
//         + ', Y = ' + mousePos.posY
//         + ', Width = ' + mousePos.width 
//         + ', Height = ' + mousePos.height
//     console.log(message)
//     overFigure(rectContext, mousePos.posX, mousePos.posY)
//     // console.log(mousePos.width, mousePos.height)
// })

   

// function overFigure(circleContext, x, y){
//     if( 100 > Math.abs(circleContext.posX - x) ) {
//         if( 100 > Math.abs(circleContext.posY - y) ) {
//             console.log('es una figura')
            
//         }
//     }
// }

// canvas.addEventListener('mousemove', (event) => {
//     event.preventDefault()
//     event.stopPropagation()
//     let mousePos = getMousePos(canvas, event)
//     overFigure(circleContext, mousePos.posX, mousePos.posY)
//     console.log(mousePos)
// })


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
    let posX = Math.round(Math.random() * widthCanvas)
    let posY = Math.round(Math.random() * heightCanvas)
    let color = randomRGBA()
    let rect = new Rect(posX, posY, color, 20, 20)
    figures.push(rect)    
}

function addCircle() {  
    let posX = Math.round(Math.random() * widthCanvas)
    let posY = Math.round(Math.random() * heightCanvas)
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