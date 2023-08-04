import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../page-objects/Search_Page";

const searchPage = new SearchPage;

before(() => {
  cy.fixture('userData.json').then((data) => {
    userData = data;
  });
});

When(`I type the Github username of a student into the search form`, () => {
  searchPage.typeUsername(userData.username);
});

When(`press the Go button`, () => {
  searchPage.clickOnGoButton();
});

Then(`each repo is displayed as a row in the search result section`, () => {
  searchPage.verifyRowAreVisible();
});

Then(`each row includes the name and description of the repo`, () => {
  searchPage.verifyRowResultsContainsNameAndDescription();
});

Then(`the repo name is a link to the repo's URL`, () => {
  searchPage.verifyNotBrokenLinksToRepo();
});

Then(`if any information is missing, then {string} is displayed instead`, (symbol) => {
  searchPage.verifyRepoDescriptionDefaultValue(symbol);
});
