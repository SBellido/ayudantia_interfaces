
class Rect extends Figure {
    constructor(posX, posY, fill, width, height) {
        super(posX, posY, fill)
        this.width = width
        this.height = height
    }

     drawFill(ctx){
        let image = ctx.createPattern(img,"repeat");
        ctx.rect(0, 0, 150, 100);
        ctx.fillStyle = image;
        ctx.fill();
    }

    drawGradientFill(ctx) {
        let gradient = ctx.createLinearGradient(10, 90, 200, 90);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(1, 'white');
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 10, 200, 250);
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