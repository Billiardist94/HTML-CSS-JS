class Bird {

    constructor(land){
      this.width = 30
      this.height = 30
  
      this.posX = 0
      this.posY = 0
  
      this.speed = 1
  
      this.container = null
      this.birdContainer = null

      this.land = land
    }
  
  
      move () {
        this.posY -= this.speed
      }
      
      fly () {
        console.log(this.posY);
        this.posY += 20

      }

      stop () {
          this.speed = 0
      }
  
      init (){
        this.container = document.getElementById('container')
        this.birdContainer = document.getElementById('player')
        this.container.addEventListener('click', this.fly.bind(this))
        this.posX = 150
        this.posY = 300
      }
  
      calcCollision (){
        const obs = ['obs1' , 'obs2']
        if (this.posY < this.land.posY) this.stop()
      }
  
      draw (){
        this.move()
        this.calcCollision()
        this.birdContainer.style.bottom = this.posY + 'px';
        this.birdContainer.style.left = this.posX + 'px';
      }
  
      drawSprite(){
        const sprites = ['obs1' , 'obs2']
      }
  
   }
  
  
   class Game {
    constructor(bird) {
      this.bird = bird;
      this.tick = 0
  
      this.init = function () {
        this.step()
    
      }
  
    }
  
    step () {
      this.tick +=1;
      this.bird.draw()
      if (this.tick % 12 === 0) {
        // this.bird.drawSprite()

      };
      window.requestAnimationFrame(this.step.bind(this));
    }
  
   }
   const land = new Land()
   const bird = new Bird(land)
   const game = new Game(bird)
   bird.init()
   game.init()
   land.init()
   


