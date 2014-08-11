/**
 * Created by Orlando on 8/8/2014.
 */
angular.module('MMUService', ['ngResource'])
    .config(['$resourceProvider', function($resourceProvider){
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.default.stripTrailingSlashes = false;
    }])
    .factory('mmu', ['$resource',
        function($resource){
            return $resource('https://icems.mmu.edu.my/sic/vlogin.jsp', {id : '@id', pwd : '@pwd'}, {
                vLogin: {method:'POST', params:{}, isArray:false}
            });
        }]);