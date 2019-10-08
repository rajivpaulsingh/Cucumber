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
  "duration": 4790533572,
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
  "duration": 2363571199,
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
  "duration": 30901248,
  "status": "passed"
});
formatter.after({
  "duration": 148210233,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
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
  "name": "User search for \u003cVegetable\u003e vegetables",
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
  "name": "Verify the selected \u003cVegetable\u003e items are displayed in the checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Vegetable"
      ],
      "line": 18,
      "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 19,
      "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 20,
      "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "name": "User search for Brinjal vegetables",
  "matchedColumns": [
    0
  ],
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
  "name": "Verify the selected Brinjal items are displayed in the checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 4284294896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "SearchStepDefinition.user_search_for_vegetables(String)"
});
formatter.result({
  "duration": 2340023735,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2163535230,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 107763434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 20
    }
  ],
  "location": "SearchStepDefinition.verify_the_selected_items_are_displayed_in_the_checkout_page(String)"
});
formatter.result({
  "duration": 22248786,
  "status": "passed"
});
formatter.after({
  "duration": 169032638,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "name": "User search for Beetroot vegetables",
  "matchedColumns": [
    0
  ],
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
  "name": "Verify the selected Beetroot items are displayed in the checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 4298493640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "SearchStepDefinition.user_search_for_vegetables(String)"
});
formatter.result({
  "duration": 2368856876,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2193077799,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 111899576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 20
    }
  ],
  "location": "SearchStepDefinition.verify_the_selected_items_are_displayed_in_the_checkout_page(String)"
});
formatter.result({
  "duration": 31900376,
  "status": "passed"
});
formatter.after({
  "duration": 167339968,
  "status": "passed"
});
});