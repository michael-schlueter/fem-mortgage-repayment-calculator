# Frontend Mentor Mortgage Repayment Calculator

> This is a solution to a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The challenge was to build a mortage repayment calculator and get it looking as close to the design as possible.

## General Information

- This project is the third project of the "JavaScript frameworks and libraries" career path from [Frontend Mentor](https://www.frontendmentor.io/)
- I went with the tools I used in the Frontend Mentor projects before (React, Typescript, Tailwind, Vitest, React Testing Library) because I'm already familiar with them and want to gain further experience in working with them in another context (building and testing forms)
- I decided not to use shadcn-ui components in this project and build my own components (e.g. radio buttons, form inputs)
- For conditionally applying Tailwind classes I used Tailwind-Merge in combination with clsx for making sure potential class conflicts are solved as intended and to improve code readability

## Technologies Used

- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.13
- Vitest 2.1.2
- React Testing Library 16.0.1
- Tailwind-Merge 2.5.3
- clsx 2.1.1

## Features

- input mortgage information to see monthly repayment and total repayment amounts after submitting the form
- form validation messages are displayed if inputs are incomplete or invalid
- form can be completed and submitted using the keyboard
- displays optimal layout for the interface depending on user device's screen size
- includes hover and focus states for all interactive elements
- clears form inputs by clicking button

## Screenshots

![Example screenshot](https://i.ibb.co/TLVtn9F/mortgage-repayment-calculator.jpg)

## Demo

Live demo [_here_](https://fem-mortgage-repayment-calculator.vercel.app/).

## Setup

The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Install NPM packages in the project folder by running

```
npm install
```

in the terminal. 3. Run the app

```
npm run dev
```

4. Visit localhost:5173 in your browser

## Learnings

- styling different inputs elements (using appearance:none to override certain behaviors, custom styling of the radio button outside of Tailwind)
- using the :has selector and peer-utility for styling parent/sibling elements
- formatting inputs / currency
- setting up input validation for several different input fields
- accessibility considerations in setting up a form (e.g. screen reader announcement of results of submitting the form)

## Project Status

The project is basically finished. I extended the scope of the project by adding some tests and screen reader support. I may revisit this project to animate the transition for displaying the results.

## Acknowledgements

- This project is a solution to this [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73).
