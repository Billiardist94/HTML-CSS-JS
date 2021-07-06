class Bird {

    constructor(land){
      this.width = 38
      this.height = 26
  
      this.posX = 0
      this.posY = 0
  
      this.speed = 0
  
      this.container = null
      this.birdContainer = null

      this.land = land

      this.onClick = this.fly.bind(this);
    }

      move () {
        this.posY -= this.speed
      }
      
      fly () {
        this.posY += 20
      }

      init (){
        this.container = document.getElementById('container')
        this.birdContainer = document.getElementById('player')
        this.birdContainer.style.width = this.width + 'px'
        this.birdContainer.style.height = this.height + 'px'
        this.container.addEventListener('click', this.onClick)
        console.log(this.posY);
        this.posX = 150
        this.posY = 300
        this.speed = 1
      }
  
      draw (){
        this.move()
        this.birdContainer.style.bottom = this.posY + 'px';
        this.birdContainer.style.left = this.posX + 'px';
      }
  
      drawSprite(){
        const sprites = ['obs1' , 'obs2']
      }
  
   }
  
   class Game {
    constructor(bird, pipes, land) {
      this.bird = bird;
      this.pipes = pipes;
      this.tick = 0
      this.land = land
      this.animation = null

      this.btnStart = null
      this.btnContinue = null
      this.btnPause = null
      this.btnRestart = null

      this.stopGame = this.step.bind(this)
      this.gamePaused = true
      this.gameOver = false
    }


    init() {
      this.btnStart = document.createElement('button');
      this.btnPause = document.createElement('button');
      this.btnRestart = document.createElement('button');
      this.btnContinue = document.createElement('button')

      this.container = document.getElementById('container')
      this.container.insertBefore(this.btnStart, this.container.firstChild);
      this.btnStart.after(this.btnPause);
      this.btnPause.after(this.btnRestart)

      this.btnStart.innerText = 'Start'
      this.btnPause.innerText = 'Pause'
      this.btnRestart.innerText = 'Restart'
      this.btnContinue.innerText = 'Continue'

      this.btnStart.addEventListener('click', this.start.bind(this));
      this.btnPause.addEventListener('click', this.pause.bind(this))
      this.btnRestart.addEventListener('click', this.restart.bind(this))
      this.btnContinue.addEventListener('click', this.continue.bind(this))
    }

    restart(event) {
      if (event) {
        event.stopPropagation()
      }
      this.stop()
      this.start() 
      this.gamePaused = false
    }

    start(event) {
      if (event) {
        event.stopPropagation()
      }
      bird.init()
      land.init()
      pipes.init()
      this.gamePaused = false
      this.btnStart.disabled = true
      this.gameOver = false
      this.step()
    }

    continue(event) {
      if (event) {
        event.stopPropagation()
      }
      this.container.replaceChild(this.btnStart, this.btnContinue)
      this.gamePaused = false
      this.bird.speed = 1
      this.step()
      this.btnStart.disabled = true
      this.btnPause.disabled = false
    }

    pause(event) {
      if (event) {
        event.stopPropagation()
      }
      this.gamePaused = true
      this.btnStart.disabled = false
      this.btnPause.disabled = true
      if (!this.gameOver) {
        this.container.replaceChild(this.btnContinue, this.btnStart)
      } 
      this.stop()
    }
    
    stop() {
      // console.log(this);
      this.bird.speed = 0
      this.container.removeEventListener('click', this.onClick)
      window.cancelAnimationFrame(this.animation)
    }

    endGame() {
      this.gameOver = true
      this.stop()
    }

    calcCollision (){
      const obs = ['obs1' , 'obs2']
      if (this.bird.posY < this.land.posY) {
        console.log('animation', this.animation);
        this.endGame()
        return
      }
    }

    step () {
      this.tick +=1;
      this.calcCollision()
      this.bird.draw()
      if (this.tick % 12 === 0) {
        // this.bird.drawSprite()

      };
      this.pipes.draw()
      console.log('animation', this.animation);
      if (!this.gameOver || this.gamePaused) {
        this.animation = window.requestAnimationFrame(this.stopGame);
      } 
    }
  
   }
   const pipes = new Pipe()
   const land = new Land()
   const bird = new Bird(land)
   const game = new Game(bird, pipes, land)
   game.init()

   


