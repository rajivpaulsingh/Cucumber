package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CheckoutPage {

    public WebDriver driver;

    public CheckoutPage(WebDriver driver) {

        this.driver = driver;
    }

    By cart = By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]");
    By proceed = By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]");
    By product = By.cssSelector("p.product-name");

    public WebElement cart() {
        return driver.findElement(cart);
    }

    public WebElement proceed() {
        return driver.findElement(proceed);
    }

    public WebElement productName() {
        return driver.findElement(product);
    }
}
