🧮 Calculator Project

**A simple web-based calculator built with HTML, CSS, and JavaScript.
This project demonstrates the use of DOM manipulation, event handling, and basic arithmetic logic in JavaScript.**

🚀 **Features**

✅ Perform basic arithmetic operations (+, -, *, /).

✅ Clear button to reset the current calculation.

✅ User-friendly UI with styled buttons.

✅ Console logging of every step for debugging and learning.

✅ Minimal, clean design with custom CSS.

🛠️ **Technologies Used**

-HTML5 → Structure of the calculator.

-CSS3 → Styling with custom classes (darkbutton, orangebutton).

-JavaScript → Handles calculation logic using eval() (for educational purposes only).

📖 **How It Works**

- Each button appends its value to a global string variable calculation.

- When = is clicked, eval(calculation) executes the string as a math expression.

- Clear resets the calculation to an empty string.

- Console logs (console.log) show current calculations for debugging.

⚠️ **Note**

- eval() is used here for learning purposes only.

- In production, consider building a custom parser for safety.

📌 **Example Usage**
- User clicks: 2 → + → 3 → =
- Console Output: 5

**Display shows:**

5

🎯 **Future Improvements**

- Add calculation history using localStorage + JSON.

- Display calculations directly on the UI (instead of only console).

- Add support for keyboard input.

- Improve error handling for invalid expressions.

👨‍💻 **Author**

Developed by Muhammad Subhan as a practice project for learning JavaScript fundamentals.
