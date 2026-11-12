/**
 * Shows the back-to-top control once the page is scrolled near the end.
 */
const trigger = document.querySelector<HTMLElement>("[data-scroll-top]");

if (trigger) {
	const EDGE = 240;

	const update = () => {
		const { scrollY, innerHeight } = window;
		const atBottom =
			scrollY + innerHeight >= document.documentElement.scrollHeight - EDGE;

		trigger.toggleAttribute("data-visible", atBottom);
	};

	window.addEventListener("scroll", update, { passive: true });
	window.addEventListener("resize", update, { passive: true });
	update();
}
