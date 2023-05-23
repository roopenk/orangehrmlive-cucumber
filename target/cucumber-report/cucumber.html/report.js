$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify different login functions.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6216726100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1235439900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I should login successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I see Welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeWelcomeMessage()"
});
formatter.result({
  "duration": 1227363200,
  "status": "passed"
});
formatter.after({
  "duration": 870624200,
  "status": "passed"
});
formatter.before({
  "duration": 3487241200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 768689400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should see Logo",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-see-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I see the Orange HRM Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeTheOrangeHRMLogo()"
});
formatter.result({
  "duration": 1348900200,
  "status": "passed"
});
formatter.after({
  "duration": 779071700,
  "status": "passed"
});
formatter.before({
  "duration": 3357755600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 758758400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I should log out successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on user profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I am logged out and see text Login Panel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 1749163600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverAndClickOnLogout()"
});
formatter.result({
  "duration": 1151382000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmLoggedOutAndSeeTextLoginPanel()"
});
formatter.result({
  "duration": 283656700,
  "status": "passed"
});
formatter.after({
  "duration": 722847500,
  "status": "passed"
});
formatter.uri("userstest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify admin can execute different actions on users.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3407461300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 756607400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Admin should be able to add users",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-add-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify message Successfully Saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2241857000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 456669600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 334253400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 290956700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32718505000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 31863109200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 645199100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "duration": 32761820100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 120915100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 130026800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 65260300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageSuccessfullySaved()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.after({
  "duration": 824704500,
  "status": "passed"
});
formatter.before({
  "duration": 3130873600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 770940000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Admin should be able to search the user created and verify it.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-search-the-user-created-and-verify-it.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Select user role",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the user in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2309881900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 499806600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 305753000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1710027600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatus()"
});
formatter.result({
  "duration": 31754007900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 86397800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeTheUserInTheList()"
});
formatter.result({
  "duration": 234621000,
  "status": "passed"
});
formatter.after({
  "duration": 782527700,
  "status": "passed"
});
formatter.before({
  "duration": 3414783600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 776109100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin should be able to delete the user record.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-delete-the-user-record.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select status enable",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I search for user",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select the status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click delete",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click ok on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see message Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2264493900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 512502100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 360243100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 298758200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32720433000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 31879004200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 641490300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusEnable()"
});
formatter.result({
  "duration": 32769944800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 131624200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 126070700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 61948100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 4640639300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1716769400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectTheStatus()"
});
formatter.result({
  "duration": 1738349800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch2()"
});
formatter.result({
  "duration": 77258500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 280149000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickDelete()"
});
formatter.result({
  "duration": 1600537300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOkOnPopUp()"
});
formatter.result({
  "duration": 1631156100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeMessageSuccessfullyDeleted()"
});
formatter.result({
  "duration": 1948360800,
  "status": "passed"
});
formatter.after({
  "duration": 817097300,
  "status": "passed"
});
formatter.before({
  "duration": 3484450100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 760188300,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "I want to search for deleted record to ensure it is not found.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;i-want-to-search-for-deleted-record-to-ensure-it-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I search for user",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select its status",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click search",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I see message No Record Found",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2544514700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 347441200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 301888000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1712765700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectItsStatus()"
});
formatter.result({
  "duration": 31727988700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickSearch()"
});
formatter.result({
  "duration": 80044100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSeeMessageNoRecordFound()"
});
formatter.result({
  "duration": 233658700,
  "status": "passed"
});
formatter.after({
  "duration": 833145500,
  "status": "passed"
});
});