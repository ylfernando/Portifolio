function menuMobile() {
	var x = document.querySelector('.menu-header-mobile');

	if(x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}