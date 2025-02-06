function firstChar(text) {
  // your code here
	for (let char of str) {
        if (char !== ' ') {
            return char;
        }
    }
    return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
