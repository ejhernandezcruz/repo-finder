import { Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from '../page-objects/Search_Page';

const searchPage = new SearchPage();

before(() => {
    cy.fixture('layout.json').then((data) => {
      layoutData = data;
    });
  });

Given(`I am on the Repo Finder App`, () => {
    searchPage.navigateToSearchPage();
})

Then(`I see a UI with a header, a search form, and a search result section`,() => {
    searchPage.verifyLayoutComponents(layoutData.output_text_default);
})

Then(`the header displays the title of the app`,() => {
    searchPage.verifyPageTitle(layoutData.header_label);
})
