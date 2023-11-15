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
const nbListe = slides.length - 1
const arrow = document.querySelectorAll(".arrow")
let bannerImg = document.querySelector(".banner-img")
let bannerP = document.querySelector("#banner p")
let currentIndex = 0
let dots = document.querySelector(".dots")
let nombreDot = 0
let bulletpoints = `
	<span class = "dot"></span>
`

for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += bulletpoints
}


function selected() {
	let dotList = document.querySelectorAll(".dot")
	for (let i = 0; i < slides.length; i++) {
		if (i === nombreDot) {
			dotList[i].classList.add("dot_selected");
		} else {
			dotList[i].classList.remove("dot_selected");
		}
	}
}
selected()

function changement() {
	let cheminImg = `assets/images/slideshow/${slides[currentIndex].image}`
	for (let i = 0; i < slides.length; i++) {
		i === currentIndex
		bannerP.innerHTML = `${slides[currentIndex].tagLine}`
		bannerImg.src = cheminImg
	}
}

function main() {
	for (let index = 0; index < arrow.length; index++) {
		arrow[index].addEventListener("click", function () {
			if (index === 0) {
				currentIndex--
				nombreDot--
				if (currentIndex < 0 && nombreDot < 0) {
					currentIndex = nbListe
					nombreDot = currentIndex
				}
				selected()
				changement()
			} else {
				currentIndex++
				nombreDot++
				if (currentIndex > nbListe && nombreDot > nbListe) {
					currentIndex = 0
					nombreDot = currentIndex
				}
				selected()
				changement()
			}
		})
	}
}