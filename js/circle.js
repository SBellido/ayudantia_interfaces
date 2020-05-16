class Circle extends Figure {
    constructor(posX, posY, color, radio) {
        super(posX, posY, color)
        this.radio = radio
        // this.fill = new Image()
        // this.fill.src = './img/img1.jpg'
    }    
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    // getPosX() {
    //     return this.posX
    // }
    // getPosY() {
    //     return this.posY
    // }
    // getRadio() {
    //     return this.radio
    // }
    // getFill() {
    //     return this.fill
    // }
}
