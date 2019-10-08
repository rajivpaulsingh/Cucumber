package CucumberOptions;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue = "StepDefinitions",
        tags = "@SeleniumTest",
        strict = true,
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/cukes.xml"})
public class TestRunner {
}
