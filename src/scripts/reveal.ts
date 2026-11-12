import { animate, inView } from 'motion';

/**
 * Fades and lifts anything marked with `data-reveal` into place once it
 * enters the viewport. Optional `data-reveal-delay` (seconds) staggers it.
 *
 * The hidden state lives behind the `.js` class that the layout adds before
 * first paint, so the page still renders when JavaScript never runs.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
	inView(
		'[data-reveal]',
		(element) => {
			const delay = Number(
				(element as HTMLElement).dataset.revealDelay ?? 0,
			);

			animate(
				element,
				{ opacity: [0, 1], y: [16, 0] },
				{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
			);
		},
		{ margin: '0px 0px -12% 0px' },
	);
}
