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
    }

    createPlayer() {
        context.fillRect(100, 100, 100, 100)
    }
}



/*what variables does the player have
    -dimensions of the player
    - */
