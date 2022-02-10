var myapp=angular.module("myapp", []);
myapp.controller("myctrl", function($scope, $http)
{
    $http.get('employee.json')
    .success(function(response)
    {
        $scope.names=response.records;
    });
});

myapp.filter("Genderr", function(){
    return function (gender){
        switch(gender){
            case 1:
                return "Male";
            case 2:
                return "Female";
        }
    }
});

myapp.filter("Typee", function(){
    return function(item)
    {
        return item + " type";
    }
});

