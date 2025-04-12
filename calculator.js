let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');

let string = '';
let lastChar = '';
let operators = ['+', '-', '*', '/', '%'];

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                if (operators.includes(string[string.length - 1])) {
                    input.value = "Invalid Expression";
                } else {
                    string = eval(string);
                    input.value = string;
                }
            } catch (err) {
                input.value = "Error";
                string = '';
            }
        }

        else if (value == 'AC') {
            string = '';
            input.value = string;
        }

        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            if (operators.includes(value)) {
                if (string === '' || operators.includes(lastChar)) {
                    return; // Don’t allow operator at beginning or after another operator
                }
            }

            if (value === '.' && lastChar === '.') {
                return;
            }

            string += value;
            lastChar = value;
            input.value = string;
        }
    })
});
