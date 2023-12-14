# Onboarding flow

This project is a test task for Buena. It's a React SPA that implements an onboarding flow. 

🔗 Live demo: https://buena-onboarding.netlify.app/

## Technologies used

* React with Browser Router
* Typescript 
* Vite 
* Zustand
* Tailwind CSS
* Cypress
* Jest
* ESLint
* Prettier
* Github Actions for CI
* Netlify for hosting
* Storybook

## Features

1. Single Page Application with browser routing: home page, success page and the onboarding flow that consists of 5 pages. Read more about onboarding flow pages configuration in [this design note](design_notes/1_onboarding_configuration.md).
2. Responsive markup. This is where Tailwind CSS comes in. Probably the most complex part was to ensure great UX on mobile. I had to duplicate the "Next" button for mobile and desktop screens. 
3. Page-agnostic "Next" button. It's a separate component that is used on every page of the onboarding flow. Read more about it in [this design note](design_notes/3_next_button_functionality.md).
4. Onboarding checklist on desktop. I think for users it's very important to keep track of where they're in the onboarding and be able to easily navigate between steps. Open the website from your laptop to check out that awesome Sidebar component. Read more about it in [this design note](design_notes/4_sidebar_functionality.md). 
5. To give users on mobile the same experience, I've added a progress bar at the top of the screen. Read more about it in [this design note](design_notes/5_mobile_navigation.md).
6. Unit tests with Jest. I've simply followed positive/negative/edge case approach. Soon I'll add coverage support and more tests. In the meantime, you can check out the complete unit [test file for the Name onboarding screen](https://github.com/ikorotkaya/buena-onboarding/blob/main/src/pages/onboarding/Name.spec.tsx). I also added GitHub action that reports test results on pull requests. [Example](https://github.com/ikorotkaya/buena-onboarding/commit/000bfd9fe19741a3bce71c346104922d8fed16ee).
7. E2E tests with Cypress. I've added a few tests to check if the onboarding flow works as expected. Again, I'll add more tests soon. Both unit and E2E tests are run on every push to the main branch via Github Actions. Take a look at [a sample build](https://github.com/ikorotkaya/buena-onboarding/actions/runs/7173746064). 🔥
8. Storybook. I add well-defined atomic components to the storybook. You can find the live here: https://buena-onboarding-storybook.netlify.app/ 
9. Surprise feature. 🎁 Try the onboarding flow and reach the end: https://buena-onboarding.netlify.app/

## How to add a new onboarding page

The onboarding was built with flexibility in mind. All components are decoupled from the notion of a specific onboarding page as possible. 

The order of pages is configured via the [`onboarding-pages.json`](https://github.com/ikorotkaya/onboarding-spa/blob/main/onboarding-pages.json) config file.

Check out the [this design note](design_notes/2_add_new_onboarding_page.md) for more details.

## Next steps

Of course, I was short on time and haven't done everything I wanted to do. Here's the list of things I'd like to add/improve:

- [x] Make submit button page-agnostic 
- [x] Create static page to handle page refresh ([Netlify redirects config](https://docs.netlify.com/routing/redirects/rewrites-proxies/#shadowing))
- [x] Make mobile "Next" button page-agnostic
- [x] Add coverage support for Jest
- [x] Add Storybook
- [ ] Introduce a design system and align the look and feel of all components
- [ ] Add more animations and transitions
- [ ] Add i18n support (I bet we'll have DE and EN-speaking users) 
- [ ] Add more unit and E2E tests
- [ ] Use keyboard for navigation
- [ ] a11y

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
