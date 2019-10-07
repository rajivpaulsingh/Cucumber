$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Account",
  "description": "",
  "id": "application-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 157010533,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 99437,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 167191,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default login",
  "description": "",
  "id": "application-account;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User login into application with \"rajiv\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 143972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajiv",
      "offset": 34
    },
    {
      "val": "1234",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 4586566,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 126940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 144985,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 89769,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 160415,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 129622,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home page default login",
  "description": "",
  "id": "application-account;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User login into application with \"singh\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 97158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singh",
      "offset": 34
    },
    {
      "val": "4321",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 531933,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 2337108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 386667,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 577007,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 112478,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 257619,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home page default login",
  "description": "",
  "id": "application-account;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "superman",
        "abcd",
        "superman@abcd.com",
        "Australia",
        "123456"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 70351,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 2480939,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 86093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 182431,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 191056,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with \"singh\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 138281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "singh",
      "offset": 34
    },
    {
      "val": "4321",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 1189262,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 98958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 825899,
  "status": "passed"
});
formatter.after({
  "duration": 167843,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "superman",
        "abcd",
        "superman@abcd.com",
        "Australia",
        "123456"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 92462,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 145625,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 277185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 227676,
  "status": "passed"
});
formatter.uri("Search.feature");
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
  "duration": 4888654715,
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
  "duration": 3314659261,
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
  "duration": 34958817,
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
  "duration": 3814353346,
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
  "duration": 3325611844,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "duration": 2193576563,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 121880570,
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
  "duration": 29888681,
  "status": "passed"
});
});