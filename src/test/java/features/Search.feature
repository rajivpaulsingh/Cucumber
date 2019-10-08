Feature: Search and place the order for vegetables

  @SeleniumTest
  Scenario: Search for items and validate result
    Given User is on Greencart landing page
    When User search for "Cucumber" vegetable
    Then "Cucumber" results are displayed

  @SeleniumTest
  Scenario Outline: Search for items and move to checkout page
    Given User is on Greencart landing page
    When User search for <Vegetable> vegetables
    And Add items to cart
    And User proceed to the checkout page for purchase
    Then Verify the selected <Vegetable> items are displayed in the checkout page

    Examples:
    |Vegetable |
    |Brinjal |
    |Beetroot |