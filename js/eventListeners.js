
const keys = {
    w: false,
    s: false,
    a: false,
    d: false
}

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'w':
            keys.w = true
            break
        case 's':
            keys.s = true;
            break
        case 'a':
            keys.a = true
            break
        case 'd':
            keys.d = true
            break



    }
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case 'w':
            keys.w = false
            break
        case 's':
            console.log('s');
            keys.s = false;
            break
        case 'a':
            keys.a = false
            break
        case 'd':
            keys.d = false
            break



    }
})
