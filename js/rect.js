class Rect extends Figure {
    constructor(posX, posY, width, height) {
        super(posX, posY)
        this.width = width
        this.height = height
        this.context = super.getContext()
    }
    
    fillFigure(pattern) {
        this.context.beginPath()
        this.context.fillStyle = pattern
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
        this.context.fillStyle = pattern
        this.context.fill()
        this.context.closePath()
    }

    draw() {
        this.context.fillStyle = this.fill
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
    }
    
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }

    
}
