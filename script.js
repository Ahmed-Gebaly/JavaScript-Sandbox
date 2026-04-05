// ====== SECTION 1: DECLARING VARIABLES ======
console.log("=== VARIABLES ===");
var x = 10;
var title = "Hello World";
console.log(`x = ${x}, title = "${title}"`);

// Reassigning variables
x = 15;
title = "Hello JavaScript";
console.log(`After reassignment: x = ${x}, title = "${title}"`);

var bool1 = true;
var bool2 = false;

// ====== SECTION 2: ARITHMETIC OPERATIONS ======
console.log("\n=== ARITHMETIC OPERATORS ===");
var a = 5;
var b = 10;

// Basic arithmetic
console.log(`${a} + ${b} = ${a + b}`);        // Addition
console.log(`${a} - ${b} = ${a - b}`);        // Subtraction
console.log(`${a} * ${b} = ${a * b}`);        // Multiplication
console.log(`${a} / ${b} = ${a / b}`);        // Division
console.log(`${a} % ${b} = ${a % b}`);        // Modulo (remainder)
console.log(`${a} ** 2 = ${a ** 2}`);         // Exponentiation
Math.min(a, b); // 5 (returns the smaller of a and b)
Math.max(a, b); // 10 (returns the larger of a and b)
Math.sqrt(a); // 2.23606797749979 (square root of a)
Math.pow(a, 3); // 125 (a raised to the power of 3)
Math.round(3.7); // 4 (rounds to nearest integer)
Math.floor(3.7); // 3 (rounds down)
Math.ceil(3.2); // 4 (rounds up)    

// ====== SECTION 3: COMPARISON OPERATORS ======
console.log("\n=== COMPARISON OPERATORS ===");
console.log(`${a} > ${b} ? ${a > b}`);        // Greater than
console.log(`${a} < ${b} ? ${a < b}`);        // Less than
console.log(`${a} === ${a} ? ${a === a}`);    // Equal to
console.log(`${a} !== ${b} ? ${a !== b}`);    // Not equal

// ====== SECTION 4: INCREMENT & DECREMENT ======
console.log("\n=== INCREMENT & DECREMENT ===");
var num = 5;
console.log(`Original: ${num}`);
num++;
console.log(`After num++: ${num}`);            // Post-increment
var num = 5;
++num;
console.log(`After ++num: ${num}`);            // Pre-increment
var num = 5;
num--;
console.log(`After num--: ${num}`);            // Post-decrement
var num = 5;
--num;
console.log(`After --num: ${num}`);            // Pre-decrement

// ====== SECTION 5: ASSIGNMENT OPERATORS ======
console.log("\n=== ASSIGNMENT OPERATORS ===");
var value = 10;
console.log(`Starting value: ${value}`);
value += 5;
console.log(`After += 5: ${value}`);           // Add and assign
var value = 10;
value -= 3;
console.log(`After -= 3: ${value}`);           // Subtract and assign
var value = 10;
value *= 2;
console.log(`After *= 2: ${value}`);           // Multiply and assign
var value = 10;
value /= 2;
console.log(`After /= 2: ${value}`);           // Divide and assign
var value = 10;
value %= 3;
console.log(`After %= 3: ${value}`);           // Modulo and assign

// ====== SECTION 6: LOGICAL OPERATORS ======
console.log("\n=== LOGICAL OPERATORS ===");
var num1 = 5;
var num2 = 10;
console.log(`logic And ${(num1 > num2) && (num1 < num2)}`); // Logical AND
console.log(`logic Or ${(num1 > num2) || (num1 < num2)}`); // Logical OR
console.log(`logic Not ${!(num1 > num2)}`); // Logical NOT 

var num3 = 7;
var isEven = num3 % 2 == 0;
var isOdd = !isEven;
console.log(`${num3} is even? ${isEven}`);
console.log(`${num3} is odd? ${isOdd}`);

// ====== SECTION 7: STRING TEMPLATES ======
console.log("\n=== STRING OPERATIONS ===");
var name = "JavaScript";
var message = "Hello" + " " + name;                 // Concatenation
var templateStr = `Welcome to ${name}!`;       // Template literal
var length = name.length;                          // String length
console.log(message);
console.log(templateStr);
console.log(`Length of "${name}": ${length}`);
name +=10; // Implicit type coercion (string + number = string)
console.log(`After name += 10: ${name}`);

// ====== SECTION 8: STRING FUNCTIONS ======
var str1 = "Hello World";
console.log(str1.substring(0, 5)); // "Hello" not exclusive of index 5
console.log(str1.substring(6));    // "World" from index 6 to end
console.log(str1.charAt(0));      // "H" (character at index 0)
console.log(str1[6]);      // "W" (character at index 6)
console.log(str1.indexOf("o"));     // 4 (first occurrence of "o")
console.log(str1.lastIndexOf("o")); // 7 (last occurrence of "o")
console.log(str1.length) // 11 (length of the string)
console.log(typeof str1) // string (type of the string)
console.log(str1.includes("World")); // true
console.log(str1.startsWith("Hello")); // true
console.log(str1.endsWith("World")); // true
console.log(str1.toUpperCase());  // "HELLO WORLD"
console.log(str1.toLowerCase());  // "hello world"
console.log(str1.replace("l", "1")); // "He1lo World" (replaces first "l" with "1")
console.log(str1.replace(/l/g, "1")); // "He11o Wor1d" (replaces all "l" with "1")
console.log(str1.replace("World", "JavaScript")); // "Hello JavaScript"
console.log(str1.split(" "));       // ["Hello", "World"]
console.log(str1.trim());       // "Hello World" (removes whitespace from both ends)

// ====== SECTION 9: Number Functions ======
var num1 = 3.14159;
console.log(num1.toFixed(2)); // "3.14" (rounds to 2 decimal places)
console.log(num1.toPrecision(3)); // "3.14" (rounds to 3 significant digits)
console.log(num1.toString()); // "3.14159" (converts number to string)
console.log(typeof num1); // number
console.log(typeof num1.toString()); // string
console.log(isNaN(num1)); // false (num1 is a valid number)
console.log(isNaN("abc")); // true (not a number)

// ====== SECTION 11: TYPE COERCION ======
console.log("\n=== TYPE COERCION ===");
var numStr = "5";
var num = 10;
console.log(`"${numStr}" + ${num} = ${numStr + num}`); // String + Number = String
console.log(`"${numStr}" - ${num} = ${numStr - num}`); // String - Number = Number
console.log(`"${numStr}" * ${num} = ${numStr * num}`); // String * Number = Number
console.log(`"${numStr}" / ${num} = ${numStr / num}`); // String / Number = Number
console.log(`"${numStr}" % ${num} = ${numStr % num}`); // String % Number = Number
console.log(`"${numStr}" == ${num} ? ${numStr == num}`);   // Loose equality (type coercion)
console.log(`"${numStr}" === ${num} ? ${numStr === num}`); // Strict equality (no type coercion)

// ====== SECTION 12: TYPE CONVERSION (CASTING) ======
console.log("\n=== CASTING ===");

// Method 1: parseInt() - Converts to integer (whole number)
var str1 = "42";
var str2 = "3.14";
var str3 = "100px";
console.log(`parseInt("${str1}") = ${parseInt(str1)}`);           // 42
console.log(`parseInt("${str2}") = ${parseInt(str2)}`);           // 3 (ignores decimals)
console.log(`parseInt("${str3}") = ${parseInt(str3)}`);           // 100 (ignores text after number)

// Method 2: parseFloat() - Converts to decimal number
console.log(`parseFloat("${str1}") = ${parseFloat(str1)}`);       // 42
console.log(`parseFloat("${str2}") = ${parseFloat(str2)}`);       // 3.14
console.log(`parseFloat("${str3}") = ${parseFloat(str3)}`);       // 100 (ignores text)

// Method 3: Number() - Strictest conversion
var str4 = "50";
var str5 = "  75  ";
var str6 = "abc";
console.log(`Number("${str4}") = ${Number(str4)}`);               // 50
console.log(`Number("${str5}") = ${Number(str5)}`);               // 75 (removes whitespace)
console.log(`Number("${str6}") = ${Number(str6)}`);               // NaN (not a number)

// Method 4: Unary Plus Operator (+) - Quick conversion
var str7 = "99";
console.log(`typeof "${str7}" = ${typeof str7}`);               // string
console.log(`+"${str7}" = ${+str7}`);                             // 99
console.log(`typeof +"${str7}" = ${typeof +str7}`);               // number

// Practical Examples
console.log("\n--- Practical Examples ---");
var userInput = "25";
var age = Number(userInput);
console.log(`User input: "${userInput}" → Age (number): ${age}`);
console.log(`Age + 5 = ${age + 5}`);                              // 30

var price = "19.99";
var discount = "5";
var discountedPrice = parseFloat(price) - parseInt(discount);
console.log(`Price: ${price} - Discount: ${discount} = ${discountedPrice}`);

var num1 = 10;
var num2 = 4;
var str1 = "Hello";
var bool1 = true;
var bool2 = false;
console.log(`Convert Number to String: ${String(num1) + String(num2)}`); // "104" (both numbers converted to strings and concatenated)
console.log(`Convert Number to String: ${num1.toString() + num2.toString()}`); // "104" (both numbers converted to strings and concatenated)

console.log(`Convert Boolean to String: ${String(bool1)}`); // "true" (boolean converted to string)
console.log(`Convert Boolean to Number: ${Number(bool1)}`); // 1 (boolean converted to number)
console.log(`Convert Boolean to Boolean: ${Boolean(bool1)}`); // true (boolean remains boolean)

console.log(`Convert Boolean to String: ${String(bool2)}`); // "false" (boolean converted to string)
console.log(`Convert Boolean to Number: ${Number(bool2)}`); // 0 (boolean converted to number)
console.log(`Convert Boolean to Boolean: ${Boolean(bool2)}`); // false (boolean remains boolean)    

var num1 = 10;
var num2 = 0;
var str1 = "Hello";
var str2 = "";
console.log(Boolean(num1)); // true (non-zero numbers are truthy)
console.log(Boolean(num2)); // false (zero is falsy)
console.log(Boolean(str1)); // true (non-empty strings are truthy)
console.log(Boolean(str2)); // false (empty string is falsy)
console.log(Boolean(null)); // false (null is falsy)
console.log(Boolean(undefined)); // false (undefined is falsy)
console.log(Boolean(NaN)); // false (NaN is falsy)

// ====== Lab 1 Exercise  ======
console.log("\n--- Lab Exercise ---");

var num1 = 10;
var num2 = 4;
console.log ("First number is: " + num1);
console.log (`Second number is: ${num2}`);
console.log ("Sum is: " + (num1 + num2));
console.log (`Sub is : ${num1 - num2}`);
console.log ("Mul is: " + (num1 * num2));
console.log (`Div is: ${num1 / num2}`);
console.log ("Mod is: " + (num1 % num2));

var output = `First number is: ${num1}\nSecond number is: ${num2}\nSum is: ${num1 + num2}\nSub is : ${num1 - num2}\nMul is: ${num1 * num2}\nDiv is: ${num1 / num2}\nMod is: ${num1 % num2}`;
console.log(output);
document.getElementById("output-lab").innerHTML = `<pre>${output}</pre>`; // Using <pre> to preserve line breaks and spacing

// ====== SECTION 11: DISPLAYING OUTPUT IN HTML (DOM MANIPULATION) ======
console.log("\n=== DISPLAYING OUTPUT IN HTML ===");

// Method 1: innerHTML - Replaces all HTML content
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<h4>Method 1: Using innerHTML</h4>";
outputDiv.innerHTML += "<p>This content was inserted using JavaScript innerHTML property.</p>";

// Method 2: textContent - Only inserts plain text (no HTML)
var domDiv = document.getElementById("dom-output");
domDiv.textContent = "Method 2: Using textContent - This is plain text only";

// Method 3: Creating elements dynamically and appending them
var newParagraph = document.createElement("p");
newParagraph.textContent = "Method 3: Created element using createElement()";
domDiv.appendChild(newParagraph);  // Adds as LAST CHILD of domDiv

// Method 4: insertAdjacentHTML - Insert HTML at specific positions relative to an element
// insertAdjacentHTML has 4 positions:
// 1. "beforebegin" - BEFORE the target element's opening tag (outside, above)
// 2. "afterbegin"  - AFTER the opening tag (inside, at the start)
// 3. "beforeend"   - BEFORE the closing tag (inside, at the end)
// 4. "afterend"    - AFTER the closing tag (outside, below)

// Position 1: afterbegin - Inside domDiv, at the very beginning
domDiv.insertAdjacentHTML("afterbegin", "<p>Position: afterbegin - Inserted INSIDE at the START</p>");

// Position 2: beforeend - Inside domDiv, at the very end
domDiv.insertAdjacentHTML("beforeend", "<p>Position: beforeend - Inserted INSIDE at the END</p>");

// Position 3: beforebegin - Outside domDiv, BEFORE it
domDiv.insertAdjacentHTML("beforebegin", "<p>Position: beforebegin - Inserted BEFORE the dom-output element</p>");

// Position 4: afterend - Outside domDiv, AFTER it
domDiv.insertAdjacentHTML("afterend", "<p>Position: afterend - Inserted AFTER the dom-output element</p>");

// ====== SECTION 12: Getting User Input ======
console.log("\n=== GETTING USER INPUT ===");

// Method 1: prompt() - Get text input from user in a dialog box
// EXAMPLE 1: Basic prompt
var userInput = prompt("Enter your name:") || "Anonymous"; // If user cancels or leaves blank, use "Anonymous"
console.log(`User entered: "${userInput}"`);

// Example 2: prompt() with default value
var userAge = prompt("What is your age?", "18") || "18"; // Default value is "18"
console.log(`Age input: ${userAge}`);
var ageNum = Number(userAge);
console.log(`Age as number: ${ageNum}, Type: ${typeof ageNum}`);

// Method 2: confirm() - Get yes/no confirmation from user
var isConfirmed = confirm("Do you want to continue?");
console.log(`User confirmed: ${isConfirmed}`);
if (isConfirmed) {
    console.log("User clicked OK - proceeding with action");
} else {
    console.log("User clicked Cancel - action cancelled");
}

// Method 3: alert() - Display a message to user
alert("Welcome to JavaScript!");

// Method 4: Getting input from HTML elements (like div, span, p, etc.)
var htmlElement = document.getElementById("greeting").innerHTML || "Hello JavaScript"; // Assuming there's an html element with id="greeting"
console.log(`Value from HTML element: "${htmlElement}"`);

// Method 5: Getting input from input , textarea , select  elements
var inputElement = document.getElementById("nameInput").value || "Anonymous"; // Assuming there's an input element with id="nameInput"
console.log(`Value from input element: "${inputElement}"`);

// Method 6: Event-based input (with HTML elements)
document.getElementById("submitBtn").addEventListener("click", function() {
    var userInput = document.getElementById("nameInput").value;
    console.log("User submitted: " + userInput);
});

// Best Practices for Getting User Input
// 1. Always validate user input (check if empty, correct type, etc.)
// 2. Convert string input to appropriate type (Number, Boolean)
// 3. Provide clear instructions to users
// 4. Use HTML forms for better UX (better than prompt/confirm)
// 5. Handle errors gracefully (what if user cancels?)

/*
Validation Example:
var inputValue = "42abc"; // User entered invalid number
if (isNaN(inputValue)) {
    console.log(`"${inputValue}" is NOT a valid number`);
} else {
    console.log(`"${inputValue}" is a valid number`);
}

Another validation example with conversion:
var validInput = "42";
console.log(`"${validInput}" → ${isNaN(validInput) ? "Invalid" : "Valid"} number`);
*/

// ====== Lab 2 Exercise  ======
console.log("\n--- Lab Exercise ---");

document.getElementById("submitTextBtn").addEventListener("click", function() {
    var str = document.getElementById("textInput").value || "Hello World"; // Get input from text field or use default
    var upperStr = str.toUpperCase();
    var replacedStr = upperStr.replace(/O/g, "Y");
    var reversedStr = replacedStr.split("").reverse().join("");
    
    document.getElementById("textOutput").innerHTML = `
        <p>Original String: ${str}</p>
        <p>Uppercase String: ${upperStr}</p>
        <p>Replaced String: ${replacedStr}</p>
        <p>Reversed String: ${reversedStr}</p>
    `;

    console.log(`Original String: ${str}`);
    console.log(`Uppercase String: ${upperStr}`);
    console.log(`Replaced String: ${replacedStr}`);
    console.log(`Reversed String: ${reversedStr}`);
});

// ====== SECTION 13: CONDITIONS ======
console.log("\n=== IF STATEMENTS ===");
var num1 = 10;
var num2 = 4;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is equal to ${num2}`);
}

var condition = (num1 > num2) ? `${num1} is greater than ${num2}` : (num1 < num2) ? `${num1} is less than ${num2}` : `${num1} is equal to ${num2}`;
console.log(`Condition: ${condition}`);

console.log("\n=== SWITCH STATEMENTS ===");
var day = "Monday";
switch (day) {
    case "Monday" || "mon" || "Mon" || "monday" || "MONDAY" || 1:
        console.log("Today is Monday");
        break;
    case "Tuesday" || "tue" || "Tue" || "tuesday" || "TUESDAY" || 2:
        console.log("Today is Tuesday");
        break;
    case "Wednesday" || "wed" || "Wed" || "wednesday" || "WEDNESDAY" || 3:
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Invalid day");
}

var age = 25;
switch (true) {
    case age >= 0 && age <= 0.5:
        console.log("Newborn");
        break;
    case age >= 1 && age <= 3:
        console.log("Toddler");
        break;
    case age >= 4 && age <= 12:
        console.log("Child");
        break;
    case age >= 13 && age <= 19:
        console.log("Teenager");
        break;
    case age >= 20 && age <= 64:
        console.log("Adult");
        break;
    case age >= 65:
        console.log("Senior");
        break;
    default:
        console.log("Invalid age");
}

// ====== Lab 3 Exercise  ======
console.log("\n--- Lab Exercise ---");

document.getElementById("submitNumBtn").addEventListener("click", function() {
    var weight = document.getElementById("weightInput").value;
    var height = document.getElementById("heightInput").value;
    var bmi = (weight / (Math.pow(height, 2))).toFixed(2);
    console.log(`Weight: ${weight} kg, Height: ${height} m`);
    console.log(`BMI: ${bmi}`);

    var bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        bmiCategory = "Obesity";
    } else if (bmi >= 35 && bmi < 39.9) {
        bmiCategory = "Severe Obesity";
    } else if (bmi >= 40) {
        bmiCategory = "Morbid Obesity";
    } else {
        bmiCategory = "Invalid/Empty Input";
    }

    var color = "";
    switch (bmiCategory) {
        case "Underweight":
            color = "blue";
            break;
        case "Normal weight":
            color = "green";
            break;
        case "Overweight":
            color = "orange";
            break;
        case "Obesity":
            color = "red";
            break;
        case "Severe Obesity":
            color = "darkred";
            break;
        case "Morbid Obesity":
            color = "maroon";
            break;
        default:
            color = "gray";
    }

    document.getElementById("numOutput").innerHTML = `<p style="color: ${color};">BMI: ${bmi} - ${bmiCategory}</p>`;
});

// ====== SECTION 14: ARRAYS (OBJECTS) ======
console.log("\n=== ARRAYS ===");
var array1 = [1, 2, 3, 4, 5];
var array2 = ["Hello", "World", 42, true];
var fruits = ["Apple", "Banana", "Cherry"];
console.log(array1);
console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Fruits: ${fruits}`);

console.log(`First fruit: ${fruits[0]}`);
console.log(`Array length: ${fruits.length}`);
console.log(`Is fruits an array? ${Array.isArray(fruits)}`); // true (check if variable is an array)
console.log(`Does fruits include Apple? ${fruits.includes("Apple")}`); // true (check if array includes a value)
var index = fruits.indexOf("Banana"); // Get index of element
console.log(`Index of Banana: ${index}`);
var index = fruits.indexOf("Raspberry"); // Get -1 if element not found
console.log(`Index of Raspberry: ${index}`);

fruits.push("Orange"); // Add to end
console.log(`After push: ${fruits}`);
fruits.pop(); // Remove from end
console.log(`After pop: ${fruits}`);
fruits.shift(); // Remove from start
console.log(`After shift: ${fruits}`);
fruits.unshift("Mango"); // Add to start
console.log(`After unshift: ${fruits}`);

fruits.splice(1, 2); // Remove 2 elements starting at index 1
console.log(`After splice: ${fruits}`);
fruits.splice(1, 2, "Strawberry", "Raspberry"); // Remove 2 elements starting at index 1 and add new elements
console.log(`After splice: ${fruits}`);
fruits.splice(1, 0, "Kiwi"); // Add 1 element at index 1 without removing any elements
console.log(`After splice: ${fruits}`);

var slicedFruits = fruits.slice(0, 2); // Get a portion of the array
console.log(`Sliced fruits: ${slicedFruits}`);

fruits[1] = "Blueberry"; // Update element at index 1
console.log(`After update: ${fruits}`); 
var sortedFruits = fruits.sort(); // Sort array alphabetically
console.log(`Sorted fruits: ${sortedFruits}`);
var reversedFruits = fruits.reverse(); // Reverse the order of the array
console.log(`Reversed fruits: ${reversedFruits}`);
console.log(`Fruits as string: ${fruits.join(", ")}`); // Join array elements into a string

// ===== Lab 3 Exercise =====
console.log("\n--- Lab Exercise ---");

var arrayInput =[];
document.getElementById("submitArrayBtn").addEventListener("click", function(){
    if (document.getElementById("arrayInput").value.length == 0) {
        alert("Please enter a value to add to the array");
    } else {
        arrayInput.push(document.getElementById("arrayInput").value); // Get input, split by comma, and trim whitespace
        document.getElementById("arrayOutput").innerHTML = arrayInput;
        document.getElementById("arrayLengthOutput").innerHTML = `Array Length: ${arrayInput.length}`;
        document.getElementById("arrayInput").value = ""; // Clear input field after adding to array
    }
})

document.getElementById("deleteArrayBtn").addEventListener("click", function(){
    if (document.getElementById("arrayInput").value.length == 0) {
        arrayInput.pop(); // Remove last element from array
    } else {
        var index = arrayInput.indexOf(document.getElementById("arrayInput").value); // Get index of element to delete
        if (index !== -1) {
            arrayInput.splice(index, 1); // Remove element at index
        } else {
            alert("Element not found in array");
        }
    }
    document.getElementById("arrayOutput").innerHTML = arrayInput;
    document.getElementById("arrayLengthOutput").innerHTML = `Array Length: ${arrayInput.length}`;
    document.getElementById("arrayInput").value = ""; // Clear input field after adding to array

});

// ====== SECTION 15: LOOPS ======
console.log("\n=== FOR LOOPS ===");
for (var i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

var array = []
for (var i = 1; i <= 5; i++) {
    array.push(i);
}

for (var i = 0; i < array.length; i++) {
    console.log(`Array element at index ${i}: ${array[i]}`);
}

for ( var i in array) {
    console.log(`Array element at index ${i}: ${array[i]}`);
}

for ( var i of array) {
    console.log(`Array element: ${i}`);
}

for (var i = 1; i % 2 == 0 && i <= 20; i++) {
    console.log(`Even number: ${i}`);
}

var str = "Hello World";
for (var i = 0; i < str.length; i++) {
    console.log(`Character at index ${i}: ${str[i]}`);
}

for ( var i in str) {
    console.log(`Character at index ${i}: ${str[i]}`);
}

for ( var i of str) {
    console.log(`Character: ${i}`);
}

// This loop demonstrates the use of break and continue statements
// It will print numbers from 1 to 30, but will skip even numbers and break the loop when it reaches 25
for (var i = 1; i <= 30; i++) {
    if (i == 25) {
        console.log("Breaking the loop at i = 25");
        break; // Exit the loop when i is 25
    }
    if (i % 2 == 0) {
        console.log(`Skipping even number: ${i}`);
        continue; // Skip the rest of the loop body for even numbers
    }
    console.log(`Current number: ${i}`);
}

console.log("\n=== WHILE LOOPS ===");


// ====== Lab 4 Exercise ======
console.log("\n--- Lab 4 Exercise ---");
for (var i = 1; i <= 10; i++) {
    document.getElementById("incrementOutput").innerHTML += `10 X ${i} = ${10 * i}<br>`;
}

// ====== Lab 5 Exercise ======
console.log("\n--- Lab 5 Exercise ---");
document.getElementById("submitWordBtn").addEventListener("click", function() {
    var word = document.getElementById("wordInput").value;
    document.getElementById("wordInput").value = ""; // Clear input field after getting value
    for (var i of word) {
        var lowerI = i.toLowerCase();
        var arry = ["a", "e", "i", "o", "u"];
        if (!arry.includes(lowerI)) {
            document.getElementById("wordOutput").innerHTML += `${i}<br>`;
        }
    }
});

// ====== Lab 6 Exercise ======
console.log("\n--- Lab 6 Exercise ---");

document.getElementById("searchBtn").addEventListener("click", function() {
    var studentName = document.getElementById("studentNameInput").value;
    var studentNameLow = studentName.toLowerCase();
    console.log(`Searching for student: "${studentName}"`);
    document.getElementById("studentNameInput").value = ""; // Clear input field after getting value
    var studentsList = ["Alice", "Bob", "Charlie", "David", "Eve", "Ahmed"];
    document.getElementById("studentList").innerHTML = `Student List: ${studentsList.join(" - ")}`;
    if (studentNameLow.length == 0) {
        document.getElementById("searchOutput").innerHTML = `Please enter a student name.`;
    } else {
        var isfound = false; // Flag to track if student is found instead of using break statement
        for (var student of studentsList) {
            if (student.toLowerCase() === studentNameLow) { isfound = true;}
        }
        if (isfound) {
            document.getElementById("searchOutput").innerHTML = `Student "${studentName}" <strong>found</strong> in the Student list.`;
        } else {
            document.getElementById("searchOutput").innerHTML = `Student "${studentName}" <strong>not found</strong> in the Student list.`;
        }
    }
});



