# Onboarding Configuration

The `onboarding-pages.json` file configures the onboarding flow.

## Configuration

Each entry in the file defines an onboarding page with:

- **Name:** Descriptive title (e.g., "Email", "Phone number"), shown in the sidebar on desktop.
- **Slug:** Unique identifier for routing and referencing.
- **StoreKey:** Manages data validity in the onboarding store. If `null`, the page doesn't impact the state.

```json
[
  { "name": "Name", "slug": "name", "storeKey": "nameValid" },
  { "name": "Email", "slug": "email", "storeKey": "emailValid" },
  { "name": "Phone number", "slug": "phone", "storeKey": "phoneNumberValid" },
  { "name": "Income", "slug": "income", "storeKey": "incomeValid" },
  { "name": "Summary", "slug": "summary", "storeKey": null }
]
```

---

To add a new onboarding page, refer to [Design Note 2](2_add_new_onboarding_page.md).