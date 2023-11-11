const slides = [{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let arrow = document.querySelectorAll(".arrow")
console.log(arrow)
console.log(slides.length)
let banner = document.getElementById("banner")

function changerImage() {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/slide2.jpg"
}

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", function (event) {
		if (arrow[i] === arrow[0]) {
			changerImage()
			console.log("Coucou!")
		} else {
			console.log("Bien joué")
		}
	})
}


let dots = document.querySelector(".dots")
console.log(dots)

let bulletpoints = `
	<span class = "dot"></span>
`

for (let index = 0; index < slides.length; index++) {
	dots.innerHTML += bulletpoints
	console.log(dots)
}