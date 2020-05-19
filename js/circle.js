class Circle extends Figure {
    constructor(posX, posY, radio) {
        super(posX, posY)
        this.radio = radio
        this.context = super.getContext()
    }

    fillFigure(pattern) {
       this.context.beginPath()
       this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
       this.context.fillStyle = pattern
       this.context.fill()
       this.context.closePath()
    }

    draw() {
        this.context.beginPath()
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        this.context.fillStyle = this.fill
        this.context.fill()
        this.context.closePath()
    }

    getRadio() {
        return this.radio
    }

}

