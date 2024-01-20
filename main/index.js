
// Customize the mobile view
const burgerBar = document.querySelector("#burgerBar");
const mainBar = document.querySelector("#mainBar");
const sideMenu = document.querySelector("#sideMenu");
const adminBar = document.querySelector("#adminBar");
const main = document.querySelector("#main");
const headerBar = document.querySelector("#headerBar");
if (screen.width < 600)
{
	burgerBar.style.display = "";
	main.removeChild(mainBar);
	adminBar.removeChild(document.querySelector("#space"));
	let icons = document.getElementsByName("icons");
	let timeBoard = document.querySelector("#timeBoard");
	let subBody = document.querySelector("#subBody");
	subBody.classList.remove("col-7");
	subBody.classList.add("col-10");
	icons.forEach(icon => {
		icon.classList.remove("width-ss");
		icon.classList.add("w-1");
	})
	timeBoard.classList.remove("width-sd");
	timeBoard.classList.add("w-5");
	// Create side menu elements
	let navLib = document.createElement("p");
	let navBar = document.createElement("div");
	let navSec = document.createElement("nav");
	let navMid = document.createElement("nav");
	let navPrm = document.createElement("nav");
	let searchInput = document.createElement("input");
	// Set the classes
	navBar.setAttribute("class", "rows");
	navLib.setAttribute("class", "nav-3 size-sd fade mg-1 mt-3");
	navSec.setAttribute("class", "nav-3 size-sd fade mg-1");
	navMid.setAttribute("class", "nav-3 size-sd fade mg-1");
	navPrm.setAttribute("class", "nav-3 size-sd fade mg-1");
	searchInput.setAttribute("class", "input neosansarabic w-6 rounded size-sm mg-1");
	// Set the id's
	navBar.setAttribute("id", "navbar");
	navLib.setAttribute("id", "library");
	navSec.setAttribute("id", "sec");
	navMid.setAttribute("id", "mid");
	navPrm.setAttribute("id", "prm");
	searchInput.setAttribute("id", "searchinput");
	// Add content to the elements created
	navLib.innerText += "المكتبة";
	navSec.innerText += "الثانوي";
	navMid.innerText += "المتوسط";
	navPrm.innerText += "الابتدائي";
	searchInput.placeholder = "ابحث";
	// Add content to side menu
	sideMenu.appendChild(navLib);
	navBar.appendChild(navSec);
	navBar.appendChild(navMid);
	navBar.appendChild(navPrm);
	sideMenu.appendChild(navBar);
	sideMenu.appendChild(searchInput);
}

const navbar = document.querySelector("#navbar");
const bodyContent = document.querySelector("#bodyContent");
const welcomeSlide = document.querySelector("#welcomeSlide");
const searchBar = document.querySelector("#searchBar");
const libBar = document.querySelector("#libBar");
const sec = document.querySelector("#sec");
const mid = document.querySelector("#mid");
const prm = document.querySelector("#prm");
const path = document.querySelector("#path");
const lib = document.querySelector("#library");
const levels = ["الأولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"]
const mat = [{"title": "الرياضيات", "id": "mth", "logo": "img/prm-math.png"},
			 {"title": "اللغة العربية", "id": "arb","logo": "img/prm-arabic.png"},
			 {"title": "التربية الإسلامية", "id": "ism", "logo": "img/prm-islam.png"},
			 {"title": "التربية الفنية", "id": "art", "logo": "img/prm-art.png"},
			 {"title": "الموسيقى", "id": "msc", "logo": "img/prm-music.png"},
			 {"title": "اللغة الفرنسية", "id": "frn", "logo": "img/prm-francais.png"},
			 {"title": "اللغة الانجليزية", "id": "eng", "logo": "img/prm-english.png"},
			 {"title": "التربية العلمية", "id": "sci", "logo": "img/prm-physics.png"},
			 {"title": "التربية المدنية", "id": "civ", "logo": "img/prm-civil.png"},
			 {"title": "التاريخ و الجغرافيا", "id": "hig", "logo": "img/prm-hisgeo.png"},
			 {"title": "الاجتماعيات", "id": "soc", "logo": "img/prm-hisgeo.png"},
			 {"title": "علوم الطبيعة والحياة", "id": "bio", "logo": "img/bio.png"},
			 {"title": "العلوم الفيزيائية", "id": "phy", "logo": "img/prm-physics.png"},
			 {"title": "الاعلام الألي", "id": "cms", "logo": "img/cs.png"},
		     {"title": "التكنولوجيا", "id": "tec", "logo": "img/techno.png"},
			 {"title": "القانون", "id": "law", "logo": "img/law.png"},
			 {"title": "التسيير المحاسبي", "id": "sta", "logo": "img/stats.png"},
			 {"title": "الاقتصاد", "id": "eco", "logo": "img/eco.png"},
			 {"title": "اللغة الايطالية", "id": "ita", "logo": "img/ita.png"},
			 {"title": "اللغة الألمانية", "id": "ger", "logo": "img/ger.png"},
			 {"title": "اللغة الاسبانية", "id": "esp", "logo": "img/esp.png"},
			 {"title": "الهندسة الميكانيكية", "id": "mce", "logo": "img/mce.png"},
			 {"title": "الهندسة الكهربائية", "id": "ele", "logo": "img/ele.png"},
			 {"title": "الهندسة المدنية", "id": "cve", "logo": "img/cve.png"}]



sec.onclick = (event) => {
	getSecContent();
}

mid.onclick = (event) => {
	getMidContent();
}

prm.onclick = (event) => {
	getPrmContent();
}

burgerBar.onclick = (event) => {
	let main = document.querySelector("#main");
	let titleHeader = document.querySelector("#titleHeader");
	if (sideMenu.style.display == "none")
	{
		sideMenu.style.display = "";
		sideMenu.style.width = "50%";
		burgerBar.innerHTML = "";
		burgerBar.innerHTML = '<i class="fa-solid fa-x fa-3x rotate"></i>';
		sideMenu.appendChild(burgerBar);
	} else {
		sideMenu.style.display = "none";
		sideMenu.style.width = "0%";
		burgerBar.innerHTML = "";
		burgerBar.innerHTML = '<i class="fa fa-bars fa-3x rotate"></i>';
		headerBar.innerHTML = "";
		headerBar.appendChild(burgerBar);
		headerBar.appendChild(titleHeader);
	}
}


function getSecContent()
{
	navbar.innerHTML = "";
	path.innerText = "< الثانوي";
	lib.innerText = "BAC";
	for (var i = 2; i >= 0; i--)
	{
		let temp = document.createElement("nav");
		temp.id = `sec${i}`;
		if (screen.width < 600)
		{
			temp.setAttribute("class", "nav-3 centered size-sd mg-1 fade");
		} else {
			temp.setAttribute("class", "nav centered size-sd mg-1 fade");
		}
		if (i === 0)
		{
			temp.onclick = (event) => {
				matDraw(mat.slice(0,4).concat(mat.slice(5, 7)).concat(mat.slice(10, 15)), temp.id)
				path.innerText = "الثانوي >" + levels[Number(temp.id.slice(3))];
			}
		} else {
			temp.onclick = (event) => {
				matDraw(mat.slice(0,4).concat(mat.slice(5, 7)).concat(mat.slice(10, 14).concat(mat.slice(15))), temp.id)
				path.innerText =  "الثانوي >" + levels[Number(temp.id.slice(3))];
			}
		}
		temp.innerText = levels[i];
		navbar.appendChild(temp);
	}
}

function getMidContent()
{
	navbar.innerHTML = "";
	path.innerText = "< المتوسط";
	lib.innerText = "BEM";
	for (var i = 3; i >= 0; i--)
	{
		let temp = document.createElement("nav");
		temp.id = `mid${i}`;
		if (screen.width < 600)
		{
			temp.setAttribute("class", "nav-3 centered size-sd mg-1 fade");
		} else {
			temp.setAttribute("class", "nav centered size-sd mg-1 fade");
		}
		temp.onclick = (event) => {
			matDraw(mat.slice(0, 6).concat(mat.slice(10, 14)), temp.id);
			path.innerText = "المتوسط >" + levels[Number(temp.id.slice(3))];
		}
		temp.innerText = levels[i];
		navbar.appendChild(temp);
	}
}

function getPrmContent()
{
	navbar.innerHTML = "";
	path.innerText = "< الابتدائي";
	lib.innerText = "5eme";
	// welcomeSlide.style.display = "none";
	for (var i = 4; i >= 0; i--)
	{
		let temp = document.createElement("nav");
		temp.id = `prm${i}`;
		if (screen.width < 600)
		{
			temp.setAttribute("class", "nav-3 centered size-sd mg-1 fade");
		} else {
			temp.setAttribute("class", "nav centered size-sd mg-1 fade");
		}
		if (i < 2)
		{
			temp.onclick = (event) => {
				matDraw(mat.slice(0, 9), temp.id);
				path.innerText = "الابتدائي >" + levels[Number(temp.id.slice(3))];
			}
		} else {
			temp.onclick = (event) => {
				matDraw(mat.slice(0, 10), temp.id);
				path.innerText = "الابتدائي >" + levels[Number(temp.id.slice(3))];
			}
		}
		temp.innerText = levels[i];
		navbar.appendChild(temp);
	}
}

function matDraw(arr, id)
{
	const content = document.querySelector("#content");
	content.innerHTML = "";
	content.classList.add('wrap');
	welcomeSlide.style.display = "none";
	for (var i = 0; i < arr.length; i++)
	{
		let card = document.createElement("div");
		let img = document.createElement("img");
		if (screen.width < 600)
		{
			card.setAttribute("class", "box mg-1 centered rounded rows col-4 fade");
		} else {
			card.setAttribute("class", "box mg-1 centered rounded rows col-3 fade");
		}
		card.setAttribute("id", `${id}${arr[i].id}`);
		card.onclick = (event) => {
			getContent(card.id)
		}
		card.onmouseover = (event) => {
			card.style.backgroundColor = "white";
		}
		card.onmouseout = (event) => {
			card.style.backgroundColor = "";
		}
		img.setAttribute("width", "80%");
		img.setAttribute("height", "30%");
		img.src = arr[i].logo;
		card.appendChild(img);
		card.innerHTML += `<p class="size-sd">${arr[i].title}</p>`;
		content.appendChild(card);
	}
}

function getContent(id)
{
	// TO DO
	let lvl = id.slice(0, 3);
	let y = id.slice(3,4);
	let mat = id.slice(4);
	console.log(lvl, y, mat);
}

function updateTime() {
   let currentTime = new Date();
   currentTime.setTime(currentTime.getTime() + (1*60*60*1000))
   let currentUTCTime = currentTime.toUTCString();
   let timeBoard = document.querySelector("#timeBoard");
   timeBoard.innerText = currentUTCTime;
}

function currentSlide(n)
{
	if (n > 3)
	{
		n = 1;
	}
	let slideImg = document.getElementById(`slideImg${n}`);
	let slideDot = document.getElementById(`dot${n}`);
	for (var i = 1; i <= 3; i++)
	{
		let tempSlide = document.getElementById(`slideImg${i}`);
		let tempDot = document.getElementById(`dot${i}`);
		tempSlide.style.display = "none";
		tempDot.style.opacity = "0.5";
	}
	slideImg.style = "";
	slideDot.style.opacity = "1";
}

function nextSlide()
{
	let slides = document.getElementsByName("slideItem");
	let current = null;
	slides.forEach(slide => {
		if (slide.style.display === "")
		{
			current = slide;
		}
	})
	currentSlide(Number(current.id.slice(-1)) + 1);
}

setInterval(updateTime, 1000);
setInterval(nextSlide, 7000);
currentSlide(1);