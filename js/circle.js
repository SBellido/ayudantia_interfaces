class Circle extends Figure {
    constructor(posX, posY, fill, radio) {
        super(posX, posY, fill)
        this.radio = radio
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    getRadio() {
        return this.radio
    }

}


class CircleContext extends FigureContext {
    constructor(posX, posY, radio) {
        super(posX, posY)
        this.radio = radio
    }

    getRadio() {
        return this.radio;
    }

    fillFigure(pattern) {
        context.beginPath()
        context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        context.fillStyle = pattern
        context.fill()
        context.closePath()
    }

    draw() {
        this.context.beginPath()
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI)
        this.context.fillStyle = this.fill
        this.context.fill()
        this.context.closePath()
    }

}
