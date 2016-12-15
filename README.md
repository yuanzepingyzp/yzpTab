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
<yzp-tab></yzp-tab>/*自定义指令定义封装Tab组件*/
menu-list/*array 自定义指令接口，定义Tab菜单*/
tabs-list/*array 自定义指令接口，定义视图路径*/
```
