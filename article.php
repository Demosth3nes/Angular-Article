<!doctype html>
<html ng-app = "app">
<head>
	<title></title>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script src="http://cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>

</head>
<body ng-controller = "MainCtrl">
<button data-add-textbox>Add Item</button>
	<form id = "example">

</form>
</body>

<script>
var testOrder = ['hi','there'];
var latestId = 5 + 1;
var app = angular.module('app',[]);

app.controller('MainCtrl',function($scope,$compile){
$scope.count = latestId;
$scope.order = testOrder;

// var idNumber = "id" + $scope.count;

});
	app.directive('addTextbox', function($compile){
    	return{ 
	    	link:function(scope,element,attrs){
	    		
	    		element.bind("click",function(){
	    			scope.idNumber = "id" + scope.count ++;
	    			scope.order.push(scope.idNumber);
	    				
	    			angular.element(document.getElementById('example'))
	    				.append($compile('<div id = "'+scope.idNumber+'" name = "'+scope.idNumber+'"  contenteditable = "true">Hi there</div>')(scope))
	    				.append($compile('<button itemid = "'+scope.idNumber+'" data-removeitem " class = "remove">Remove item</button>')(scope));
	    			
	    				CKEDITOR.inline( scope.idNumber );
	    				
	    		});
	    	}
     	};
    });

    app.directive('removeitem', function($compile){
    	return{
	    	link:function(scope,element,attrs){

	    		element.bind("click",function(){
    			var index  = scope.order.indexOf(attrs.itemid);
    			scope.order.splice(index,1);
	    		console.log(scope.order);

    			var ck = CKEDITOR.document.getById( attrs.itemid );
				ck.remove();
				element.remove();

    			});
	    	}
     	};
    });
 	
</script>

</html>