class Figure {
    constructor(posX, posY, fill) {
        this.posX = posX
        this.posY = posY
        this.fill = fill
        // this.fill = new Image()
        // this.fill.src = './img/img1.jpg'
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

}

class FigureContext {
    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
    } 

    getContext() {    
        let canvas = document.getElementById('canvasPicture')
        let context = canvas.getContext('2d')
        return context
    }
    
    gradient(gradient) {
        this.gradient = gradient
    }
    getPosition() {
        return { 
            x: this.getPosX(),
            y: this.getPosY()
        }
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
   
}