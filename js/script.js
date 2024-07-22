

const observer = new IntersectionObserver((enteries) => {
	enteries.forEach((entry) => {
		if (entry.isIntersecting)
		{
			if (Number(entry.target.id.slice(-1)) % 2 == 0)
			{
				entry.target.classList.add("left");
			} else {
				entry.target.classList.add("right");
			}
		} else {
			if (Number(entry.target.id.slice(-1)) % 2 == 0)
			{
				entry.target.classList.remove("left");
			} else {
				entry.target.classList.remove("right");
			}
		}
	})
})

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((el) => {
	observer.observe(el)
});




