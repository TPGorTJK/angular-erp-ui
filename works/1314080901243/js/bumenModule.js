// create a new module called 'bumenModule' and save 
// a reference to it in a variable called myAppModule 
var bumenModule = angular.module('bumenModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller

    bumenModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/about', {
                  templateUrl: 'pages/about.html',
                  //controller: 'myWebsiteController'
               }).
         when('/content', {
                  templateUrl: 'pages/content.html',
                  //controller: 'myWebsiteController'
               }).
               when('/home', {
                  templateUrl: 'pages/home.html',
                  //controller: 'aboutMeController'
               }).
               when('/input', {
                  templateUrl: 'pages/input.html',
                  //controller: 'aboutMeController'
               }).
               otherwise({
                  redirectTo: '/about'
               });
         }]);


bumenModule.factory('bumenService',function($http){
 
       var dataStroe = {};

       dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
 
           return promise;
  
      }
 
       return dataStroe;

}).controller('MyFilter', function ($scope,bumenService) {
    // controller code would go here
        var bumenData = {
            bumenName:'id',
            bumenDaima:'code',
            bumenZhuguan:'inter',
            bumenMiaoshu:'inter'
        };
        $scope.data = bumenData;

$scope.isHidden = true;

        $scope.showInput = function () {

            $scope.isHidden = !$scope.isHidden;

        }

        $scope.bumen = {};

        $scope.register = function () {

            var promise = bumenService.doRegistration($scope.bumen);

            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;

                $scope.isHidden = !$scope.isHidden;

                if(!$scope.isHidden){

                    alert($scope.backMess[0].message + "\n" + "\n" + "Your bumenName is " + $scope.bumen.Name);

                }

            });

            promise.error(function (data, status, headers, config, statusText) {

                $scope.backMess = data.error;

                $scope.isHidden = !$scope.isHidden;

                if(!$scope.isHidden){

                    alert($scope.backMess[0].message);

                }

            });

        }

    });

// use the myAppModule variable to
// configure the module with a filter
bumenModule.filter('stripDashes',function() {
    return function(txt) {
        // filter code would go here
  }; });