package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import java.util.List;

@RunWith(Cucumber.class)
public class StepDefinition {

    @Given("^User is on Netbanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {

        System.out.println("Navigated to login url");
    }

    @When("^User login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {

        System.out.println("Logged in with " + strArg1 + " success");
        System.out.println("Logged in with " + strArg2 + " success");
    }

    @Then("^Home page is displayed$")
    public void home_page_is_displayed() throws Throwable {

        System.out.println("Home page is displayed");
    }

    @Then("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are(String arg1) throws Throwable {

        System.out.println("Cards displayed are: " + arg1);
    }

    @When("^User sign up with following details$")
    public void user_sign_up_with_following_details(DataTable dataTable) throws Throwable {

        List<List<String>> obj = dataTable.raw();
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        System.out.println(obj.get(0).get(2));
        System.out.println(obj.get(0).get(3));
        System.out.println(obj.get(0).get(4));
    }
}