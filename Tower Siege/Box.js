class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            density : 0.001,
            friction : 1
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;   
    }
    score()
    {
        if(this.visibility < 0 && this.visibility > -100)
        {
            score++;
        }
    }
}