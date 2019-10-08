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
  "duration": 7799848728,
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
  "duration": 2441686153,
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
  "duration": 34225315,
  "status": "passed"
});
formatter.after({
  "duration": 176732746,
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
    },
    {
      "cells": [
        "Carrot"
      ],
      "line": 21,
      "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;4"
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
  "duration": 4541678042,
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
  "duration": 2326467698,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2186063810,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 136739369,
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
  "duration": 31659444,
  "status": "passed"
});
formatter.after({
  "duration": 202982728,
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
  "duration": 5591162016,
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
  "duration": 2293504898,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2166568311,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 137050609,
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
  "duration": 31630767,
  "status": "passed"
});
formatter.after({
  "duration": 188937127,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page;;4",
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
  "name": "User search for Carrot vegetables",
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
  "name": "Verify the selected Carrot items are displayed in the checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 4494967610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carrot",
      "offset": 16
    }
  ],
  "location": "SearchStepDefinition.user_search_for_vegetables(String)"
});
formatter.result({
  "duration": 2397626964,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2174949570,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 143656080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carrot",
      "offset": 20
    }
  ],
  "location": "SearchStepDefinition.verify_the_selected_items_are_displayed_in_the_checkout_page(String)"
});
formatter.result({
  "duration": 32220441,
  "status": "passed"
});
formatter.after({
  "duration": 207974361,
  "status": "passed"
});
});