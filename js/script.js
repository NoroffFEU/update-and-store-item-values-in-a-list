import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";
import clearButton from "./components/clearButton.js";

createList();
clearButton();

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
	const listItems = getFromStorage(listKey);
	const itemValue = listInput.value.trim();

	if (itemValue.length >= 1) {
		const newItem = { id: Date.now(), item: itemValue };
		listInput.value = "";
		listInput.focus();
		listItems.push(newItem);

		saveToStorage(listKey, listItems);
		createList();
	}

	console.log(listItems);
}
