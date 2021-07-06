class Pipe {
    constructor(){
        this.posY = 0;
        this.posX = 0;
        this.pipeContainer = null;
        this.pipe = []
    }
    // move (){
    //     this.pipe[0] = {
    //         x: this.container.width,
    //         y: 0
    //     }
    //     for (let i = 0; i < this.pipe.length; i++) {
    //         this.draw(this.pipe[i].x, this.pipe[i].y);
    //         this.pipe[i].x--
    //     }
    // }

    init (){
        const pipeUp = document.createElement('div')
        const pipeBottom = document.createElement('div')
        pipeUp.classList = 'pipeUpper'
        pipeBottom.classList = 'pipeLower'
        this.pipeContainer = document.getElementsByClassName('pipe')[0]
        this.pipeContainer.appendChild(pipeUp)
        this.pipeContainer.appendChild(pipeBottom)
        this.posY = 0
        this.posX = 0
    }

    draw (){
        this.pipeContainer.style.top = this.posY + 'px';
        this.pipeContainer.style.right = this.posX + 'px';
        // console.log('draw pipe');
      }
}
