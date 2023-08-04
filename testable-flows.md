
---
# Repo Finder Test Scenarios

This document outlines the prioritized test scenarios for the Repo Finder application.

## 1. Verifying the presence and correct layout of UI elements

This is the most fundamental test scenario. If the UI layout isn't correct, all other features are likely to fail or not behave as expected. This test ensures that the app has the necessary UI elements for its functionality.

```gherkin
Given I am on the Repo Finder App
Then I see a UI with a header, a search form, and a search result section
And the header displays the title of the app
```

## 2. Searching for a student's repos

This scenario is the core functionality of the app. It's important to ensure that this works correctly after the basic UI layout is confirmed.

```gherkin
Given I am on the Repo Finder App
When I type the Github username of a student into the search form
And press the Go button
Then each repo is displayed as a row in the search result section
And each row includes the name and description of the repo
And the repo name is a link to the repo's URL
And if any information is missing, then "–" is displayed instead
```

## 3. User feedback on successful search action

Once we know that search works correctly, we need to ensure that users receive proper feedback for successful searches. This helps provide a good user experience.

```gherkin
Given a successful search action
When the response from Github API is received
Then a success message is displayed above the search field for a short amount of time
```

## 4. User feedback on failed search action due to user not found

Negative scenarios are also important to handle gracefully for a good user experience. User not found is likely the most common error, so we test this next.

```gherkin
Given an unsuccessful search action because the Github user does not exist
When the response from Github API is received
Then a specific error message indicating the user does not exist is displayed above the search field for a short amount of time
```

## 5. User feedback on failed search action due to other reasons

Lastly, we should also handle other errors gracefully. While these may be less common, providing useful feedback helps users understand what went wrong.

```gherkin
Given an unsuccessful search action because of reasons other than the Github user does not exist
When the response from Github API is received
Then a generic error message is displayed above the search field for a short amount of time
```

---

This order of scenarios follows a flow from basic UI functionality to core functionality and then to error handling. This way, we ensure that the most fundamental and most used parts of the app work correctly before we test error scenarios.

