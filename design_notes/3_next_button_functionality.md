# Next Button

1. **State Management:** The "Next" button uses `useState` and `useEffect` to find the next onboarding page based on the current progress (`currentPageIndex`).

2. **Conditional Rendering:** It only shows up when there's a next page, staying relevant to the user's progress.

3. **Styling and Interaction:** The button adjusts its look based on input validation. Invalid input results in a grey theme, while valid input is indicated by an indigo background with white text.

4. **Responsiveness:** On mobile, the button sits at the bottom for easy access. On the web, it appears close to input fields, confirming successful inputs. Progress depends on valid inputs.