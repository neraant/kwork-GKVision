document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menu-toggle')
	const navLinks = document.querySelectorAll(
		'.nav-menu-list-item-link, .buttons-container .btn'
	)

	navLinks.forEach(link => {
		link.addEventListener('click', function () {
			if (menuToggle.checked) {
				menuToggle.checked = false
			}
		})
	})
})
