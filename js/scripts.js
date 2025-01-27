/**
 * @file
 * Global theme scripts
 *
 * This implement various features, such as the mobile menu, etc.
 *
 */

(function (Drupal, once) {
	/**
	 * Menu
	 */

	const header = document.querySelector(".header");

	if (header) {
		const menuTriggers = header.querySelectorAll(".menu-toggle__button");

		for (const trigger of menuTriggers) {
			trigger.addEventListener("click", triggerMobile);
		}

		function triggerMobile(e) {
			if (!header.classList.contains("js-active")) {
				header.classList.add("js-active");
				document.body.style.overflowY = "hidden";
			} else {
				header.classList.remove("js-active");
				document.body.style.overflowY = "initial";
			}
		}

		//Open Menu Lvl 1

		const subMenuTriggers = header.querySelectorAll(
			".menu__item--expanded > .menu__link"
		);

		for (const trigger of subMenuTriggers) {
			trigger.addEventListener("click", triggerSubMenu);
		}

		function triggerSubMenu(e) {
			if (window.matchMedia("(max-width: 999px)").matches) {
				e.preventDefault();

				const menu = e.target.parentElement;

				if (!menu.classList.contains("js-active")) {
					menu.classList.add("js-active");
				} else {
					menu.classList.remove("js-active");
				}
			}
		}

		//trigger open Search

		const searchTrigger = header.querySelectorAll(
			'button[data-action="search-tigger"]'
		);

		for (btn of searchTrigger) {
			btn.addEventListener("click", function (e) {
				const searchBox = header.querySelector(".block-search");
				if (header.classList.contains("js-active")) {
					header.classList.remove("js-active");
				}
				if (!searchBox.classList.contains("js-active")) {
					searchBox.classList.add("js-active");
				} else {
					searchBox.classList.remove("js-active");
          document.body.style.overflowY = "initial";
				}
			});
		}
	}
})(Drupal, once);
