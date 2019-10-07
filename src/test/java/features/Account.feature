Feature: Application Account

  Background:
    Given Validate the browser
    When Browser is triggered
    Then Check if the browser is started

  @RegTest
  Scenario: Home page default login
    Given User is on Netbanking landing page
    When User login into application with "rajiv" and "1234"
    Then Home page is displayed
    And Cards displayed are "true"

    @SmokeTest
    Scenario: Home page default login
      Given User is on Netbanking landing page
      When User login into application with "singh" and "4321"
      Then Home page is displayed
      And Cards displayed are "false"

    @RegTest
    Scenario: Home page default login
      Given User is on Netbanking landing page
      When User sign up with following details
      | superman | abcd | superman@abcd.com | Australia | 123456 |
      Then Home page is displayed
      And Cards displayed are "false"