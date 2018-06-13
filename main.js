class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(course) {
    this.direction = course
    this.$img.classList = course
  }
}

const image = document.createElement('img')
image.src = 'https://opengameart.org/sites/default/files/simple-travel-car-top_view.svg'
image.setAttribute("width", "200px")
image.setAttribute("height", "100px")

document.body.appendChild(image)

const ferarri = new Car(image, 0, null, [0,0])
