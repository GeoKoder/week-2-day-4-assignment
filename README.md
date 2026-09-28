# McTaba Labs — Week 2 Day 4 Assignment

Interactive front-end components built with semantic HTML5, CSS custom properties, and vanilla JavaScript.

---

## Table of Contents

- [Overview](#overview)
- [Tasks & Features](#tasks--features)
  - [1. Modal Dialog Popup System (`modal.html`)](#1-modal-dialog-popup-system-modalhtml)
  - [2. Drag-and-Drop Re-order List (`drag.html`)](#2-drag-and-drop-re-order-list-draghtml)
  - [3. Trip Registration Form with Live Validation (`form.html`)](#3-trip-registration-form-with-live-validation-formhtml)
  - [4. Dark Mode Theme Toggle (`theme.js`)](#4-dark-mode-theme-toggle-themejs)
- [Project Structure](#project-structure)
- [Setup & How to Run](#setup--how-to-run)
  - [Option 1: Direct File Opening](#option-1-direct-file-opening)
  - [Option 2: VS Code Live Server](#option-2-vs-code-live-server)
  - [Option 3: Python Built-in HTTP Server](#option-3-python-built-in-http-server)
  - [Option 4: Node.js `npx serve`](#option-4-nodejs-npx-serve)
- [Technologies Used](#technologies-used)

---

## Overview

This project implements three interactive front-end tasks showcasing core browser APIs, dynamic DOM manipulation, accessible UI patterns, and an adaptive dark mode theme toggle.

---

## Tasks & Features

### 1. Modal Dialog Popup System (`modal.html`)
- Built using the native HTML `<dialog>` element.
- Accessible backdrop overlay with smooth CSS transition effects.
- Outside-click detection to automatically close open dialogs.
- Scroll locking on `document.body` while a modal is open.
- Associated JavaScript: `modal.js`.

### 2. Drag-and-Drop Re-order List (`drag.html`)
- Built with the native HTML5 Drag and Drop API (`dragstart`, `dragover`, `drop`, `dragend`).
- Live drop-target indicator line displaying the destination position.
- Real-time priority numbering computed automatically with CSS counters.
- Visual feedback on drag (reduced opacity, grabbing cursor, offset shadow).
- Associated JavaScript: `drag.js`.

### 3. Trip Registration Form with Live Validation (`form.html`)
- Live, per-input validation triggers on every keystroke:
  - **Full Name**: Required, minimum 2 characters.
  - **Email**: Format validation (`name@domain.ext`), whitespace prevention.
  - **Phone Number**: Exactly 10 digits starting with `07` or `01`.
  - **Password**: Minimum 8 characters, at least one uppercase letter and one digit.
- **Validation Feedback**:
  - **Valid Field**: Green border and green Unicode checkmark icon (`✓`).
  - **Invalid Field**: Red border, red Unicode X icon (`✗`), and a descriptive error message below the field.
- **Smart Submit State**: Submit button remains disabled until all 4 inputs pass validation simultaneously.
- Associated JavaScript: `form.js`.

### 4. Dark Mode Theme Toggle (`theme.js`)
- **Theme Toggle Switch**: Floating button positioned at the top-right of every task page.
- **CSS Custom Properties**: All colors are defined via CSS variables in `:root` (light blueprint theme) and `[data-theme="dark"]` (dark midnight theme).
- **Smooth Transitions**: Uses `transition: background-color 0.3s, color 0.3s, border-color 0.3s` for smooth visual transitions between themes.
- **Persistence Across Refreshes**: Preference is saved in `localStorage` under the key `"theme"`.
- **Zero-Flicker Page Load**: Applies the saved theme immediately during page initialization to prevent any flash of unstyled content.
- **System Preference Detection**: Automatically checks `prefers-color-scheme` if no manual preference is saved.

---

## Project Structure

```text
week-2-day-4-assignment/
├── README.md        # Project documentation and setup instructions
├── styles.css       # Unified design system, tokens, layout, and dark mode rules
├── theme.js         # Theme toggle logic with localStorage persistence
├── modal.html       # Task 1: Modal dialog popup page
├── modal.js         # Task 1: Modal event handlers
├── drag.html        # Task 2: Drag-and-drop re-order task list
├── drag.js          # Task 2: Drag-and-drop event handlers
├── form.html        # Task 3: Trip registration form with validation
└── form.js          # Task 3: Form validators and submit handling
```

---

## Setup & How to Run

No build step or external package installation is required. You can run the project using any of the methods below:

### Option 1: Direct File Opening
1. Navigate to the project folder on your machine.
2. Double-click any of the HTML files:
   - `form.html` — Registration Form
   - `modal.html` — Popup System
   - `drag.html` — Drag-and-Drop Task List
3. The page will open directly in your default web browser.

### Option 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `form.html` (or `modal.html` / `drag.html`) and select **"Open with Live Server"**.
4. The page will open at `http://127.0.0.1:5500/form.html`.

### Option 3: Python Built-in HTTP Server
If Python is installed on your computer:
1. Open your terminal or PowerShell inside the project directory:
   ```bash
   cd "d:\I AM GEOKODER\McTaba Labs\mctaba-assignments\week-2-day-4-assignment"
   ```
2. Start the local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   - Form: `http://localhost:8000/form.html`
   - Modals: `http://localhost:8000/modal.html`
   - Drag List: `http://localhost:8000/drag.html`

### Option 4: Node.js `npx serve`
If Node.js is installed on your computer:
1. Run:
   ```bash
   npx serve .
   ```
2. Open the URL printed in the terminal (typically `http://localhost:3000`).

---

## Technologies Used

- **HTML5**: Semantic tags, `<dialog>`, form input attributes, ARIA attributes.
- **CSS3**: CSS Custom Properties (variables), Flexbox, CSS Grid, `@starting-style`, transitions.
- **Vanilla JavaScript**: DOM Manipulation, Event Listeners, HTML5 Drag & Drop API, `localStorage` API.
