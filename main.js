			
				var foodieApp = angular.module('foodieApp',[]);
				console.log(foodieApp);
				
				
          //chalo controller banatae ae/////
		 // comment to change kr liya hota -_- ye achha laga isliye :p
					
				 foodieApp.controller('mainController',function($scope) {
				$scope.restaurants = [{
			name: 'Farzi Cafe',
			address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
			location: 'Connaught Place',
			category: 'Casual Dining, Bar',
			vote: '4.2',
			cuisines: 'Modern Indian',
			cost: '2200',
			hours: '12 Noon to 1 AM (Mon-Sun)',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		},
		{
			name: 'Virgin Courtyard',
			address: 'SCO 1A,Madhya Marg,Sector 7C,Chandigarh,160007',
			location: 'Sec-7,Chd',
			category: 'Casual Dining',
			vote: '4.5',
			cuisines: 'Italian',
			cost: '2200 for two people',
			hours: '11:30am-11:30pm',
			image: 'https://s-o.co.in:1304/media/imageSrc/256/high/cherie-qutub'
		},
		{
			name: 'Whistling Duck',
			address: 'SCO 10,Back Lane,Sector 26,Chandigarh,160019',
			location: 'Sec-26,Chd',
			category: 'Casual',
			vote: '4.0',
			cuisines: 'European,North Indian,Asian',
			cost: '1700 for two people',
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
			cost: '1400 for two people',
			hours: '24/7',
			image: 'http://im.hunt.in/cg/Manali/City-Guide/casa-bella.jpg'
		}]
		})
		
		