/**
 * Created by Orlando on 7/8/2014.
 */


angular.module('MainCtrl', ['ngCookies'])
    .controller('MainController',['$scope', 'mmu', '$http', '$cookies', '$timeout',function($scope, mmu, $http, $cookies, $timeout){
    $scope._id = null;
    $scope._pwd = null;
    $scope.thatSubmit = null;

    $scope.submitUserDetails = function(){
        if($scope._id && $scope._pwd)
        {
            var id = this._id;
            var pwd = this._pwd;
            console.log(id);
            /*var loginResult = mmu.vLogin({id : this._id, pwd :this._pwd });
            loginResult.$promise.then(function(result, status, headers, config, statusText){
                console.log(JSON.stringify(result));
            }
            ,function(error)
                {
                    console.log('error is ' + error)
                });*/

            $http({method: 'POST', url: 'https://icems.mmu.edu.my/sic/vlogin.jsp', params: {id : this._id, pwd : this._pwd}, withCredentials : true}).
                success(function(data, status, headers, config) {
                    //console.log(headers());
                    $http({method: 'GET', url: 'https://icems.mmu.edu.my/sic/courses/crdetails_02.jsp'}).
                        success(function(data, status){
                            console.log(data);

                            var tableToJson = require('tabletojson');
                            var tables = tableToJson.convert(data);
                            console.log(tables);
                            //var firstTableAsJson = tablesAsJson[0];
                            //var secondTableAsJson = tablesAsJson[1];
                        }).
                        error(function(data, status){
                            console.log(data || "Timetable request Failed")
                        });
                }).
                error(function(data, status) {
                     console.log(data || "Request failed");
                });


        }
    }
}]);