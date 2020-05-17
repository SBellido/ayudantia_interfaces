class FigureContext {
    constructor(posX, posY, fill, context) {
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.context = context
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

