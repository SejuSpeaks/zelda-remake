import Player from '/js/classes/player.js'

const canvas = document.querySelector('canvas');
export const context = canvas.getContext('2d');

canvas.height = 64 * 9
canvas.width = 64 * 16

const player = new Player();




function animate() {
    window.requestAnimationFrame(animate)

    player.velocity.x = 0
    player.velocity.y = 0

    if (keys.w) {
        // console.log('w');
        player.velocity.y = -2
    }

    if (keys.s) {
        // console.log('s');
        player.velocity.y = 2
    }

    if (keys.a) {
        // console.log('a');
        player.velocity.x = -2
    }

    if (keys.d) {
        //console.log('d');
        player.velocity.x = 2
    }


    context.clearRect(0, 0, canvas.width, canvas.height);

    player.createPlayer()
    player.update()

}

animate()


/* MAKING PLAYER MOVE
    overall making the player move includes a couple things
        -event listener to see if that key pressed is true
        -event listener to see if keyup is true
        -the canvas has to reset before we create our player again and update
        -in the animate function switch case seeing what key is pressed is true
        - if that key is pressed we add velocity to whatever corresponding axis needs
        -update method of player adds the velocity
        -animate function makes the velocity a number

        one more time
        UPDATE METHOD ADDS THE VELOCITY
        ANIMATE FUNCTION ADDS SPEED TO THE VELOCITY
        -*/



/* this.sides how does it work
    well we want to calculate the every side of the player top bottomn left right
    the bottomn of the player is calculated by adding your height to your current position on the y axis

    ** the y axis increases as you go downward
    ** the x axis increases as you go right

    top = player.position.y
    bottomn = player.position.y + height
    left = player.position.x
    rigth = player.position.x + width

    its not height of the player becasue the height is always gonna stay
    the same as the player moves around the map,
    instead u wanna track that his position on the y axis dosent surrpase the screen limits
    */



/*what am i doing to make a player move
    im checking for an event on keys wsad
    once once of those keys is pressed the player will
    either increase his x axis or his y axis

    if d is pressed theres a + to the x axis
    if a is pressed theres a - to the x axis
    if w is pressed theres a + to the y axis
    if s is pressed theres a - to the y axis

    on the update method on the player class
        we want to add to the current position the velocity that we're going at
        the update method goes in the animation loop so imagine that youre constantly
        adding the velocity to the position

        then we want to make sure the player cant go past the current boundaires of the map
        so make a if statement :






    */
