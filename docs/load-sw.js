/** If the browser supports serviceWorker, load it! */
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("sw.js");
	});
}
