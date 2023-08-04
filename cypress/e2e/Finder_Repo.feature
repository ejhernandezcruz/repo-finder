Feature: Repo Finder

    @regresion
    Scenario: Verifying the presence and correct layout of UI elements
        Given I am on the Repo Finder App
        Then I see a UI with a header, a search form, and a search result section
        And the header displays the title of the app

    @regresion
    Scenario: Searching for a student's repos
        Given I am on the Repo Finder App
        When I type the Github username of a student into the search form
        And press the Go button
        Then each repo is displayed as a row in the search result section
        And each row includes the name and description of the repo
        And the repo name is a link to the repo's URL
        And if any information is missing, then "–" is displayed instead