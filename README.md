# Calculator

A lightweight, browser-based calculator built with HTML, CSS, and vanilla JavaScript. It provides a clean four-column keypad for entering and evaluating basic arithmetic expressions without any frameworks or external dependencies.

## Features

- Addition, subtraction, multiplication, and division
- Modulo (`%`) for finding the remainder of a division
- Decimal number input
- **AC** clears the complete expression
- **DEL** removes the last character
- **=** evaluates the current expression
- Displays an error for invalid expressions and non-finite results, such as division by zero
- Centered calculator layout with button hover feedback

## Getting started

No installation, build step, or server is required.

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Use the on-screen buttons to enter an expression and press **=**.

For local development, open the project folder in your preferred code editor and refresh the browser after editing the files.

## How to use

| Button | Action |
| --- | --- |
| `0`–`9` | Add a digit to the expression |
| `.` | Add a decimal point |
| `+`, `-`, `*`, `/` | Add an arithmetic operator |
| `%` | Add the modulo operator (remainder) |
| `DEL` | Remove the last character |
| `AC` | Clear the display |
| `=` | Calculate the expression |

Expressions follow JavaScript arithmetic precedence. For example, multiplication and division are evaluated before addition and subtraction. The modulo key represents remainder, not percentage.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Calculator markup, display, keypad buttons, and script/style links |
| `index.css` | Page layout, calculator styling, keypad grid, and hover effects |
| `index.js` | Display updates, clear/delete actions, expression evaluation, and error handling |

## Built with

- HTML5
- CSS3 (Flexbox and CSS Grid)
- Vanilla JavaScript

There are no third-party libraries or runtime dependencies.

## Notes

The display is read-only and expressions are entered through the provided keypad. This is a small learning project intended for basic arithmetic practice; it does not provide advanced calculator functions such as parentheses, scientific operations, or calculation history.
