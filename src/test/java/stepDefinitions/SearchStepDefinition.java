package stepDefinitions;

import Cucumber.Automation.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

@RunWith(Cucumber.class)
public class SearchStepDefinition {

    public WebDriver driver;

    @Given("^User is on Greencart landing page$")
    public void user_is_on_greencart_landing_page() throws Throwable {

        driver = Base.getDriver();

    }

    @When("^User search for \"([^\"]*)\" vegetable$")
    public void user_search_for_something_vegetable(String strArg1) throws Throwable {

        // //tagName[@attribute='value']
        driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
        Thread.sleep(3000);
    }

    @Then("^\"([^\"]*)\" results are displayed$")
    public void something_results_are_displayed(String strArg1) throws Throwable {

        Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
    }

    @And("^Add items to cart$")
    public void add_items_to_cart() throws Throwable {

        driver.findElement(By.cssSelector("a.increment")).click();
        driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
        Thread.sleep(2000);
    }

    @And("^User proceed to the checkout page for purchase$")
    public void user_proceed_to_the_checkout_page_for_purchase() throws Throwable {

        driver.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
        driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
    }

    @Then("^Verify the selected \"([^\"]*)\" items are displayed in the checkout page$")
    public void verify_the_selected_something_items_are_displayed_in_the_checkout_page(String strArg1) throws Throwable {

        Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
    }
}
