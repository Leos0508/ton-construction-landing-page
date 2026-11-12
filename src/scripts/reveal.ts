/**
 * Blur-and-slide reveal for anything marked `data-reveal`. Each element plays
 * once, then stops being observed. The hidden state lives in global.css behind
 * the `.js` class, so the content stays put when JavaScript never runs.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (targets.length > 0) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				entry.target.classList.add('is-revealed');
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
	);

	targets.forEach((target) => observer.observe(target));
}
