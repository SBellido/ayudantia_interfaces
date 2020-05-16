class Rect extends Figure {
    constructor(posX, posY, color, width, height) {
        super(posX, posY, color)
        this.width = width
        this.height = height
    }
   
    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }
    //  drawFill(ctx){
    //     let image = ctx.createPattern(img,"repeat");
    //     ctx.rect(0, 0, 150, 100);
    //     ctx.fillStyle = image;
    //     ctx.fill();
    // }

}
