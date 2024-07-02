const dictionary = new Set();

function addWord() {
    const wordInput = document.getElementById('newWord');
    const word = wordInput.value.trim().toLowerCase();
    const messageDiv = document.getElementById('message');
    
    if (word) {
        if (dictionary.has(word)) {
            messageDiv.textContent = `The word "${word}" is already in the dictionary.`;
        } else {
            dictionary.add(word);
            messageDiv.textContent = `The word "${word}" has been added to the dictionary.`;
        }
    } else {
        messageDiv.textContent = "Please enter a valid word.";
    }
    
    wordInput.value = '';
}

function searchWord() {
    const wordInput = document.getElementById('searchWord');
    const word = wordInput.value.trim().toLowerCase();
    const messageDiv = document.getElementById('message');
    
    if (word) {
        if (dictionary.has(word)) {
            messageDiv.textContent = `The word "${word}" is in the dictionary.`;
        } else {
            messageDiv.textContent = `The word "${word}" is not in the dictionary.`;
        }
    } else {
        messageDiv.textContent = "Please enter a valid word.";
    }
    
    wordInput.value = '';
}
