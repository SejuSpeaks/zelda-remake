import Player from '/js/classes/player.js'

const canvas = document.querySelector('canvas');
export const context = canvas.getContext('2d');

canvas.height = 64 * 9
canvas.width = 64 * 16

const player = new Player();
player.createPlayer()
