var app = angular.module('pulse-web', []);

app.controller('controller', function($scope) {
	// change to encompass all $scope variables, get them from database
	// $http.get('/data/').then(function(res) {
	// 	console.log(res.data);
	// 	$scope.name = res.data.name;
	// 	$scope.contact = {
	// 		email: res.data.email,
	// 		phone: res.data.phone,
	// 		linked: 'https://www.linkedin.com/in/' + res.data.name.split(' ').join('').toLowerCase() + '/'
	// 	};
	// 	$scope.profile = res.data.image;
	// });
	$scope.links = [
		[ 'Home', 'index.html' ],
		[ 'Products', 'products.html' ],
		[ 'Contact', '#contact' ],
		[ 'FAQ', 'faq.html' ],
		[ 'Log In', 'login.html' ],
		[ 'Sign Up', 'signup.html' ]
	];
	$scope.admin = [ [ 'Index', 'index' ], [ 'Products', 'products' ], [ 'FAQ', 'faq' ] ];
	$scope.company = {
		name: 'Pulse Active',
		motto: "Don't hesitate, activate",
		owner: "Munene M'mbijjewe",
		contact: {
			email: 'pulseactive1@gmail.com',
			social: { instagram: { handle: 'pulse_active_ke', link: 'www.instagram.com' } }
		},
		description: [
			'What is Pulse Active?',
			'A pulse represents life, it’s what allows us to embrace our surroundings and experience all the amazing wonders life has to offer. Having a pulse means you exist, it means your heart is beating, blood is flowing through your body and air is entering and exiting your lungs, you are alive! Each one of us has a limited amount of time on this earth, so let’s not live a sedentary lifestyle doing things that aren’t going to benefit us physically, mentally, emotionally, or spiritually. Let’s all step out of our comfort zones and take risks to achieve our goals, be proactive and not stagnant, be fruitful and not futile, be in a state of constant progress or motion, and lastly, always be active.'
		],
		about: [
			'Pulse Active is a multipurpose activewear brand that provides fitness and sports apparel & accessories. It is our aim to provide our customers with the most comfortable and durable products that can used to sustain the demands from, a variety of physical activities. We seek to administer products of great standard that are within a cost-effective price range.',
			'People are different, and different means that we have varying physical passions and interests. Here at Pulse Active, we understand the difference, and we advocate for fully pursuing your passions/interests whatever they may be. Our role is to support you, by equipping you with the right clothing to allow you to perform to the best of your ability and fully focus on what’s ahead.',
			'Don’t hesitate & activate today! Constantly strive to be the best version of yourself by having a proactive approach to life, exercise, and health.',
			'At the end of the day, despite our different passions and interests, we all have one thing in common. We are one, united through our synergy for actively pursuing our goals and ambitions.'
		]
	};
	$scope.faq = {
		Warranty: [
			[ 'All our products have a 40-day warranty period that starts as soon as you have received your product.' ],
			[ 'Anything that surpasses the 40-day period will not be permitted for replacement or reimbursement.' ]
		],
		Refund: [
			[
				'We shall accept any item that is returned for a refund/exchange if it is sent back within a 40-day duration from when you received the product.',
				'After 40 days, we will unfortunately not be accepting any products for refunds/exchanges.'
			],
			[
				'Kindly note that your return must be sent back to us within a 40-day period. However, we do not need to receive the product within the 40-day duration.'
			],
			[
				'If you opted for an exchange, we shall see it through if the corresponding item is in stock. Once your exchange has been processed you will receive a confirmation email containing information about the item as well as the shipping details regarding your order.'
			],
			[
				'If the item you wanted to exchange is out of stock we shall issue you a refund.',
				'Please note, items that are not eligible for an exchange, shall not be shipped back to the customer.'
			],
			[
				'The method of refunding shall be the same as the method of payment used when purchasing the product of our store.'
			],
			[
				'An acceptable exchange is one that can be made for the same product in a different colour way or size. Or, a similar product on our store of an equal or lesser price point than the original product.'
			],
			[
				'Kindly note that exchanges cannot be made for different items or items of a higher price point than the original product.',
				'Example: A t-shirt can only be exchanged for another t-shirt of the same model, or different model if this price is lower than the original product.'
			]
		],
		Shipping: [
			[ 'You are responsible for covering the shipping costs associated with returning the desired product.' ],
			[ 'Original shipping costs are not refunded for returned items.' ],
			[
				'If you are exchanging a defective product for another one, we shall cover the shipping costs associated with your new exchanged item.'
			]
		],
		Defects: [
			[
				'If you believe that you have received a defective item, please contact us as directed below and attach a photo of the product. We shall inspect the product and get back to you promptly.'
			],
			[
				'We are very sorry to hear this as your satisfaction is at the forefront of our mission. We shall ensure that you receive the high-quality product(s) we promised you.'
			],
			[ '(See shipping section for information regarding shipping)' ]
		]
	};
	$scope.products = {
		Shirts: {
			shirt1: {
				_id: '1',
				sizes: [ 'S', 'L', 'XL' ],
				colours: [ 'Black', 'White' ],
				type: 't-shirt',
				name: 'Pulse Gym T-shirt',
				price: '29.99',
				description: 'A plain and robust Pulse Active t-shirt built for wicking sweat.',
				images: [ 'images/products/pulse-shirt-front.jpg' ]
			}
		},
		Shorts: {
			short1: {
				_id: '2',
				sizes: [ 'S', 'L', 'XL' ],
				colours: [ 'Black', 'White' ],
				type: 'Gym',
				name: 'Pulse Gym Shorts',
				price: '29.99',
				description: 'Some pulse styled gym shorts, to go with your pulse shirt.',
				images: [ 'images/products/placeholder.jpg' ]
			}
		}
	};
	$scope.defaults = {
		size: 'L',
		colour: 'Black'
	};
});

function edit() {
	window.location.href = document.querySelector('#pageSelect').value + '-admin.html';
}
function addToCart() {
	alert('Not yet implemented');
}
function saveChanges(page) {
	switch (page) {
		case 'products':
			var json = {};
			console.log($('#productsform').children());
			break;
		default:
			alert('Not yet implemented');
			break;
	}
}
function deleteEntry() {
	// alert('Not yet implemented');
	$(this).parent().first().remove();
}
function addEntry() {
	alert('Not yet implemented');
}

(function($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 70
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 100
	});

	// Collapse Navbar
	var navbarCollapse = function() {
		if ($('#mainNav').offset().top > 100) {
			$('#mainNav').addClass('navbar-shrink');
		} else {
			$('#mainNav').removeClass('navbar-shrink');
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
