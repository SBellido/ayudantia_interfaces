class Figure {
    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
       
    } 
  
    getContext() {    
        let canvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        return context
    }
    
    fillIn(fill) {
        this.fill = fill
    }
    
    getPosition() {
        return { 
            x: this.getPosX(),
            y: this.getPosY()
        }
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
