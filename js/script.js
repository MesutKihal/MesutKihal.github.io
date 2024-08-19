let summary = document.querySelector("#summary");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
const fixedElements = [
	summary,
	projects,
	contact
]

const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const section5 = document.querySelector("#section5");
const section6 = document.querySelector("#section6");
const halfBlue = document.querySelector("div.isHalf.bg-blue");
const halfGreen = document.querySelector("div.isHalf.bg-green");

function getElementsUnderneath(fixedElement) {
  const fixedRect = fixedElement.getBoundingClientRect();
  const elements = document.querySelectorAll('body *'); // or any specific selector if needed

  const underneathElements = [];
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < fixedRect.bottom &&
        rect.bottom > fixedRect.top &&
        rect.left < fixedRect.right &&
        rect.right > fixedRect.left) {
      underneathElements.push(el);
    }
  });
  return underneathElements;
}

document.onscroll = (event) => {
	fixedElements.forEach(fixedElement => {
		const elementsUnderneath = getElementsUnderneath(fixedElement);
		const array = Array.from(elementsUnderneath);

		if (array[array.length - 1] === section1 || array[array.length - 1] === section6 || array[array.length - 1] === section4)
		{
			fixedElement.style.color = "black";
		} else if (array[array.length - 1] === section2 || array[array.length - 1] === section3 || array[array.length - 1] === section5) {
			fixedElement.style.color = "white";
			
		} else {
			fixedElement.style.color = "white";
		}

	})
}


// setInterval(getElementsUnderneath(fixedElement), 5000)

