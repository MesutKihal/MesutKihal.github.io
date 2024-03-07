
// Customize the mobile view
const burgerBar = document.querySelector("#burgerBar");
const mainBar = document.querySelector("#mainBar");
const sideMenu = document.querySelector("#sideMenu");
const adminBar = document.querySelector("#adminBar");
const main = document.querySelector("#main");
const headerBar = document.querySelector("#headerBar");
const titleHeader = document.querySelector("#titleHeader");
if (screen.width < 600)
{
	titleHeader.classList.remove("w-8");
	titleHeader.classList.add("w-6");
	burgerBar.style.display = "";
	main.removeChild(mainBar);
	adminBar.removeChild(document.querySelector("#space"));
	let icons = document.getElementsByName("icons");
	let timeBoard = document.querySelector("#timeBoard");
	let subBody = document.querySelector("#subBody");
	// subBody.classList.remove("w-7");
	// subBody.classList.add("w-10");
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
const phase = {"prm": "الابتدائي", "mid": "المتوسط", "sec": "الثانوي"}
const levels = ["الأولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"]
const mat = [{"title": "الرياضيات", "id": "mth", "logo": "./img/math.png"},
			 {"title": "اللغة العربية", "id": "arb","logo": "./img/arabic.png"},
			 {"title": "التربية الإسلامية", "id": "ism", "logo": "./img/islam.png"},
			 {"title": "التربية الفنية", "id": "art", "logo": "./img/art.png"},
			 {"title": "الموسيقى", "id": "msc", "logo": "./img/music.png"},
			 {"title": "اللغة الفرنسية", "id": "frn", "logo": "./img/francais.png"},
			 {"title": "اللغة الانجليزية", "id": "eng", "logo": "./img/english.png"},
			 {"title": "التربية العلمية", "id": "sci", "logo": "./img/physics.png"},
			 {"title": "التربية المدنية", "id": "civ", "logo": "./img/civil.png"},
			 {"title": "التاريخ و الجغرافيا", "id": "hig", "logo": "./img/hisgeo.png"},
			 {"title": "الاجتماعيات", "id": "soc", "logo": "./img/hisgeo.png"},
			 {"title": "علوم الطبيعة والحياة", "id": "bio", "logo": "./img/bio.png"},
			 {"title": "العلوم الفيزيائية", "id": "phy", "logo": "./img/physics.png"},
			 {"title": "الاعلام الألي", "id": "cms", "logo": "./img/cs.png"},
		     {"title": "التكنولوجيا", "id": "tec", "logo": "./img/techno.png"},
			 {"title": "القانون", "id": "law", "logo": "./img/law.png"},
			 {"title": "التسيير المحاسبي", "id": "sta", "logo": "./img/stats.png"},
			 {"title": "الاقتصاد", "id": "eco", "logo": "./img/eco.png"},
			 {"title": "اللغة الايطالية", "id": "ita", "logo": "./img/ita.png"},
			 {"title": "اللغة الألمانية", "id": "ger", "logo": "./img/ger.png"},
			 {"title": "اللغة الاسبانية", "id": "esp", "logo": "./img/esp.png"},
			 {"title": "الهندسة الميكانيكية", "id": "mce", "logo": "./img/mce.png"},
			 {"title": "الهندسة الكهربائية", "id": "ele", "logo": "./img/ele.png"},
			 {"title": "الهندسة المدنية", "id": "cve", "logo": "./img/cve.png"},
			 {"title": "الفلسفة", "id": "phi", "logo": "./img/phi.png"},
			 {"title": "الرياضيات و التربية العلمية والتكنولوجية", "id": "mts", "logo": "./img/math.png"},
			 {"title": "العربية و التربية الاسلامية و المدنية", "id": "aic", "logo": "./img/arabic.png"},]

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
	path.dataset.id = "sec";
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
				path.onclick = (event) => {
					path.innerText = phase[temp.id.slice(0, 3)] + " > " + levels[Number(temp.id.slice(3))];
					matDraw(mat.slice(0,4).concat(mat.slice(5, 7)).concat(mat.slice(10, 15)), temp.id);
				}
				path.innerText = "الثانوي >" + levels[Number(temp.id.slice(3))];
				path.dataset.id += temp.id.slice(3);
			}
		} else {
			temp.onclick = (event) => {
				matDraw(mat.slice(0,4).concat(mat.slice(5, 7)).concat(mat.slice(10, 14).concat(mat.slice(15))), temp.id)
				path.onclick = (event) => {
					path.innerText = phase[temp.id.slice(0, 3)] + " > " + levels[Number(temp.id.slice(3))];
					matDraw(mat.slice(0,4).concat(mat.slice(5, 7)).concat(mat.slice(10, 14).concat(mat.slice(15))), temp.id);
				}
				path.innerText =  "الثانوي >" + levels[Number(temp.id.slice(3))];
				path.dataset.id += temp.id.slice(3);
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
	path.dataset.id += "mid";
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
			path.onclick = (event) => {
				path.innerText = phase[temp.id.slice(0, 3)] + " > " + levels[Number(temp.id.slice(3))];
				matDraw(mat.slice(0, 6).concat(mat.slice(10, 14)), temp.id);
			}
			path.innerText = "المتوسط >" + levels[Number(temp.id.slice(3))];
			path.dataset.id += temp.id.slice(3);
		}
		temp.innerText = levels[i];
		navbar.appendChild(temp);
	}
}

function getPrmContent()
{
	// Clear the content on the navbar
	navbar.innerHTML = "";
	// Fill the elements with new data
	path.innerText = "< الابتدائي";
	path.dataset.id = "prm";
	lib.innerText = "5eme";
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
				matDraw(mat.slice(25, 27), temp.id);
				path.onclick = (event) => {
					path.innerText = phase[temp.id.slice(0, 3)] + " > " + levels[Number(temp.id.slice(3))];
					matDraw(mat.slice(25, 27), temp.id);
				}
				path.innerText = "الابتدائي >" + levels[Number(temp.id.slice(3))];
				path.dataset.id += temp.id.slice(3);
			}
		} else {
			temp.onclick = (event) => {
				matDraw(mat.slice(0, 10), temp.id);
				path.onclick = (event) => {
					path.innerText = phase[temp.id.slice(0, 3)] + " > " + levels[Number(temp.id.slice(3))];
					matDraw(mat.slice(0, 10), temp.id);
				}
				path.innerText = "الابتدائي >" + levels[Number(temp.id.slice(3))];
				path.dataset.id += temp.id.slice(3);
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
	content.setAttribute('class', 'wrap');
	welcomeSlide.style.display = "none";
	// mainBar.style = "background-color: white;";
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
			path.dataset.id = card.id;
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
	let level = id.slice(0, 3);
	let year = Number(id.slice(3,4));
	let field = id.slice(4);
	fetch(`content/${level}/${year}/${field}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-store',
	}).then(response => response.json()).then(data => {
		// Clear body content
		const content = document.querySelector("#content");
		document.querySelector("#bottom-g").style.display = "none";
		welcomeSlide.style.display = "none";
		content.innerHTML = "";
		// Update path bar
		for (var i = 0; i < mat.length; i++)
		{
			if (mat[i]['id'] == field)
			{
				path.innerText += "> "+ mat[i]['title'];
				break;
			}
		}
		// Fill the page with new content
		let booksLabel = document.createElement("label");
		let exerLabel = document.createElement("label");
		let examLabel = document.createElement("label");
		let serieLabel = document.createElement("label");
		let lessonLabel = document.createElement("label");
		let booksDiv = document.createElement("div");
		let exerDiv = document.createElement("div");
		let examDiv = document.createElement("div");
		let serieDiv = document.createElement("div");
		let lessonDiv = document.createElement("div");
		
		// Set attributes for HTML elements
		document.querySelector("#content").setAttribute("class", "rows");
		booksLabel.setAttribute("class", "right size-md mt-3 mb-3");
		exerLabel.setAttribute("class", "right size-md mt-3 mb-3");
		examLabel.setAttribute("class", "right size-md mt-3 mb-3");
		serieLabel.setAttribute("class", "right size-md mt-3 mb-3");
		lessonLabel.setAttribute("class", "right size-md mt-3 mb-3");
		booksDiv.setAttribute("class", "wrap righted");
		examDiv.setAttribute("class", "wrap righted");
		lessonDiv.setAttribute("class", "wrap righted");
		serieDiv.setAttribute("class", "wrap righted");
		
		booksLabel.innerText = "الكتب";
		exerLabel.innerText = "حلول التمارين";
		examLabel.innerText = "الفروض و الاختبارات";
		serieLabel.innerText = "سلاسل تمارين وأنشطة";
		lessonLabel.innerText = "دروس و ملخصات";
		// Draw books content
		for (var i = 0; i < data[0].length; i++)
		{
			let item = document.createElement("div");
			let title = document.createElement("a");
			
			item.setAttribute("class", "label centered");
			title.setAttribute("class", "row size-sm centered");
			let temp = data[0][i];
			title.onclick = (event) => {
				getPDF(temp.file);
				// window.location.href = temp.file;
			}
			title.innerText = data[0][i].title;
			item.appendChild(title);
			booksDiv.appendChild(item);
		}
		// Draw Exercice content
		for (var i = 0; i < data[1].length; i++)
		{
			let item = document.createElement("div");
			let title = document.createElement("a");
			let temp = data[1][i];
			item.setAttribute("class", "label centered");
			title.setAttribute("class", "row size-sm centered");
			title.innerText = data[1][i].book;
			title.onclick = (event) => {
				console.log("exercice");
			}
			item.appendChild(title);
			exerDiv.appendChild(item);
		}
		// Draw Exams content
		for (var i = 0; i < data[2].length; i++)
		{
			let item = document.createElement("div");
			let title = document.createElement("a");
			let temp = data[2][i];
			item.setAttribute("class", "label centered");
			title.setAttribute("class", "row size-sm centered");
			title.innerText = data[2][i].title;
			title.onclick = (event) => {
				getDetails(temp)
			}
			item.appendChild(title);
			examDiv.appendChild(item);
		}
		// Draw Serie content
		for (var i = 0; i < data[3].length; i++)
		{
			let item = document.createElement("div");
			let title = document.createElement("a");
			let temp = data[3][i];
			item.setAttribute("class", "label centered");
			title.setAttribute("class", "row size-sm centered");
			title.innerText = data[3][i].title;
			title.onclick = (event) => {
				console.log("Serie");
			}
			item.appendChild(title);
			serieDiv.appendChild(item);
		}
		// Draw Lesson content
		for (var i = 0; i < data[4].length; i++)
		{
			let item = document.createElement("div");
			let title = document.createElement("a");
			let temp = data[4][i];
			item.setAttribute("class", "label centered");
			title.setAttribute("class", "row size-sm centered");
			title.innerText = data[4][i].title;
			title.onclick = (event) => {
				console.log("Lesson");
			}
			item.appendChild(title);
			serieDiv.appendChild(item);
		}
		// Add HTML elements to main div ' #content '
		if (data[0].length > 0)
		{
			content.append(booksLabel);
		}
		content.append(booksDiv);
		if (data[1].length > 0)
		{
			content.append(exerLabel);
		}
		content.append(exerDiv);
		if (data[2].length > 0)
		{
			content.append(examLabel);
		}
		content.append(examDiv);
		if (data[3].length > 0)
		{
			content.append(serieLabel);
		}
		content.append(serieDiv);
		if (data[4].length > 0)
		{
			content.append(lessonLabel);
		}
		content.append(lessonDiv);
	}).catch(error => console.log(error))
}

function getPDF(path)
{
	let content = document.querySelector("#content");
	content.innerText = "";
	
	let iframe = document.createElement("iframe");
	iframe.src = path;
	iframe.style = "width: 100%; height: 100vh";
	iframe.type = 'application/pdf';
	content.appendChild(iframe);
}

function getDetails(data) 
{
	let content = document.querySelector("#content");
	content.innerText = "";
	content.setAttribute("class", "rows centered");
	let title = document.createElement("p");
	let p = document.createElement("p");
	title.innerHTML = `<span style="font-weight: bold;">العنوان:</span> ${data.title}`;
	p.innerText = "الحل";
	
	content.appendChild(title);
	for (var i = 0; i < data.content.length; i++)
	{
		let img = document.createElement("img");
		img.setAttribute("class", "w-6");
		img.src = data.content[i];
		content.append(img);
		img.onclick = (event) => {
			window.location.href = img.src;
		}
	}
	content.appendChild(p);
	for (var i = 0; i < data.solution.length; i++)
	{
		let img = document.createElement("img");
		img.setAttribute("class", "w-6");
		img.src = data.solution[i];
		content.append(img);
		img.onclick = (event) => {
			window.location.href = img.src;
		}
	}

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
	if (n > 5)
	{
		n = 1;
	} else if (n < 1)
	{
		n = 5
	}
	let slideImg = document.getElementById(`slideImg${n}`);
	let slideDot = document.getElementById(`dot${n}`);
	for (var i = 1; i <= 5; i++)
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

function prevSlide()
{
	let slides = document.getElementsByName("slideItem");
	let current = null;
	slides.forEach(slide => {
		if (slide.style.display === "")
		{
			current = slide;
		}
	})
	currentSlide(Number(current.id.slice(-1)) - 1);
}

setInterval(updateTime, 1000);
setInterval(nextSlide, 7000);
currentSlide(1);