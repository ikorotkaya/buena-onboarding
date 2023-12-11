# Adding a New Onboarding Page

## 1. Update `onboarding-pages.json`

Open the `onboarding-pages.json` file located in the project's root directory. Add a new entry with the following format:

```json
{ "name": "Name", "slug": "name", "storeKey": "nameValid" }
```

Replace "Name" with the desired name for the new onboarding page. Ensure the "slug" is a unique identifier, and "storeKey" is a corresponding key in the onboarding store.

## 2. Create a New Page Component

Inside the `pages/onboarding` folder, create a new file with the name of the new onboarding page (e.g., `NewName.tsx`).

## 3. Update Onboarding Store

In the `app/store.ts` file, extend the onboarding store by adding the following variables and functions:

- `newName`
- `newNameValid`
- `setNewName`
- `setNewNameValid`

```tsx
interface OnboardingStore {
  // ... existing variables
  newName: string;
  newNameValid: boolean;
  setNewName: (value: string) => void;
  setNewNameValid: (value: boolean) => void;
}
```

Implement the functions `setNewName` and `setNewNameValid` to update the corresponding state variables.

## 4. Add Route to `App.tsx`

Include a new route in the `App.tsx` file to enable navigation to the new onboarding page. Use the following format:

```tsx
<Route path="newName" element={<NewName />} />
```

Replace "newName" with the slug specified in the `onboarding-pages.json` file and ensure the `element` points to the correct component.

## 5. Implement Logic in Page and Navigation

In the newly created page file (`NewName.tsx`), implement the logic necessary for the onboarding step. Additionally, update the `NextButton` component to reflect the new onboarding step and handle navigation accordingly.
