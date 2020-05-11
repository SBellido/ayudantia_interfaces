let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height
let alpha = 255
let imageData = ctx.createImageData(width, height, alpha)
let picture = new Image()


function CallDrawImageMethod(imageData) {
    ctx.drawImage(imageData, 0, 0)
}

function originPicture() {
    CallDrawImageMethod(picture)
}

function changeImage(imageData) {
    ctx.drawImage(picture, 0, 0)
    ctx.putImageData(imageData, 0, 0)
}

function loadImage() {  
    let inputFile = document.getElementById('inputFile')
    inputFile.addEventListener('change', showImage)
}

buttonBinarization.onclick = () => { binarization() }
buttonBlur.onclick = () => { blurGaussian() }
buttonBright.onclick = () => { bright() }
buttonGrayScale.onclick = () => { grayVersion() }
buttonSepia.onclick = () => { sepia() }
buttonNegative.onclick = () => { negative() }
buttonSaturation.onclick = () => { saturation() }
buttonClear.onclick = () => { clear() }

let buttonSave = document.getElementById('save')
buttonSave.addEventListener('click', (e) => {
    let dataURL = canvas.toDataURL('image/jpg')
    buttonSave.href = dataURL
})

function saturation() {
    let valueSat = 10
    let imageData = ctx.getImageData(0, 0, width, height, alpha) 
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let r = getRed(imageData, x, y)
        let g = getGreen(imageData, x, y)
        let b = getBlue(imageData, x, y)
        let hsl = rgbToHsl(r, g, b)
        hsl[1] = valueSat
        let rgb = hslToRgb(hsl[0], hsl[1], hsl[2])
        setPixel(imageData, x, y, rgb[0], rgb[1], rgb[2], 255)
      }
    }
    ctx.putImageData(imageData, 0, 0)
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255
    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2
    if(max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min
        if(s = l > 0.5) {
            d / (2 - max - min)
        } else {
            d / (max + min)
        } 
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0)
            break
            case g: h = (b - r) / d + 2
            break
            case b: h = (r - g) / d + 4
            break
        }
        h /= 6
    }
    return [h, s, l]
}

function hslToRgb(h, s, l) {
    let r, g, b
    if (s == 0) {
      r = g = b = l
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      } 
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }
    return [r * 255, g * 255, b * 255]
}

function blurGaussian() {  
    let imageData = ctx.getImageData(0, 0, width, height, alpha) 
    let arr = [1,1,1,1,1,1,1,1,1];
    for(x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            let valR = multiplyColor(imageData, arr, getRed) / 9;
            let valG = multiplyColor(imageData, arr, getGreen) / 9;
            let valB = multiplyColor(imageData, arr, getBlue) / 9;
            setPixel(imageData, x, y, valR, valG, valB, 255);
        }
    }
    changeImage(imageData);
}

function multiplyColor(imageData, arrPos, getColor){
    let valor = ( getColor(imageData, x-1, y-1) * arrPos[0] 
        + getColor(imageData, x-1, y) * arrPos[1] 
        + getColor(imageData, x-1, y+1) * arrPos[2] 
        + getColor(imageData, x, y-1) * arrPos[3] 
        + getColor(imageData, x, y) * arrPos[4]  
        + getColor(imageData, x, y+1) * arrPos[5] 
        + getColor(imageData, x+1, y-1) * arrPos[6]
        + getColor(imageData, x+1, y) * arrPos[7] 
        + getColor(imageData, x+1, y+1) * arrPos[8]);
    return valor;
}

function binarization() {
    let bina = 128
    let imageData = ctx.getImageData(0, 0, width, height, alpha)
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = getRed(imageData, x, y) 
            g = getGreen(imageData, x, y)
            b = getBlue(imageData, x, y)
            let averaGray = generateAverageGray(r, g, b)
            averaGray > bina ? setPixel(imageData, x, y, 255, 255, 255, alpha) 
                : setPixel(imageData, x, y, 0, 0, 0, alpha)       
        }
    }
    changeImage(imageData);
}

function bright() {
    let imageData = ctx.getImageData(0, 0, width, height, alpha)
    let bright = 25;
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = getRed(imageData, x, y) + bright
            g = getGreen(imageData, x, y) + bright
            b = getBlue(imageData, x, y) + bright
            setPixel(imageData, x, y, r, g, b, alpha)
        }
    }
    changeImage(imageData);
}

function showImage(event) { 
    clear(alpha)
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (event) => {
      image = document.getElementById('img')
      image.src = event.target.result
      picture.src = image.src 
      image.onload = function() {
          width = image.width
          height = image.height
        CallDrawImageMethod(image)
      }
    }
    reader.readAsDataURL(file);
}

function clear() {
    let imageData = ctx.createImageData(width, height);
    for(x = 0; x < width; x++){
        for(y = 0; y < height; y++) {
            setPixel(imageData, x, y, 255, 255, 255, alpha);
        }
    }
    changeImage(imageData);
}

function sepia() {
    let imageData = ctx.getImageData(0, 0, width, height, alpha)
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = getRed(imageData, x, y);
            g = getGreen(imageData, x, y);
            b = getBlue(imageData, x, y);
            sepiaR = Math.floor(0.393 * r + 0.769 * g + 0.189 * b);
            sepiaG = Math.floor(0.349 * r + 0.686 * g + 0.168 * b);
            sepiaB = Math.floor(0.272 * r + 0.534 * g + 0.131 * b);
            setPixel(imageData, x, y, sepiaR, sepiaG, sepiaB, alpha)
        }
    }
    changeImage(imageData);
}

function negative() {
    let inverse = 255
    let imageData = ctx.getImageData(0, 0, width, height, alpha)
    for ( x = 0; x < width; x++) {
        for ( y = 0; y < height; y++) {
            let r = getRed(imageData, x, y)
            let g = getGreen(imageData, x, y)
            let b = getBlue(imageData, x, y)
            let rInverse = inverse - r
            let gInverse = inverse - g
            let bInverse = inverse - b
            setPixel(imageData,x, y, rInverse, gInverse, bInverse, alpha)
        }
    }
    changeImage(imageData)
}

function grayVersion() {
    let imageData = ctx.getImageData(0, 0, width, height, alpha)
    for (let x = 0; x < width; x ++) {
        for (let y = 0; y < height; y ++) {
            let r = getRed(imageData, x, y)
            let g = getGreen(imageData, x, y)
            let b = getBlue(imageData, x, y)
            let averaGray = generateAverageGray(r, g, b)
            setPixel(imageData, x, y, averaGray, averaGray, averaGray, alpha)
        }
    }
    changeImage(imageData)
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

// function saturation() {
//     let sat = 10
//     let imageData = ctx.getImageData(0, 0, width, height, alpha)
//     for (x = 0; x < width; x++) {
//         for (y = 0; y < height; y++) {
//             r = getRed(imageData, x, y) 
//             g = getGreen(imageData, x, y)
//             b = getBlue(imageData, x, y)
//             let hsb = rgbToHsl(r, g, b)
//             for (x = 0; x < hsb.length; x++) {
//                 s = hsb[1]
//                 s += sat
//                 setPixel(imageData, x, y, hsb[0], hsb[1], hsb[2], alpha)
//             }
//         }
//     }
//     changeImage(imageData);
// }


// function restoreImage() {
//     let imageData = ctx.getImageData(0, 0, width, height)
//     let restore = document.getElementById('img')
//     changeImage(imageData)
// }
