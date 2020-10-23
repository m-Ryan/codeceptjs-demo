Feature: create article

    Scenario: create article with normal user
        Given I logged into a normal user account
        When I visit "admin" page => "/admin"
        Then I see "文章管理"
        When I click "文章管理"
        Then I am in "/admin/article-manager"
        When I click "写文章"
        Then I see "编辑"
        When I fill the "标题" field with "测试标题"
        When I fill the "不超过150字" field with "测试摘要"