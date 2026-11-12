/**
 * Horizontal project carousel. Native scrolling does the work, so trackpads,
 * touch, and the keyboard all behave normally. The arrows just nudge the track
 * by one card and disable themselves at the ends.
 */
const track = document.querySelector<HTMLElement>("[data-carousel]");
const prev = document.querySelector<HTMLButtonElement>("[data-carousel-prev]");
const next = document.querySelector<HTMLButtonElement>("[data-carousel-next]");

if (track && prev && next) {
	const step = () => {
		const item = track.querySelector<HTMLElement>("[data-carousel-item]");
		if (!item) return track.clientWidth;

		const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
		return item.getBoundingClientRect().width + gap;
	};

	const update = () => {
		const max = track.scrollWidth - track.clientWidth;
		prev.disabled = track.scrollLeft <= 2;
		next.disabled = track.scrollLeft >= max - 2;
	};

	prev.addEventListener("click", () => {
		track.scrollBy({ left: -step(), behavior: "smooth" });
	});

	next.addEventListener("click", () => {
		track.scrollBy({ left: step(), behavior: "smooth" });
	});

	track.addEventListener("scroll", update, { passive: true });
	window.addEventListener("resize", update, { passive: true });

	update();
}
