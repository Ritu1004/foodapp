//
//           var foodieApp = angular.module('foodieApp',['ngRoute']);
//           foodieApp.config(function ($routeProvider) {
//           $routeProvider
//           .when('/',{
//           templateUrl: 'pages/login.html',
//           controller: 'loginController'
//           })
//           .when('/home',{
//           templateUrl: 'pages/home.html',
//           controller: 'mainController'
//           })
//           .when('/restaurant/:id', {
//   		     templateUrl: 'pages/restaurant.html',
//   		     controller: 'restaurantController'
//   	       })
//           })
//
//           //chalo controller banatae ae/////
//            foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
//              $scope.ingredients = [];
//              $scope.probabilityvalue=[];
//           	$scope.restaurantId = $routeParams.id;
//           	var restaurants = [{
//     			name: 'Farzi Cafe',
//     			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
//     			location: 'Connaught Place',
//     			category: 'Casual Dining, Bar',
//     			vote: '4.2',
//     			cuisines: 'Modern Indian',
//     			cost: '2200',
//           id:1,
//     			hours: '12 Noon to 1 AM (Mon-Sun)',
//           bestDish: {
//             // ye dono karna neeche wali mat krna change
//         	name: 'Roast Chicken',
//         	image: 'https://s-media-cache-ak0.pinimg.com/736x/00/b5/fb/00b5fbf419367e2e33203a8d0e1f9513--roast-chicken-recipes-roasted-chicken.jpg'
//           },
//     			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
//     		},
//     		{
//     			name: 'Virgin Courtyard',
//     			address: 'SCO 1A,Madhya Marg,Sector 7C,Chandigarh,160007',
//     			location: 'Sec-7,Chd',
//     			category: 'Casual Dining',
//     			vote: '4.5',
//     			cuisines: 'Italian',
//     			cost: '2200 ',
//           id:2,
//     			hours: '11:30am-11:30pm',
//           bestDish: {
//             // ye dono krna neeche wali mat krna change
//         	name: 'Pizza Margherita',
//         	image: 'http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c'
//           },
//     			image: 'https://s-o.co.in:1304/media/imageSrc/256/high/cherie-qutub'
//     		},
//     		{
//     			name: 'Whistling Duck',
//     			address: 'SCO 10,Back Lane,Sector 26,Chandigarh,160019',
//     			location: 'Sec-26,Chd',
//     			category: 'Casual',
//     			vote: '4.0',
//     			cuisines: 'European,North Indian,Asian',
//     			cost: '1700 ',
//           id:3,
//     			hours: '11:30am-12pm',
//     			image: 'https://img-cdn.eveningflavors.com/EvfImages/Restaurant/Chandigarh/27298/4.jpg'
//     		},
//     		{
//     			name: 'Casa Bella Vista',
//     			address: '10D,533,Udyan Path,Sector 10,Chandigarh,160011',
//     			location: 'Coal Depot,Chandigarh',
//     			category: 'Casual Dining',
//     			vote: '4.3',
//     			cuisines: 'Mediterraean Pizza',
//     			cost: '1400 ',
//           id:4,
//     			hours: '24/7',
//     			image: 'http://im.hunt.in/cg/Manali/City-Guide/casa-bella.jpg'
//     		}]
//         	$scope.restaurant = restaurants[$routeParams.id - 1];
//
//       // Do something
//                 $scope.getIngredients = function(url) {
//         	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
//         	$http({
//         		'method': 'POST',
//         		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
//         		'headers': {
//         			'Authorization': 'Key ffa4afdc1812443b980681003dee2e54',
//         			'Content-Type': 'application/json'
//         		},
//         		'data': data
//       //     }).then(function (response) {
//       //   	var ingredients = response.data.outputs[0].data.concepts;
//       //   	for (var i =0;i < ingredients.length;i++) {
//       //   	$scope.ingredients.push(ingredients[i].name);
//       //     $scope.probabilityvalue.push(ingredients[i].value);
//       //   }
//       // })
//       //   }
//     	// 	// $('.ingredients').html(list);
//     	// 	// console.log(list);
//       //   }, function (xhr) {
//       //   	console.log(xhr);
//       //   }
// }).then(function (response) {
// 				console.log(response);
// 				var ingredients = response.data.outputs[0].data.concepts;
// 	  			for (var i =0;i<ingredients.length;i++) {
// 	  				$scope.ingredients.push(ingredients[i].name);
// 	  				$scope.probabilityvalue.push(ingredients[i].value);
// 	  			}
//
//
// 	        }, function (xhr) {
// 	        	console.log(xhr);
// 	        })
//         $scope.checkVegorNonVeg = function() {
//           checkVegorNonVeg()
//           console.log("diuashkdjha");
//     var flag_quit =0;
//     ing_list = angular.copy($scope.ingredients); //hard copy
//     prob_value= $scope.probabilityvalue;
//     var elements = prob_value.filter(function(a){return a > 0.85;});
//     ing_list.splice(elements.length,20);
//     var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
//     var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
//     var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"
//
//     for(j=0;j<ing_list.length;j++){
//       for(i=0;i<nonveg.length;i++){
//         if(ing_list[j] == nonveg[i]){
//           flag_quit=1;
//           break;
//         }
//       }
//     if(flag_quit==1){
//       $(".rest-extra").append(additionnonveg);
//       break;
//     }
//
//   }
//   if(flag_quit==0){$(".rest-extra").append(additionveg);}
// }
//         })
//
//
//
//           //this is for loginController
//           foodieApp.controller('loginController',function($scope,$location) {
//         	$scope.goToHome = function() {
//         		// console.log('Do Something')
//         		$location.url('home')
//         	}
//         })
//       					//this is for mainController
// 				 foodieApp.controller('mainController',function($scope) {
// 				$scope.restaurants = [{
// 			name: 'Farzi Cafe',
// 			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
// 			location: 'Connaught Place',
// 			category: 'Casual Dining, Bar',
// 			vote: '4.2',
// 			cuisines: 'Modern Indian',
// 			cost: '2200',
//       id:1,
// 			hours: '12 Noon to 1 AM (Mon-Sun)',
//       bestDish: {
//     	name: 'Corn Pizza',
//     	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
//       },
// 			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
// 		},
// 		{
// 			name: 'Virgin Courtyard',
// 			address: 'SCO 1A,Madhya Marg,Sector 7C,Chandigarh,160007',
// 			location: 'Sec-7,Chd',
// 			category: 'Casual Dining',
// 			vote: '4.5',
// 			cuisines: 'Italian',
// 			cost: '2200',
//       id:2,
// 			hours: '11:30am-11:30pm',
//       bestDish: {
//     	name: 'Corn Pizza',
//     	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
//       },
// 			image: 'https://s-o.co.in:1304/media/imageSrc/256/high/cherie-qutub'
// 		},
// 		{
// 			name: 'Whistling Duck',
// 			address: 'SCO 10,Back Lane,Sector 26,Chandigarh,160019',
// 			location: 'Sec-26,Chd',
// 			category: 'Casual',
// 			vote: '4.0',
// 			cuisines: 'European,North Indian,Asian',
// 			cost: '1700 ',
//       id:3,
// 			hours: '11:30am-12pm',
//       bestDish: {
//     	name: 'Corn Pizza',
//     	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
//       },
// 			image: 'https://img-cdn.eveningflavors.com/EvfImages/Restaurant/Chandigarh/27298/4.jpg'
// 		},
// 		{
// 			name: 'Casa Bella Vista',
// 			address: '10D,533,Udyan Path,Sector 10,Chandigarh,160011',
// 			location: 'Coal Depot,Chandigarh',
// 			category: 'Casual Dining',
// 			vote: '4.3',
// 			cuisines: 'Mediterraean Pizza',
// 			cost: '1400 ',
//       id:4,
// 			hours: '24/7',
//       bestDish: {
//     	name: 'Corn Pizza',
//     	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
//       },
// 			image: 'http://im.hunt.in/cg/Manali/City-Guide/casa-bella.jpg'
// 		}]
// 		})
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
});

foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
  			name: 'Farzi Cafe',
  			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  			location: 'Connaught Place',
  			category: 'Casual Dining, Bar',
  			vote: '4.2',
  			cuisines: 'Modern Indian',
  			cost: '2200',
        id:1,
  			hours: '12 Noon to 1 AM (Mon-Sun)',
        bestDish: {
      	name: 'Corn Pizza',
      	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
  			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  		},
  		{
  			name: 'Virgin Courtyard',
  			address: 'SCO 1A,Madhya Marg,Sector 7C,Chandigarh,160007',
  			location: 'Sec-7,Chd',
  			category: 'Casual Dining',
  			vote: '4.5',
  			cuisines: 'Italian',
  			cost: '2200',
        id:2,
  			hours: '11:30am-11:30pm',
        bestDish: {
      	name: 'Corn Pizza',
      	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
  			image: 'https://s-o.co.in:1304/media/imageSrc/256/high/cherie-qutub'
  		},
  		{
  			name: 'Whistling Duck',
  			address: 'SCO 10,Back Lane,Sector 26,Chandigarh,160019',
  			location: 'Sec-26,Chd',
  			category: 'Casual',
  			vote: '4.0',
  			cuisines: 'European,North Indian,Asian',
  			cost: '1700 ',
        id:3,
  			hours: '11:30am-12pm',
        bestDish: {
      	name: 'Corn Pizza',
      	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
  			image: 'https://img-cdn.eveningflavors.com/EvfImages/Restaurant/Chandigarh/27298/4.jpg'
  		},
  		{
  			name: 'Casa Bella Vista',
  			address: '10D,533,Udyan Path,Sector 10,Chandigarh,160011',
  			location: 'Coal Depot,Chandigarh',
  			category: 'Casual Dining',
  			vote: '4.3',
  			cuisines: 'Mediterraean Pizza',
  			cost: '1400 ',
        id:4,
  			hours: '24/7',
        bestDish: {
      	name: 'Corn Pizza',
      	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
  			image: 'http://im.hunt.in/cg/Manali/City-Guide/casa-bella.jpg'
  		}]
})

foodieApp.controller('loginController',function($scope,$location) {

	$scope.goToHome = function() {
		console.log($location.url('home'));
		$location.url('home');
	}

})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	$scope.restaurantId = $routeParams.id;
  var restaurants = [{
    			name: 'Farzi Cafe',
    			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    			location: 'Connaught Place',
    			category: 'Casual Dining, Bar',
    			vote: '4.2',
    			cuisines: 'Modern Indian',
    			cost: '2200',
          id:1,
    			hours: '12 Noon to 1 AM (Mon-Sun)',
          bestDish: {
            // ye dono karna neeche wali mat krna change
        	name: 'Roast Chicken',
        	image: 'https://s-media-cache-ak0.pinimg.com/736x/00/b5/fb/00b5fbf419367e2e33203a8d0e1f9513--roast-chicken-recipes-roasted-chicken.jpg'
          },
    			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    		},
    		{
    			name: 'Virgin Courtyard',
    			address: 'SCO 1A,Madhya Marg,Sector 7C,Chandigarh,160007',
    			location: 'Sec-7,Chd',
    			category: 'Casual Dining',
    			vote: '4.5',
    			cuisines: 'Italian',
    			cost: '2200 ',
          id:2,
    			hours: '11:30am-11:30pm',
          bestDish: {
            // ye dono krna neeche wali mat krna change
        	name: 'Pizza Margherita',
        	image: 'http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c'
          },
    			image: 'https://s-o.co.in:1304/media/imageSrc/256/high/cherie-qutub'
    		},
    		{
    			name: 'Whistling Duck',
    			address: 'SCO 10,Back Lane,Sector 26,Chandigarh,160019',
    			location: 'Sec-26,Chd',
    			category: 'Casual',
    			vote: '4.0',
    			cuisines: 'European,North Indian,Asian',
    			cost: '1700 ',
          id:3,
    			hours: '11:30am-12pm',
    			image: 'https://img-cdn.eveningflavors.com/EvfImages/Restaurant/Chandigarh/27298/4.jpg'
    		},
    		{
    			name: 'Casa Bella Vista',
    			address: '10D,533,Udyan Path,Sector 10,Chandigarh,160011',
    			location: 'Coal Depot,Chandigarh',
    			category: 'Casual Dining',
    			vote: '4.3',
    			cuisines: 'Mediterraean Pizza',
    			cost: '1400 ',
          id:4,
    			hours: '24/7',
    			image: 'http://im.hunt.in/cg/Manali/City-Guide/casa-bella.jpg'
    		}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key b19c326c5f07417ea4aad597ac173c81',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];

		$scope.checkVegorNonVeg = function() {
			var flag_quit =0;
			ing_list = angular.copy($scope.ingredients); //hard copy
			prob_value= $scope.probabilityvalue;
			var elements = prob_value.filter(function(a){return a > 0.85;});
			ing_list.splice(elements.length,20);
			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
			var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
			var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"

			for(j=0;j<ing_list.length;j++){
				for(i=0;i<nonveg.length;i++){
					if(ing_list[j] == nonveg[i]){
						flag_quit=1;
						break;
					}
				}
			if(flag_quit==1){
				$(".rest-extra").append(additionnonveg);
				break;
			}

		}
		if(flag_quit==0){$(".rest-extra").append(additionveg);}
	}

});
