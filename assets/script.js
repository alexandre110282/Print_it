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

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let banner = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")
let bannerP = document.querySelector("#banner p")
let img = 0
let tag = 0
let nb = slides.length - 1
console.log(bannerP)



function changerTagLine() {
	let cheminTag = `${slides[tag].tagLine}`
	for (let i = 0; i < nb; i++) {
		i === tag
		bannerP.innerHTML = `${slides[tag].tagLine}`
	}
}
arrowRight.addEventListener("click", function () {
	tag++
	if (tag > nb) {
		tag = 0
	}
	changerTagLine()
})

arrowLeft.addEventListener("click", function () {
	tag--
	if (tag < 0) {
		let nbElement = Object.keys(slides).length
		tag = nbElement - 1
	}
	changerTagLine()
})

function changerImage() {
	let cheminImg = `assets/images/slideshow/${slides[img].image}`
	for (let i = 0; i < nb; i++) {
		i === img
		bannerImg.src = cheminImg
	}
}

arrowRight.addEventListener("click", function () {
	img++
	if (img > nb) {
		img = 0
	}
	changerImage()
})

arrowLeft.addEventListener("click", function () {
	img--
	if (img < 0) {
		let nbElement = Object.keys(slides).length
		img = nbElement - 1
	}
	changerImage()
})

// Cibler la div "dots" et ajouter les bullets
let dots = document.querySelector(".dots")
let bulletpoints = `
	<span class = "dot"></span>
`
for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += bulletpoints
}
//fin de l'ajout des bullets

//cibler nouvel élément "dot" et définir sa variable
let dotList = document.querySelectorAll(".dot")
let nombreDot = 0


// Création fonction pour ajouter ou retirer le fond des bullets en fonction de la taille 
//du tableau, du nombre de bullet et sa position dans dotList
function selected() {
	for (let i = 0; i < slides.length; i++) {
		if (i === nombreDot) {
			dotList[i].classList.add("dot_selected");
		} else {
			dotList[i].classList.remove("dot_selected");
		}
	}
}
selected()

arrowRight.addEventListener("click", function () {
	nombreDot++
	console.log("Coucou!")
	if (nombreDot > slides.length - 1) {
		nombreDot = 0
	}
	selected()
})

arrowLeft.addEventListener("click", function () {
	nombreDot--
	console.log("Bien joué")
	if (nombreDot < 0) {
		let nbElement = Object.keys(slides).length
		nombreDot = nbElement - 1
	}
	selected()
})