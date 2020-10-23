Feature: login

  Scenario Outline: login with normal user
    When I visit "login" page => "/login"
    When I fill the "phone" field with <phone>
    When I fill the "password" field with <password>
    When I click button with "登 录"
    Then I see <status>
    Examples:
      | phone         | password   | status       |
      | "18320665011" | "41841800" | "后台管理"   |
      | "18320665011" | "41841801" | "密码错误"   |
      | "18311111111" | "41841801" | "用户不存在" |

