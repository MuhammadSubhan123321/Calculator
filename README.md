🧮 Web Calculator

**A simple and elegant web-based calculator built with HTML, CSS, and JavaScript.
This calculator supports basic arithmetic operations (+, −, ×, ÷), persistent storage using localStorage, and a clean user interface.**

🚀 **Features**

➕ Addition, ➖ Subtraction, ✖️ Multiplication, ➗ Division

✅ Supports decimal values

💾 Persistent storage: keeps the last calculation even after refreshing the page

🧹 Clear button to reset calculations

🎨 Minimal UI with styled buttons

🛠️ How It Works

**index.html**

- Defines the calculator layout (buttons, display area).

- Links style.css for design and script.js for functionality.

**style.css**

- Provides styling for number buttons, operators, and display.

- Uses a minimal color palette for professional look.

**script.js**

- Handles button clicks and updates the calculation.

- Uses eval() for arithmetic operations (⚠️ safe only for learning purposes).

- Stores and retrieves data from localStorage.

- Displays results dynamically in the DOM.


📦** Installation & Usage**

- Clone the repository and open index.html in your browser:

# Open index.html in browser

Or simply drag and drop the index.html file into your browser.

🧹 **Clearing Calculations**

- The Clear button resets both the display and localStorage.

- Refreshing the page does not remove calculations unless cleared manually.

⚠️**Note on eval()**

This project uses JavaScript’s eval() for arithmetic, which should not be used in production due to security risks.
For a real-world project, consider implementing a safe parser for expressions.

👨‍💻 **Developer**

Muhammad Subhan – Full-Stack Developer (in progress)
