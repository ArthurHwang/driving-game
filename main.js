class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
    this.started = false;
    this.interval = undefined;
  }
  turn(course) {
    this.direction = course
    this.$img.classList = course
  }
  move() {
    if (this.direction === 'north') {
      this.location[1] -= this.speed
      this.$img.style.top = this.location[1] + "px"
    }
    if (this.direction === 'south') {
      this.location[1] += this.speed
      this.$img.style.top = this.location[1] + "px"
    }
    if (this.direction === 'east') {
      this.location[0] += this.speed
      this.$img.style.left = this.location[0] + "px"
    }
    if (this.direction === 'west') {
      this.location[0] -= this.speed
      this.$img.style.left = this.location[0] + "px"
    }
  }
  start() {
    this.interval = setInterval(() => {
      this.move()
    }, 8)
    this.started = true
  }
  stop() {
    clearInterval(this.interval)
    this.started = false
  }
}

const image = document.createElement('img')
image.src = 'https://opengameart.org/sites/default/files/simple-travel-car-top_view.svg'
image.setAttribute("width", "200px")
image.setAttribute("height", "100px")
document.body.appendChild(image)

const ferarri = new Car(image, 5, 'east', [0, 0])

document.body.addEventListener('keydown', (e) => {
  if (e.code === "Space") {
    if (ferarri.started === false) {
      ferarri.start();
    } else if (ferarri.started === true) {
      ferarri.stop();
    }
  }
  if (e.code === "ArrowUp") {
    ferarri.turn('north')
  }
  if (e.code === "ArrowDown") {
    ferarri.turn('south')
  }
  if (e.code === "ArrowRight") {
    ferarri.turn('east')
  }
  if (e.code === "ArrowLeft") {
    ferarri.turn('west')
  }
})
