$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
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
  "duration": 249480209,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 90259,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 2140278,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
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
  "duration": 80602,
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
  "duration": 2766512,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 82511,
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
  "duration": 190894,
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
  "duration": 181913,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 88608,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 64737,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
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
  "duration": 61177,
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
  "duration": 136333,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 59220,
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
  "duration": 107255,
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
  "duration": 79639,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 78304,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.check_if_the_browser_is_started()"
});
formatter.result({
  "duration": 55248,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
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
  "duration": 1207813,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 2314127,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 190703,
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
  "duration": 166821,
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
  "duration": 173507,
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
  "duration": 121387,
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
  "duration": 205336,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 91114,
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
  "duration": 824308,
  "status": "passed"
});
formatter.after({
  "duration": 93618,
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
  "duration": 155368,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 282247,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.home_page_is_displayed()"
});
formatter.result({
  "duration": 101716,
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
  "duration": 192063,
  "status": "passed"
});
});