$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place the order for vegetables",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for items and validate result",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-validate-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for \"Cucumber\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 8829181803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 17
    }
  ],
  "location": "SearchStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3354803554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "SearchStepDefinition.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 28059692,
  "status": "passed"
});
formatter.after({
  "duration": 151265128,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for \"Brinjal\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Add items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceed to the checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the selected \"Brinjal\" items are displayed in the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 4386706301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 17
    }
  ],
  "location": "SearchStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3370198211,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2168994239,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 119500388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 21
    }
  ],
  "location": "SearchStepDefinition.verify_the_selected_something_items_are_displayed_in_the_checkout_page(String)"
});
formatter.result({
  "duration": 30944760,
  "status": "passed"
});
formatter.after({
  "duration": 189015338,
  "status": "passed"
});
});