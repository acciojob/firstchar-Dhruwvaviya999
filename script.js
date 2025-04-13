function firstChar(text) {
  // your code here
	for (let char of text) {
        if (char !== ' ') {
            return char;
        }
    }
    return '';
}

let text = ""
// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
