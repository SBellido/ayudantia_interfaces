class figureCircle extends Figure {
    constructor(posX, posY, radio) {
        super(posX, posY)
        this.radio = radio
    }
    
    getRadio() {
        return this.radio;
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
}
