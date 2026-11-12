/**
 * Navbar retract behaviour.
 *
 * The bar is fixed at the top and always visible at scrollY 0. Scrolling down
 * pulls it up out of view. Moving the pointer into the top strip brings it
 * back, and moving back out of that strip retracts it again.
 *
 * Only runs for a fine pointer. On touch there is no hover to bring the bar
 * back, so hiding it would strand the menu.
 */
const bar = document.querySelector<HTMLElement>('[data-navbar]');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

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

			if (!finePointer.matches) {
				setHidden(false);
				lastY = y;
				return;
			}

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
			if (!finePointer.matches) return;

			if (event.clientY >= 0 && event.clientY <= TOP_ZONE) {
				setHidden(false);
			} else if (window.scrollY > AT_TOP) {
				setHidden(true);
			}
		},
		{ passive: true },
	);

	finePointer.addEventListener('change', (event) => {
		if (!event.matches) setHidden(false);
	});
}

/**
 * Mobile menu. The sheet renders as a fixed overlay below the bar so the
 * navbar stays visible while the sheet is open.
 */
const sheet = document.querySelector<HTMLElement>("[data-nav-sheet]");
const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");

if (sheet && toggle) {
	const setOpen = (open: boolean) => {
		sheet.toggleAttribute("data-open", open);
		toggle.toggleAttribute("data-open", open);
		toggle.setAttribute("aria-expanded", String(open));
		toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
		document.body.style.overflow = open ? "hidden" : "";
	};

	toggle.addEventListener("click", () => {
		setOpen(!sheet.hasAttribute("data-open"));
	});

	sheet.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => setOpen(false));
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") setOpen(false);
	});

	window
		.matchMedia("(min-width: 768px)")
		.addEventListener("change", (event) => {
			if (event.matches) setOpen(false);
		});
}
