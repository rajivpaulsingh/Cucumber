$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place the order for vegetables",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for items and validate result",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-validate-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for \"Cucumber\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 161901421,
  "error_message": "java.lang.NullPointerException\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:149)\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:112)\n\tat Cucumber.Automation.Base.getDriver(Base.java:18)\n\tat stepDefinitions.SearchStepDefinition.user_is_on_greencart_landing_page(SearchStepDefinition.java:22)\n\tat ✽.Given User is on Greencart landing page(Search.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 17
    }
  ],
  "location": "SearchStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "SearchStepDefinition.something_results_are_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 183915,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinitions.Hooks.afterSeleniumTest(Hooks.java:31)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetables;search-for-items-and-move-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User search for \"Brinjal\" vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Add items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceed to the checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the selected \"Brinjal\" items are displayed in the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 343585,
  "error_message": "java.lang.NullPointerException\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:149)\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:112)\n\tat Cucumber.Automation.Base.getDriver(Base.java:18)\n\tat stepDefinitions.SearchStepDefinition.user_is_on_greencart_landing_page(SearchStepDefinition.java:22)\n\tat ✽.Given User is on Greencart landing page(Search.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 17
    }
  ],
  "location": "SearchStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepDefinition.add_items_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepDefinition.user_proceed_to_the_checkout_page_for_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 21
    }
  ],
  "location": "SearchStepDefinition.verify_the_selected_something_items_are_displayed_in_the_checkout_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 135513,
  "error_message": "java.lang.NullPointerException\n\tat stepDefinitions.Hooks.afterSeleniumTest(Hooks.java:31)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});