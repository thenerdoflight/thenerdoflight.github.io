var poke = document.getElementById('poke');
poke.style.visibility = "visible";

if (browser.mobile) {
	poke.style.visibility = "hidden";
	poke.innerHTML = '<p>"OPEN IN DESKTOP" </p>';
};
if (!browser.mobile) {
	poke.innerHTML = '<object data="str_poke/pokemon.html" width="789" height="762"> </object>';
	poke.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
	

};

//https://hiddedevries.nl/en/blog/2018-12-10-scroll-an-element-into-the-center-of-the-viewport