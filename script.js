let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        
        if (buttonText === '=') {
            try {
                string = eval(string); // Caution: eval() can be risky, but it's simple for this example
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1); // Remove last character
            input.value = string;
        } else {
            string += buttonText; // Append the clicked button's text to the input string
            input.value = string;
        }
    });
});
