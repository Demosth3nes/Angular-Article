<!doctype html>
<html ng-app = "app">
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script src="http://cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
</head>
<body ng-controller = "MainCtrl">
<button data-additem>hi</button>
	<form id = "example">

<!-- 
	<div class = "namer"  first = "Joe" last = "De-Brown"></div>
	<div class = "namer" last = "Spartacus"></div> -->
</form>
</body>

<script>
var app = angular.module('app',[]);

app.controller('MainCtrl',function($scope,$compile){
$scope.count = 1;
$scope.order = [];

// var idNumber = "id" + $scope.count;
$scope.remove = function(){
	
	// CKEDITOR.instances.idNumber.destroy();
	// var element = CKEDITOR.document.getById( idNumber );
	// 					element.remove();



	}
});
	app.directive('additem', function($compile){
    	return{ 
	    	link:function(scope,element,attrs){
	    		
	    		element.bind("click",function(){
	    			scope.idNumber = "id" + scope.count ++;
	    			
	    			angular.element(document.getElementById('example'))
	    				.append($compile('<div id = "'+scope.idNumber+'" name = "'+scope.idNumber+'"  contenteditable = "true" class  = "namer">Hi there</div>')(scope))
	    				.append($compile('<button itemid = "'+scope.idNumber+'" data-removeitem ng-click = "remove()" class = "remove">Remove item</button>')(scope));
	    			
	    				CKEDITOR.inline( scope.idNumber );
	    				
	    		});
	    	}
     	};
    });

    app.directive('removeitem', function($compile){
    	return{
	    	link:function(scope,element,attrs){

	    		element.bind("click",function(){
    			console.log(attrs.itemid);
    			var ck = CKEDITOR.document.getById( attrs.itemid );
				ck.remove();

				element.remove();

    			});
	    	}
     	};
    });
 	
</script>

</html>