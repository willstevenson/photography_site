services.factory('ProjectService', ['$q', function($q){
	var self = this;
	this.projects = [
		{
			slug: 'mt-washington',
			name: 'MT. WASHINGTON | NORTH CONWAY, NH',
			thumbnail: 'images/mtwashington2.jpg',
			bannerSource: 'images/mtwashington2.jpg',
			assets: [
				{
					imageUrl: 'images/first-project/first.jpg'
				},
				{
					imageUrl: 'images/first-project/second.jpg'
				}
			]
		},
		{
			slug: 'surf-trip',
			name: 'LAST MINUTE SURF TRIP | GLOUCESTER, MA',
			thumbnail: 'images/gloucester.jpg',
			bannerSource: 'images/mtwashing2.jpg',
			assets: [
				{
					name: '',
					imageUrl: 'images/second-project/first.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		}
	]

	this.getProjectBySlug = function(projectSlug){
		var found = null;
		angular.forEach(self.projects, function(item, index){
			if(item.slug == projectSlug){
				found = item;
			}
		});
		return found;
	}

	return {
		projects: self.projects,
		getProjectBySlug: self.getProjectBySlug
	}

}]);