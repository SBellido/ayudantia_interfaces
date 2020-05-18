class Rect extends Figure {
    constructor(posX, posY, fill, width, height) {
        super(posX, posY, fill)
        this.width = width
        this.height = height
    }

    draw(ctx) {
        ctx.fillStyle = this.fill
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }

    
}

class RectContext extends FigureContext {
    constructor(posX, posY, width, height) {
        super(posX, posY)
        this.width = width
        this.height = height
    }

    fillFigure(pattern) {
        context.beginPath()
        context.fillStyle = pattern
        context.fillRect(this.posX, this.posY, this.width, this.height)
        context.fillStyle = pattern
        context.fill()
        context.closePath()
    }

    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }

    
}