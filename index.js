const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')

box1.style.backgroundColor = 'blue'
const MOVE_WIDTH = 54
let currentPos = 0
let speed = 2

let gameLoop = true;
if (gameLoop) move();

function move() {
	document.body.addEventListener('keydown', (ev) => {
		let check = 0
		if (ev.key == 'ArrowRight') {
			var motionInterval = setInterval(function () {
				currentPos += speed
				check ++
				if (check == MOVE_WIDTH / speed) {
					speed = 0
				}
				if (speed == 0) {
					clearInterval(motionInterval)
					speed = 2
				}
				console.log("currentPos= ", currentPos, "speed= ", speed, "MOVE_WIDTH= ", MOVE_WIDTH)
				box2.style.left = currentPos + 'px'
			})
		}
	})
}
