angular.module('OpenMining', [])
.value('API_URL', '/process.json?')

.controller('Process',
  function($scope, $http, $location, API_URL) {
    for (var key in $location.search()){
      API_URL += key + "=" + $location.search()[key] + "&";
    }
    $scope.loading = true;
    $http({method: 'POST', url: API_URL}).
      success(function(data, status, headers, config) {
        $scope.process = data.json;
        $scope.columns = data.columns;
        $scope.loading = false;
      });
});
