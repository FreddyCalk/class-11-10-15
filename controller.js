angular.module('myApp', []).controller('myController', function($scope, $http){
	
	$scope.addPerson = function(){
		$scope.students.push(
			{
				name: $scope.newName,
			 	desc: $scope.newDesc
			}
		);
		$scope.newName = "";
		$scope.newDesc = "";
	}

	$scope.removeStudent = function(studentToRemove){
		var position = $scope.students.indexOf(studentToRemove);
		$scope.students.splice(position,1);
	}

	$scope.students = [{
		name: 'Freddy',
		desc: 'Made a cool football game'
	},
	{
		name:'Chance',
		desc: 'Bootstrap guy'
	},
	{
		name: 'Will',
		desc: 'The wig guy'
	},
	{
		name: 'Stephen',
		desc: 'Awesome Theme'
	},
	{
		name: 'Griffin',
		desc: 'DOTA2 addict'
	},
	{
		name: 'Oliver',
		desc: 'Eats 8 times/day'
	}];

	// singleVideoURL = 'https://www.googleapis.com/youtube/v3/videos?id='+videoID+';
	// $http.get(singleVideoURL).success(function(data){
	// 	$scope.videos = data.items[0];
	// 	console.log(data.items[0].snippet);
	// })



})