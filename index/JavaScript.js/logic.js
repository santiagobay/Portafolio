
document.addEventListener('DOMContentLoaded', function() {
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');
	const dots = document.querySelectorAll('.dot');
	let currentIndex = 0;

	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('active', i === index);
		});
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === index);
		});
		currentIndex = index;
	}

	prevBtn.addEventListener('click', () => {
		let newIndex = (currentIndex - 1 + slides.length) % slides.length;
		showSlide(newIndex);
	});

	nextBtn.addEventListener('click', () => {
		let newIndex = (currentIndex + 1) % slides.length;
		showSlide(newIndex);
	});

	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => {
			showSlide(i);
		});
	});

	// Inicializar
	showSlide(0);
});
