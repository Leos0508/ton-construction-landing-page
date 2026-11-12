/**
 * Fades out the spinner sitting under each image once that image has painted.
 * Images already in cache resolve immediately, so nothing flashes on reload.
 */
const wrappers = document.querySelectorAll<HTMLElement>("[data-image]");

wrappers.forEach((wrapper) => {
	const image = wrapper.querySelector("img");
	const spinner = wrapper.querySelector<HTMLElement>("[data-image-spinner]");
	if (!image || !spinner) return;

	const settle = () => spinner.setAttribute("data-loaded", "");

	if (image.complete && image.naturalWidth > 0) {
		settle();
		return;
	}

	image.addEventListener("load", settle, { once: true });
	image.addEventListener("error", settle, { once: true });
});
