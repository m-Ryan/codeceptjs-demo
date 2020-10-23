Feature: login

  Scenario Outline: login with normal user
    Given I have an account
    When I visit login page
    Then I try to login with <phone> and <password>
    Then I logined <status>
    Examples:
      | phone         | password   | status           |
      | "18320665011" | "41841800" | "success"        |
      | "18320665011" | "41841801" | "password error" |
      | "18311111111" | "41841801" | "not exist"      |

