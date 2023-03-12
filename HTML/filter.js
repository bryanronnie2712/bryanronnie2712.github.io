// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Grand Theft Auto Vice City',
			image: './images/gta6'
		},
    {
			url: '',
			title: 'Grand Theft Auto San Andreas',
			image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/178d09c8-fd53-4dab-88d1-682e2a8c2610/d8cxvx5-b06de9dd-9bb3-4cda-8d5b-257ddae81917.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTc4ZDA5YzgtZmQ1My00ZGFiLTg4ZDEtNjgyZTJhOGMyNjEwXC9kOGN4dng1LWIwNmRlOWRkLTliYjMtNGNkYS04ZDViLTI1N2RkYWU4MTkxNy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Xf4smOqSENPwMPcVRT-ww59amibz9Lf32XKNRWwrO7w'
		},
    {
			url: '',
			title: 'Grand Theft Auto 4',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUodYQEAYMyhZ06iiO0Pb-MOlQwA3qNm3Ogw&usqp=CAU'
		},
    {
			url: '',
			title: 'Grand Theft Auto 5',
			image: 'https://img.bbystatic.com/BestBuy_US/store/ee/2017/vg/pr/sol-10829-grand-theft-auto5/sol-10829-grand-theft-auto-5.jpg'
		},






		{
			url: '',
			title: 'Mafia 2',
			image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d1fe92c2-5ebb-49c8-91a5-7f41deaf0adf/d2xcl76-14eced8a-ddf2-4238-bfb6-908bf2ae76a8.png'
		},
    {
			url: '',
			title: 'Mafia 3',
			image: 'https://besthqwallpapers.com/Uploads/5-9-2016/8245/thumb2-mafia-iii-2016-poster-action-simulator.jpg'
		},


		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'Farcry 5',
			image: 'https://pcgameslab.net/wp-content/uploads/2018/04/Far-Cry-5-PC-Game-Free-Download-5.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Rise of Nations',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
		},
    {
			url: 'http://www.tutorialspoint.com/css/',
			title: 'Rise of Nations Legends',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Age of Empires 3',
			image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Player Unknown BattleGrounds',
			image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'Call Of Duty',
			image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
		}
	];


}
