
const body = document.querySelector("body");
const canvas = document.getElementById("canvas");
const switchBtn = document.querySelector("#checkboxInput");
const modeLbl = document.querySelector("#modeLbl");
const panel = document.getElementById("panel");
const p = document.querySelectorAll("p");
const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

canvas.width = innerWidth;
canvas.height = document.body.scrollHeight;

context = canvas.getContext("2d");
switchBtn.onchange = (event) => {
	if (switchBtn.checked) {
		body.classList.add("darkMode");
		panel.classList.add("darkMode");
		p.forEach(el => {
			el.classList.add("textDM");
		})
		headers.forEach(el => {
			el.classList.add("textDM");
		})
		modeLbl.innerText = "Dark Mode";
	} else {
		body.classList.remove("darkMode");
		panel.classList.remove("darkMode");
		p.forEach(el => {
			el.classList.remove("textDM");
		})
		headers.forEach(el => {
			el.classList.remove("textDM");
		})
		modeLbl.innerText = "Light Mode";
	}
}


function Circle(x, y, r, velx, vely, color)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.velx = velx;
	this.vely = vely;
	this.color = color;
	this.glow = 20;
	
	this.draw = function(){
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		if (switchBtn.checked) {
			context.strokeStyle = "white";
			context.shadowColor = "white";
			context.fillStyle = "white";
			
		} else {
			context.strokeStyle = this.color;
			context.shadowColor = this.color;
			context.fillStyle = this.color;
		}
		context.shadowBlur = this.glow;
		context.fill();
	}
	this.update = function(){
		if (this.x + this.r >= canvas.width || this.x - this.r <= 0)
		{
			this.velx = -this.velx;
		}
		if (this.y + this.r >= canvas.height || this.y - this.r <= 0)
		{
			this.vely = -this.vely;
		}
		
		this.x += this.velx;
		this.y += this.vely;
		this.draw();
	}
}

function Traingle(x, y, w, h, vel,color)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.vel = vel;
	this.color = color;
	this.glow = 10;
	
	
	this.draw = function () {
		context.beginPath();
		context.moveTo(this.x, this.y);
		context.lineTo(this.x + (this.w / 2), this.y + this.h);
		context.lineTo(this.x - (this.w / 2), this.y + this.h);
		context.closePath();
		context.lineWidth = 10;
		if (switchBtn.checked) {
			context.strokeStyle = "white";
			context.shadowColor = "white";
			context.fillStyle = "white";
			
		} else {
			context.strokeStyle = this.color;
			context.shadowColor = this.color;
			context.fillStyle = this.color;
		}
		context.fill();
		context.shadowBlur = this.glow;
		context.stroke();
		
	}
	
	this.update = function () {
		if (this.x + (this.w / 2) >= canvas.width || this.x - (this.w / 2) <= 0)
		{
			this.vel = -this.vel
		}
		if (this.y + this.h >= canvas.height || this.y <= 0)
		{
			this.vel = -this.vel
		}
		
		this.x += this.vel;
		this.y += this.vel;
		this.draw();
	}

}


function Square(x, y, w, h, dx, dy, color)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.dx = dx;
	this.dy = dy;
	this.color = color;
	this.glow = 20;
	
	this.draw = function () {
		if (switchBtn.checked) {
			context.fillStyle = "white";
			context.shadowColor = "white";
			
		} else {
			context.fillStyle = this.color;
			context.shadowColor = this.color;
		}
		context.shadowBlur = this.glow;
		context.fillRect(this.x, this.y, this.w, this.h);
	}
	this.update = function () {
		if (this.x + (this.w * 2) >= canvas.width || this.x <= 0)
		{
			this.dx = -this.dx;
		}
		if (this.y + (this.h * 2) >= canvas.height || this.y <= 0)
		{
			this.dy = -this.dy;
		}
		document.onmousemove = (event) => {
			var x = event.clientX //* 100 / window.innerWidth;
			var y = event.clientY //* 100 / window.innerHeight;
			if (this.x + this.w > x && this.x < x)
			{
				this.dx = -this.dx
			}
		}
		
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}




let choices = ["#e6e6fa", "#ffc0cb", "#b0e0e6", "#c6e2ff", "#faebd7", "#fff68f"];
var index = Math.floor(Math.random() * choices.length);

const rectArray = [];

for (var i=0; i < 20; i++)
{
	var x = Math.random() * (canvas.width - 50) + 50;
	var y = Math.random() * (screen.height - 50) + 50;
	var w = Math.floor(Math.random() * 50) + 30;
	var h = Math.floor(Math.random() * 50) + 30;
	var dx = Math.random() < 0.5 ? -1 : 1;
	var dy = Math.random() < 0.5 ? -1 : 1;
	index = Math.floor(Math.random() * choices.length);
	rectArray.push(new Square(x, y, w, h, dx, dy, choices[index]));
}

const tranArray = [];

for (var i=0; i < 20; i++)
{
	var x = Math.random() * (canvas.width - 80) + 80;
	var y = Math.random() * (screen.height - 80) + 80;
	var w = Math.floor(Math.random() * 80) + 30;
	var h = Math.floor(Math.random() * 80) + 30;
	var vel = Math.random() < 0.5 ? -1 : 1;
	index = Math.floor(Math.random() * choices.length);
	tranArray.push(new Traingle(x, y, w, h, vel,choices[index]));
}

const arcArray = [];

for (var i=0; i < 30; i++)
{
	var x = Math.random() * (canvas.width - 80) + 80;
	var y = Math.random() * (canvas.height - 80) + 80;
	var r = 30;

	var velx = Math.random() < 0.5 ? -1 : 1;
	var vely = Math.random() < 0.5 ? -1 : 1;
	index = Math.floor(Math.random() * choices.length);
	arcArray.push(new Circle(x, y, r, velx, vely, choices[index]));
}

function animate()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(animate);
	
	var j = 520;
	var k = j;
	var n = 10;
	var delta = j / n;
	var end = j / delta;
	for (var i = 0; i < end; i++)
	{
		context.beginPath();
		context.moveTo(j, k);
		context.lineTo((i+1)*delta, (i+1)*delta);
		context.lineWidth = 5;
		index = Math.floor(Math.random() * choices.length);
		if (switchBtn.checked) {
			context.strokeStyle = "white";
			context.shadowColor = "white";
		} else {
			context.strokeStyle = choices[index];
			context.shadowColor = choices[index];
		}
		context.shadowBlur = 10;
		context.stroke();
		context.closePath();
		j += delta*2;
		k -= delta;
	}
	
	for (var i=0; i < arcArray.length; i++)
	{
		arcArray[i].update();
	}
}
animate();
