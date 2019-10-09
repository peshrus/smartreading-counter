(() => {
	"use strict";

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function loadListener() {
		console.log("Smart Reading Counter");

		let documentEl = document.documentElement;
		let tabs = documentEl.getElementsByClassName("tabs--item");

		for (let i = tabs.length - 1; i >= 0; i--) {
			let tab = tabs[i];
			tab.click();

			await sleep(1000);

			let books = documentEl.getElementsByClassName("productItem bookmark");

			if (books) {
				if (tab.innerHTML.indexOf("тестов") >= 0) {
					tab.innerHTML += "&nbsp;";
				}

				tab.innerHTML += "(" + books.length + ")";
			}
		}
	}

	window.addEventListener("load", loadListener, false);
})();
