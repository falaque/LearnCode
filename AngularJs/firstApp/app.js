var data = [
	 {
	 "name": "Dodecahedron1",
	 "price": 2,
	 "description": "Really cool gem.",
	 "canPurchase": true,
	 "reviews": [
		 {
			 "stars": 5,
			 "body": "I love this product!",
			 "author": "joe@thomas.com"
		 },
		 {
			 "stars": 1,
			 "body": "This product sucks",
			 "author": "tim@hater.com"
	     }
	  ]
	 },{
	 "name": "Pentagonal Gem",
	 "price": 5.95,
	 "description": "Really cool gem.",
	 "canPurchase": false
	 }
];

(function StoreController(){
	var app = angular.module('store',['product-directive']);
	
	
	
	app.controller('StoreController', ['$http',function($http){
		var store=this;
		store.products = data;
		// $http.get('/firstApp/products.json').then(function(data){
			// //alert('hi');
			// store.products=data;
		// });
		
	}]);
	app.controller('ReviewController',function(){
		this.review={};
		this.addReview=function(product){
			if(!product.reviews)product.reviews=[];
			product.reviews.push(this.review);
			this.review={};
		};
	});
})();
