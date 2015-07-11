var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
      {
          'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.'
      },
      {
          'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.'
      },
      {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'
      }
      ,
      {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'
      }
    ];
});

////test/e2e/scenarios.js:
//describe('PhoneCat App', function () {

//    describe('Phone list view', function () {

//        beforeEach(function () {
//            browser.get('app/index.html');
//        });


//        it('should filter the phone list as a user types into the search box', function () {

//            var phoneList = element.all(by.repeater('phone in phones'));
//            var query = element(by.model('query'));

//            expect(phoneList.count()).toBe(3);

//            query.sendKeys('nexus');
//            expect(phoneList.count()).toBe(1);

//            query.clear();
//            query.sendKeys('motorola');
//            expect(phoneList.count()).toBe(2);
//        });
//    });
//});