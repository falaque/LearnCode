(function StoreController(){
	var app = angular.module('store',[]);
	
	var gems = [
	{
	 name: "Dodecahedron",
	 price: 2,
	 description: "Really cool gem.",
	 canPurchase: true,
	 reviews: [
		 {
			 stars: 5,
			 body: "I love this product!",
			 author: "joe@thomas.com"
		 },
		 {
			 stars: 1,
			 body: "This product sucks",
			 author: "tim@hater.com"
	 }]
	 },
	 {
	 name: "Pentagonal Gem",
	 price: 5.95,
	 description: "Really cool gem.",
	 canPurchase: false
	 }
	];
	
	app.controller('StoreController', function(){
		this.products = gems;
		
	});
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(tab){
			this.tab = tab;
		};
		this.isSelected = function(selectTab){
			return this.tab === selectTab;
		};
	});
	app.controller('ReviewController',function(){
		this.review={};
		this.addReview=function(product){
			if(!product.reviews)product.reviews=[];
			product.reviews.push(this.review);
			this.review={};
		};
	});
})();
