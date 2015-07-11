var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
      {
          'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.',
          'age': 1
      },
      {
          'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.',
          'age': 2
      },
      {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.',
          'age': 3
      }
    ];

    $scope.toggle = function (phone) {
        phone.selected = !phone.selected;
    };
});


////test/unit/controllersSpec.js:

//describe('PhoneCat controllers', function() {

//    describe('PhoneListCtrl', function(){
//        var scope, ctrl;

//        beforeEach(module('phonecatApp'));

//        beforeEach(inject(function($controller) {
//            scope = {};
//            ctrl = $controller('PhoneListCtrl', {$scope:scope});
//        }));

//        it('should create "phones" model with 3 phones', function() {
//            expect(scope.phones.length).toBe(3);
//        });


//        it('should set the default value of orderProp model', function() {
//            expect(scope.orderProp).toBe('age');
//        });
//    });
//});

////test/e2e/scenarios.js:

//it('should be possible to control phone order via the drop down select box', function() {

//    var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
//    var query = element(by.model('query'));

//    function getNames() {
//        return phoneNameColumn.map(function(elm) {
//            return elm.getText();
//        });
//    }

//    query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

//    expect(getNames()).toEqual([
//      "Motorola XOOM\u2122 with Wi-Fi",
//      "MOTOROLA XOOM\u2122"
//    ]);

//    element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

//    expect(getNames()).toEqual([
//      "MOTOROLA XOOM\u2122",
//      "Motorola XOOM\u2122 with Wi-Fi"
//    ]);
//});