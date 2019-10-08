package CucumberUtilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Base {

    public static WebDriver driver;
    public static Properties prop;

    public static WebDriver getDriver() throws IOException {

        prop = new Properties();
        FileInputStream fis = new FileInputStream("/Users/singh2_rajiv/Selenium/Cucumber/src/test/java/CucumberUtilities/global.properties");
        prop.load(fis);

        System.setProperty("webdriver.chrome.driver", "/Users/singh2_rajiv/Automation/Selenium/Drivers/chromedriver");
        driver = new ChromeDriver();
        driver.get(prop.getProperty("url"));
        return driver;
    }
}
