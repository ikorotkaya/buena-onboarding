# Onboarding flow for Buena test assignment

## Technologies used

* React with Browser Router
* Typescript 
* Vite 
* Zustand
* Tailwind CSS
* Cypress
* Jest
* Github Actions for CI
* Netlify for hosting

## Features

1. Single Page Application with browser routing: home page, success page and the onboarding flow that consists of 5 pages. Read more about onboarding flow pages configuration in [design notes](design_notes/1_onboarding_configuration.md).
2. Responsive markup. This is where Tailwind CSS comes in. Probably the most complex part was to ensure great UX on mobile. I had to duplicate the "Next" button for mobile and desktop screens. 
3. Page-agnostic "Next" button. It's a separate component that is used on every page of the onboarding flow. Read more about it in [design notes](design_notes/3_next_button_functionality.md).
4. Onboarding checklist on desktop. I think for users it's very important to keep track of where they're in the onboarding and be able to easily navigate between steps. Open the website from your laptop to check out that awesome Sidebar component. Read more about it in [design notes](design_notes/4_sidebar_functionality.md). 5. To give users on mobile the same experience, I've added a progress bar at the top of the screen. Read more about it in [design notes](design_notes/5_mobile_navigation.md).
6. Unit tests with Jest. I've simply followed positive/negataive/edge case approach. Soon I'll add coverage support and add more tests.
7. E2E tests with Cypress. I've added a few tests to check if the onboarding flow works as expected. Again, I'll add more tests soon.
8. Surprise feature. 🎁 Try the onboarding flow and reach the end: https://buena-onboarding.netlify.app/

## Development 

### Installation

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

### Testing

1. Run Jest unit tests with `npm run test`
2. Run Cypress tests with `npm run cypress:open`

## Licence

This project is released under the MIT Licence. Feel free to use, modify, and redistribute the code under the terms of the licence.
