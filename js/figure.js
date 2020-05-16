class Figure {
    constructor(posX, posY, color) {
        this.posX = posX
        this.posY = posY
        this.color = color
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
