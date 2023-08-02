import { context } from '/js/main.js'

export default class Player {
    constructor() {
        this.dimensions = {
            height: 100,
            width: 100
        }

        this.position = {
            x: 100,
            y: 100
        }

        this.sides = { //maybe for colliders

        }

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    createPlayer() {
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    update() {


        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


    }
}

/*canvas restrictions

    if:
    bottomn + speed is ledd than the height of the canvas*/

/*what variables does the player have
    -dimensions of the player
    - */
