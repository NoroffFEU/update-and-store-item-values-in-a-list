import createList from "./createList.js";

export default function clearButton() {
	const clearBtn = document.querySelector("#clear");

	clearBtn.addEventListener("click", clearList);

	function clearList() {
		if (confirm("Are you sure?")) {
			// clear the localstorage
			localStorage.clear();
			// clear the ul
			createList();
		}
	}
}
