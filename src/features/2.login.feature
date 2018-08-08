Feature: Test loading feature
    As a returning user
    I want to log-in on the website
    And after I am done browsing I want to log-out

    Scenario: Enter website and click on login button
            Given I open the url https://www.killstar.com/
            Then I wait for the page to load
            Then I click UK website button
            And I expect newsletter popup is shown
            Then I close the newsletter popup
            Then I click on account button
            And I am shown a login option
            Then I click on login
            Then I enter my email
            And enter my password
            And I click sign in button
            Then I click on account button again
            Then I click logout