Feature: Application Login

  Scenario: Home page default login
    Given User is on Netbanking landing page
    When User login into application with "rajiv" and "1234"
    Then Home page is displayed
    And Cards displayed are "true"

  Scenario: Home page default login
    Given User is on Netbanking landing page
    When User login into application with "singh" and "4321"
    Then Home page is displayed
    And Cards displayed are "false"

  Scenario: Home page default login
    Given User is on Netbanking landing page
    When User sign up with following details
    | superman | abcd | superman@abcd.com | Australia | 123456 |
    Then Home page is displayed
    And Cards displayed are "false"

  Scenario Outline: Home page default login
    Given User is on Netbanking landing page
    When User login into application with <Username> and <Password>
    Then Home page is displayed
    And Cards displayed are "true"

    Examples:
      |Username|Password|
      |user1   |pass1   |
      |user2   |pass2   |
      |user3   |pass3   |
      |user4   |pass4   |
      |user5   |pass5   |