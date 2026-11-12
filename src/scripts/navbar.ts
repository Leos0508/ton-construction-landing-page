/**
 * Navbar retract behaviour.
 *
 * The bar is fixed at the top and always visible at scrollY 0. Scrolling down
 * pulls it up out of view. Moving the pointer into the top strip brings it
 * back, which is the only way to reach it once you are scrolled down.
 */
const bar = document.querySelector<HTMLElement>('[data-navbar]');

if (bar) {
	const TOP_ZONE = 88;
	const AT_TOP = 8;
	const SCROLL_DELTA = 4;

	let lastY = window.scrollY;
	let hidden = false;

	const setHidden = (value: boolean) => {
		if (value === hidden) return;
		hidden = value;
		bar.toggleAttribute('data-hidden', value);
	};

	window.addEventListener(
		'scroll',
		() => {
			const y = window.scrollY;

			if (y <= AT_TOP) {
				setHidden(false);
			} else if (y > lastY + SCROLL_DELTA) {
				setHidden(true);
			}

			lastY = y;
		},
		{ passive: true },
	);

	window.addEventListener(
		'pointermove',
		(event) => {
			if (event.clientY <= TOP_ZONE) setHidden(false);
		},
		{ passive: true },
	);
}
