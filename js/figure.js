class Figure {
    constructor(posX, posY, fill) {
        this.posX = posX
        this.posY = posY
        this.fill = fill
        // this.fill = new Image()
        // this.fill.src = './img/img1.jpg'
    } 

    // gradient(gradient) {
    //     this.gradient = gradient
    // }

    getPosX() {
        return this.posX
    }
    getPosY() {
        return this.posY
    }
    getFill() {
        return this.fill
    }

}

class FigureContext {
    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        // this.context.createImageData(width, height, alpha)

    } 
    
    context() {
        let canvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        return context
    }


    getPosX() {
        return this.posX
    }
    getPosY() {
        return this.posY
    }
    getFill() {
        return this.fill
    }
    getContext() {
        return this.context
    }
    getCanvas() {
        return this.canvas
    }
    getContext() {
        return this.context
    }
}
