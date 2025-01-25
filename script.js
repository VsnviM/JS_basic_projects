/************************* random quote generator *********************************/
const quote =[
"We cannot solve problems with the kind of thinking we employed when we came up with them." ,
"Learn as if you will live forever, live like you will die tomorrow." ,
"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too." ,
"When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out." ,
"When you change your thoughts, remember to also change your world." ,
"It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
"Success is not final; failure is not fatal: It is the courage to continue that counts.",
"It is better to fail in originality than to succeed in imitation.",
"The road to success and the road to failure are almost exactly the same.",
"Success usually comes to those who are too busy to be looking for it.",
"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
"I never dreamed about success. I worked for it.",
"Success is getting what you want; happiness is wanting what you get.",
"Believe in yourself and all that you are.",
"Dream big. Work hard. Stay focused.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Don’t watch the clock; do what it does. Keep going.",
"The harder you work for something, the greater you’ll feel when you achieve it.",
"Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
"Start where you are. Use what you have. Do what you can.",
]
function generateQuote() {
    const random = Math.floor(Math.random()*quote.length)
    document.getElementById("content")
    .textContent=quote[random];
   }

/************************************ CALCULATOR ********************************************/ 
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let oldInput = '';
let operator = null;

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            updateDisplay(currentInput);
        
        } else if (['+', '-', '*', '/','%'].includes(value)) {
            if (currentInput) {
                oldInput = currentInput;
                currentInput = '';
            }
            operator = value;
        
        } else if (value === '=') {
            if (oldInput && currentInput && operator) {
                currentInput = calc(oldInput, currentInput, operator);
                operator = null;
                previousInput = '';
                updateDisplay(currentInput);
            }

        } else if (value === 'AC') {
            currentInput = '';
            oldInput = '';
            operator = null;
            updateDisplay('0');
        }
    });
});


// Update the display
function updateDisplay(value) {
    display.textContent = value || '0';
}


// Perform calc
function calc(a, b, operator) {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);

    switch (operator) {
        case '+':
            return (n1 + n2).toString();
        case '-':
            return (n1 - n2).toString();
        case '*':
            return (n1 * n2).toString();
        case '%':
            return (n1 / n2).toString();
        case '/':
            return n2 !== 0 ? (n1 / n2).toString() : 'Error';
        default:
            return '0';
    }
}


/********************************* TO-DO LIST ****************************************/ 

function addTodo() {
    const todoInput = document.getElementById('todoInput')
    const todoList = document.getElementById('todoList')
    
    if (todoInput.value.trim() !== ''){
        const newTask = document.createElement('li');
    newTask.innerHTML= `${todoInput.value} <input type= 'checkbox'> <button onclick='this.parentNode.remove()'>Delete</button> `; 
    todoList.appendChild(newTask);
    todoInput.value = '';}
    else{
        alert("Enter some task.")
    }
}

/*************************** DIGITAL CLOCK *************************************/ 

