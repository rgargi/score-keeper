var scoreP1 = 0;
var scoreP2 = 0;
var total = 5;
var gameover = false;

p1Display = document.querySelector("span#p1");
p2Display = document.querySelector("span#p2");

document.querySelector("button#p1").addEventListener("click", addPointsP1);
document.querySelector("button#p2").addEventListener("click", addPointsP2);
document.querySelector("button.btn-danger").addEventListener("click", reset);
document.getElementById("total").addEventListener("change",function(){
	document.getElementById("dtotal").textContent = this.value;
	total = this.value;
	reset();
});

function addPointsP1() {
	if (!gameover) {
		scoreP1++;
		p1Display.textContent = scoreP1;
		if (scoreP1 == total) {
			gameover = true;
			p1Display.classList.add("text-warning");
		}
	}
};

function addPointsP2() {
	if (!gameover) {
		scoreP2++;
		p2Display.textContent = scoreP2;
		if (scoreP2 == total) {
			gameover = true;
			p2Display.classList.add("text-warning");
		}
	}
};

function reset() {
	scoreP1 = 0;
	scoreP2 = 0;
	p1Display.textContent = scoreP1;
	p2Display.textContent = scoreP2;
	gameover = false;
	p1Display.classList.remove("text-warning");
	p2Display.classList.remove("text-warning");
};
