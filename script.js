let dictionary = new Set();

function addWord() {
    const newWord = document.getElementById("new-word").value.trim();
    if (newWord) {
        dictionary.add(newWord.toLowerCase());
        alert(`The word "${newWord}" has been added to the dictionary.`);
        document.getElementById("new-word").value = '';
    } else {
        alert("Please enter a word.");
    }
}

function searchWord() {
    const searchWord = document.getElementById("search-word").value.trim().toLowerCase();
    const resultElement = document.getElementById("search-result");
    if (searchWord) {
        if (dictionary.has(searchWord)) {
            resultElement.textContent = `The word "${searchWord}" is in the dictionary.`;
        } else {
            resultElement.textContent = `The word "${searchWord}" is not in the dictionary.`;
        }
    } else {
        alert("Please enter a word to search.");
    }
}
