<!doctype html>
<html ng-app = "createArticle">
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script type="text/javascript" src = "./scripts/app.js"></script>
	<script type="text/javascript" src = "./scripts/tinymce/tinymce.min.js"></script>
</head>
<body ng-controller = "MainCtrl">
	<form id = "example" name = "example">
		<button ng-click = "addField()">Add Field</button>

	</form>

</body>
</html>