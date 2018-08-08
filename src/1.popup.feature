# Feature: Close Popup and browse NEW
#     As a new visitor
#     I want to shop in UK and close Newsletter popup
#     And i want to visit NEW sub-categories

#     Background: Entering website for the first time

#     Scenario: Entering website for the first time selecting Uk website and closing newsletter
#         Given I open the url https://www.killstar.com/
#         Then I wait for the page to load
#         Then I click UK website button
#         And I expect newsletter popup is shown
#         Then I close the newsletter popup

#     Scenario: Visiting all sub-categories on NEW tab
#         Given I click NEW button
#         And I expect submenu to open
#         Then I click womens clothhing
#         And I expect to go to exact website "https://www.killstar.com/collections/new-womens-clothing"