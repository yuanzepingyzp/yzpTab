# yzpTab
##EXAMPLE
###html code
```html
<!DOCTYPE html>
<html>
	<head>
		<title>yzpTab</title>
		<link rel="stylesheet" type="text/css" href="css/yzpTab.css">
	</head>
	<body ng-app="yzpTab">
		<yzp-tab menu-list=["tab1","tab2","tab3"] tabs-list=["./views/view1/index.html","./views/view2/index.html","./views/view3/index.html"]></yzp-tab>
		<script type="text/javascript" src="js/angular.js"></script>
		<script type="text/javascript" src="js/yzpTab.js"></script>
	</body>
</html>
```
###api
```html
<yzp-tab menu-list=["tab1","tab2","tab3"]/*Array define the tabmenu of the tabs*/
	tabs-list=["./views/view1/index.html","./views/view2/index.html","./views/view3/index.html"]/*Array define the viewlist of the tabs*/
></yzp-tab>
```
