let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slides.length}
		for (i = 0; < slides.lenght; i++){
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.lenght; i++){
			dots.[i].className = dots[i].className.replace("active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += "active";
}