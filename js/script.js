
if (screen.width <= 600) {
	const links = document.getElementsByClassName('link');
	const icons = ["<i class='fa fa-home fa-2xl' aria-hidden='true'></i>",
				   "<i class='fa fa-clipboard fa-2xl' aria-hidden='true'></i>",
				   "<i class='fa fa-paper-plane fa-2xl' aria-hidden='true'></i>",
				   "<i class='fa fa-download fa-2xl' aria-hidden='true'></i>"]
	for (i=0;i < links.length; i++)
	{
		links[i].innerHTML = icons[i];
	}
	document.getElementById('navLinks').style.justifyContent = 'center';
}