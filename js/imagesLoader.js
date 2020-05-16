
// let canvas = document.getElementById('canvasFigures')
// let ctx = canvas.getContext('2d')
// let pitures = []
// let imageData = ctx.createImageData(20, 20, alpha)
// window.onload = () => {
//   let pictureCount = 4
//   let pictureLoaded = 0
//   for (var i = 1; i <= pictureCount; i++) {
//     let img = new Image()
//     img.src = "img/img" + i +".jpg"
//     img.onload = () => {
//       pitures.push(this)
//       pictureLoaded++
//       drawAllPictures()
//       // Una vez que se cargaron todas las imagenes, comenzamos el juego
//       if(imagesLoaded == imageCount) drawAllPictures()
//       // if(imagesLoaded == imageCount) startGame(6, 100, 100)
//     }
//   }
// }

function drawAllPictures() {
  for (const pic in pictures) {
    if (pictures.hasOwnProperty(pic)) {
      const picture = pictures[pic];
      CallDrawImageMethod(picture)
    }
  }
} 

}
function CallDrawImageMethod(imageData) {
    ctx.drawImage(imageData, 0, 0)
    ctx.putImageData (imageData, 0, 0 )
}

function setPixel(imageData, x, y, r, g, b, a) {
  index = (x + y * imageData.width) * 4
  imageData.data[index + 0] = r 
  imageData.data[index + 1] = g
  imageData.data[index + 2] = b
  imageData.data[index + 3] = a
}

function generateAverageGray(r, g, b) {
  let gray = (r + g + b) / 3
  return gray
}

function getRed(imagedata, x, y) {
  index = (x + y * imagedata.width) * 4
  return imagedata.data[index + 0]
}

function getGreen(imagedata, x, y) {
  index = (x + y * imagedata.width) * 4
  return imagedata.data[index + 1]
}

function getBlue(imagedata, x, y) {
  index = (x + y * imagedata.width) * 4
  return imagedata.data[index + 2]
}
