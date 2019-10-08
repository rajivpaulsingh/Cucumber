package StepDefinitions;

import CucumberUtilities.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base {

    @Before("@MobileTest")
    public void beforeValdiation() {
        System.out.println("Before Mobile  hook");
    }

    @After("@MobileTest")
    public void afterValdiation() {
        System.out.println("  After Mobile before hook");
    }

    @Before("@WebTest")
    public void beforeWebValdiation() {
        System.out.println("Before Web  hook");
    }

    @After("@WebTest")
    public void afterWebValdiation() {
        System.out.println("  After Web before hook");
    }

    @After("@SeleniumTest")
    public void afterSeleniumTest() {
        driver.close();
    }
}

