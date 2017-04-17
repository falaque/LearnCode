(function(){
	var app = angular.module('product-directive',[]);
	app.directive('productName', function(){
		return {
			restrict:'A',
			templateUrl:'firstApp/product_name.html'
		};
	});
	
	app.directive('productPanels', function(){
		return {
			restrict:'E',
			templateUrl:'firstApp/product-panels.html',
			controller:function(){
				this.tab = 1;
				this.selectTab = function(tab){
					this.tab = tab;
				};
				this.isSelected = function(selectTab){
					return this.tab === selectTab;
				};
			},
			controllerAs:'panel1',
		}
	});
})();