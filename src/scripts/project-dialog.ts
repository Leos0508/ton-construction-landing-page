/**
 * Project cards open a native dialog. The browser handles focus trapping and
 * the Escape key, so this only wires the triggers and the close controls.
 */
const triggers = document.querySelectorAll<HTMLElement>("[data-project]");

triggers.forEach((trigger) => {
	trigger.addEventListener("click", () => {
		const id = trigger.dataset.project;
		if (!id) return;

		const dialog = document.getElementById(`project-${id}`);
		if (dialog instanceof HTMLDialogElement) dialog.showModal();
	});
});

document.querySelectorAll<HTMLDialogElement>("dialog").forEach((dialog) => {
	dialog.querySelectorAll("[data-project-close]").forEach((button) => {
		button.addEventListener("click", () => dialog.close());
	});

	// A click that lands on the dialog itself rather than its content is a
	// click on the backdrop.
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
});
