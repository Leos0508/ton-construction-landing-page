/**
 * Plays the hero entrance once, the first time the section is in view.
 * The hidden state lives behind the `.js` class set in the layout, so the
 * copy stays readable when JavaScript never runs.
 */
const hero = document.querySelector<HTMLElement>('[data-hero]');

if (hero) {
	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;

			hero.classList.add('hero-in');
			observer.disconnect();
		},
		{ threshold: 0.35 },
	);

	observer.observe(hero);
}
