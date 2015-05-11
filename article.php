<!doctype html>
<html ng-app = "app">
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script src="http://cdn.ckeditor.com/4.4.7/standard/ckeditor.js"></script>
</head>
<body ng-controller = "MainCtrl">
<button data-test>hi</button>
	<form id = "example">
<div contenteditable = "true">hi</div>
<!-- 
	<div class = "namer"  first = "Joe" last = "De-Brown"></div>
	<div class = "namer" last = "Spartacus"></div> -->
</form>
</body>

<script>
var app = angular.module('app',[]);

app.controller('MainCtrl',function($scope,$compile){
$scope.count = 0;
$scope.order = [];
});
	// app.directive('namer',function(){
	// 	return{
	// 		scope:true,
	// 		restrict:'C', //Look for an element
	// 		link:function(scope,element,attribute){
	// 			scope.fullName = attribute.first + ' ' + attribute.last
	// 		},
	// 		replace:true,
	// 		template:'<div class = "simple"><h1>Hey there man this a good test</h1></div>' //Can point to a template URL
	// 	}
	// })

	app.directive('test', function($compile){
    	return{ 
	    	link:function(scope,element,attrs){

	    		element.bind("click",function(){

	    			var idNumber = "id" + (scope.count ++);
	    			angular.element(document.getElementById('example'))
	    				.append($compile('<div id = "'+idNumber+'" name = "'+idNumber+'"  contenteditable = "true" class  = "namer">Hi there</div>')(scope));
	    				CKEDITOR.inline( idNumber );
	    		});
	    	}
     	};
    });
 	

</script>

</html>