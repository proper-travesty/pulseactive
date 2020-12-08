var app = angular.module('pulse-web', []);

app.controller('controller', function($scope, $http) {
	$scope.links = [
		[ 'Home', 'index.html' ],
		[ 'Products', 'products.html' ],
		[ 'Contact', 'index.html#contact' ],
		[ 'FAQ', 'faq.html' ],
		[ 'Log In', 'login.html' ],
		[ 'Sign Up', 'register.html' ],
		[ 'Admin', 'admin.html' ]
	];
	$scope.admin = [ [ 'Index', 'index' ], [ 'Products', 'products' ], [ 'FAQ', 'faq' ] ];
	$scope.defaults = {
		size: 'L',
		sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
		colour: 'White',
		colours: [ 'Black', 'White' ]
	};
	$http.get('/index-data/').then(function(res) {
		// console.log(res.data);
		$scope.index = res.data;
	});
	$http.get('/faq-data/').then(function(res) {
		// console.log(res.data);
		$scope.faq = res.data;
	});
	$http.get('/products-data/').then(function(res) {
		// console.log(res.data);
		$scope.products = res.data;
	});
});

function edit() {
	window.location.href = document.querySelector('#pageSelect').value + '-admin.html';
}
function addToCart() {
	alert('Not yet implemented');
}
function deleteEntry() {
	// alert('Not yet implemented');
	console.log($(this));
	$(this).parent().first().remove();
}
function addEntry() {
	e.preventDefault();
	alert('Not yet implemented');
}
