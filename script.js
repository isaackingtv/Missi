const  hambuger = document.getElementbyID ('hambuger')
const  sidebar = document.getElementbyID ('sidebar')
const  overlay = document.getElementbyID ('overlay')

let menuOpen= false 

function openMenu() {
	menuOpen = true
	overlay.style.display = 'block'
	sidebar.style.width ='250px'
}

function closeMenu()  {
	menuOpen = false
	overlay.style.display = 'none'
	sidebar.style.width ='0px'
}

hambuger.addEventListener('click', function () {
	if (!menuOpen) {
		openMenu()
	}
		})

overlay.addEventListener('click', function () {
	if (menuOpen) {
		closeMenu()
	}
}) 

