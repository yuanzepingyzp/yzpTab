var yzpTab=angular.module("yzpTab",[]);
yzpTab.directive("yzpTab",function(){
	return {
		scope:{
			menuList:'=',
			tabsList:'='
		},
		restrict:'E',
		template:'<menu></menu><tabs></tabs>'
	}
});
yzpTab.directive("menu",function(){
	return {
		restrict:'E',
		replace:'true',
		template:'<ul><li ng-repeat="item in menuList" ng-click=changeTab(item)>{{item}}</li></ul>',
		link:function(scope){
			scope.changeTab=function(item){
				scope.whichShow=scope.tabsList[scope.menuList.indexOf(item)];
			}
		}
	}
});
yzpTab.directive("tabs",function(){
	return{
		restrict:'E',
		replace:'true',
		template:'<iframe ng-src="{{whichShow}}"></iframe>',
		link:function(scope){
			scope.whichShow=scope.tabsList[0];
		}
	}
})
