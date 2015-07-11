var phonecatApp = angular.module('phonecatApp', []);

//Approch 1
phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('../app/phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});

//Approch 2
//phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
//  function ($scope, $http) {
//      $http.get('../app/phones/phones.json').success(function (data) {
//          $scope.phones = data;
//      });

//      $scope.orderProp = 'age';
//  }]);

////test/unit/controllersSpec.js:
//describe('PhoneCat controllers', function() {

//    describe('PhoneListCtrl', function(){
//        var scope, ctrl, $httpBackend;

//        // Load our app module definition before each test.
//        beforeEach(module('phonecatApp'));

//        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
//        // This allows us to inject a service but then attach it to a variable
//        // with the same name as the service in order to avoid a name conflict.
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json').
//                respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneListCtrl', {$scope: scope});
//        }));