# Navigation in Mobile Version

The mobile navigation has a back Button, a progress display, and a next button.

1. **Back Button:** Conditionally rendered to appear only when the current page index is greater than 0, ensuring it doesn't display on the initial onboarding step.

2. **Progress Indicator:** Shows users their onboarding progress by displaying the current step number and the total number of steps.

3. **Next Button:** If the current page index is less than the total number of pages, a button will appear. This button adapts its appearance according to input validation: gray theme for invalid input and a white-texted indigo background for valid input.