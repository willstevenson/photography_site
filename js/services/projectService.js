services.factory('ProjectService', ['$q', function($q){
	var self = this;
	this.projects = [
		{
			slug: 'mt-washington',
			name: 'MT. WASHINGTON | NORTH CONWAY, NH',
			description: 'MT. WASHINGTON',
			thumbnail: 'images/mtwashington2.jpg',
			bannerSource: 'images/mtwashington2.jpg',
			tidbit:'I can finally check Tuckerman\'s off of my list.  We had been planning this trip for years, and it took until just last may for us to go for it.  Five of us hiked up to the base of the ravine but only three of us brought our ski gear.  Overall, the intensity of the trek exceeded my expectations.  The hike up the ravine was pretty terrifying.  I will certainly be more prepared next time we make the trip.  My trusty companions were Harrison, Ben, Brendan, & Krystn.',
			date: '05.05.2014',
			location: 'North Conway, NH',
			camera: '5D Mark II / Nikon EM (Portra 160A)',
			assets: [
				{
					imageUrl: 'images/mtwashington2.jpg'
				},
				{
					imageUrl: 'images/first-project/second.jpg'
				}
			]
		},
		{
			slug: 'gloucester',
			name: 'LAST MINUTE SURF TRIP | GLOUCESTER, MA',
			description: 'GLOUCESTER, MA',
			thumbnail: 'images/gloucester.jpg',
			bannerSource: 'images/gloucester.jpg',
			tidbit:'A day or two before I found myself bundled up on the beach I got a call from my buddy Paul that a swell was about to hit Gloucester.  I quickly reached out to my pal Ramon to see if he would be interested in meeting me up with me to photograph some surfing.  It was a cold and windy day, but the three of us certainly made the most of it.  Gloucster is a gem of a place to check out.',
			date: '05.05.2014',
			location: 'Gloucester, MA',
			camera: '5D Mark II / T2i / Canon A-1 / Nikon EM',
			assets: [
				{
					name: '',
					imageUrl: 'images/gloucester.jpg'
				},
				{
					name: '',
					imageUrl: 'images/gloucesterramon.jpg'
				}
			]
		},
		{
			slug: 'ellsworth',
			name: 'GRAHAM LAKE | ELLSWORTH, ME',
			description: 'GRAHAM LAKE',
			thumbnail: 'images/maine.jpg',
			bannerSource: 'images/maine.jpg',
			tidbit:'The week that the seven of us spent at my Grandparents\'s cabin in Ellsworth is one of my fondest trips.  We spent the week eating, fishing, drinking, swimming, paddling, roasting marshmellows, playing too many card games, and adventuring.  We managed to spend a day over at Sand Beach in Acadia National Park.  It rained and a seagull stole Ted\'s peanut butter and jelly sandwich, but we still managed to have a good time.  Nothing like a week on the lake with some of your best buds.  My companions were Ted, Joe, Ben, Isobel, Drusilla, & Christina',
			date: 'June 2013',
			location: 'Ellsworth, ME',
			camera: 'Nikon EM / Mamiya 645',
			assets: [
				{
					name: '',
					imageUrl: 'images/maine.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'revelstoke',
			name: 'GSELKIRK TANGIERS | REVELSTOKE, BC',
			description: 'REVELSTOKE, BC',
			thumbnail: 'images/bc.jpg',
			bannerSource: 'images/bc.jpg',
			tidbit:'Last January my father and I spent 8 days heli-skiing at in the Selkirk Tangier Mountains.  I have never skied so much snow, so consistently, in all of my life.  I also had a chance to meet some amazing people from countries around the world.  It was such an incredible experience and I am super grateful for the opportunity.  I wish I had taken more photos of actual skiing, but I was quite busy.',
			date: 'January 2014',
			location: 'Revelstoke, BC',
			camera: '5D Mark II / Olympus Mju II',
			assets: [
				{
					name: '',
					imageUrl: 'images/bc.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'seattle',
			name: 'PUBLIC MARKET & SPACE NEEDLE | SEATTLE, WA',
			description: 'SEATTLE, WA',
			thumbnail: 'images/publicmarket.jpg',
			bannerSource: 'images/publicmarket.jpg',
			tidbit:'My father and I ended up being stranded in Seattle for a couple of days on the way back from British Columbia.  We ate fried fish, drank beer, explored the public market, took an underground tour, checked out Boeing, and went to the top of the space needle.  It ended up being a positive thing that we were stuck in Seattle, I had a solid time with my pops and got to see an amazing city.',
			date: 'January 2014',
			location: 'Seattle, WA',
			camera: '5D Mark II / Nikon EM',
			assets: [
				{
					name: '',
					imageUrl: 'images/publicmarket.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'camels_hump',
			name: 'CAMEL\'S HUMP | HUNTINGTON, VT',
			description: 'CAMEL\'S HUMP',
			thumbnail: 'images/camelshump.jpg',
			bannerSource: 'images/camelshump.jpg',
			tidbit:'Met some friends at the bottom of Burrow\'s Trail to hike up Camel\'s Hump.  It had been a while since I last climbed that mountain.  The view was even more spectacular that I remembered.  My companions were Karen, Stefan, Tony, and _____.',
			camera: '5D MARK II / Olympus Mju II',
			assets: [
				{
					name: '',
					imageUrl: 'images/camelshump.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'beautiful_people',
			name: 'THE MOST BEAUTIFUL PEOPLE I KNOW',
			description: 'THE MOST BEAUTIFUL PEOPLE I KNOW',
			thumbnail: 'images/beautiful.jpg',
			bannerSource: 'images/beautiful.jpg',
			tidbit:'This is a collection of portraits that I have taken of some of the people in my life.  These people are all amazing  These photos are constant reminders of some of my fondest memories',
			date: 'An ever expanding collection',
			location: 'Everywhere',
			camera: 'Various Cameras',
			assets: [
				{
					name: '',
					imageUrl: 'images/beautiful.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'qcdg',
			name: 'QUEEN CITY DRY GOODS | WINOOSKI, VT',
			description: 'QUEEN CITY DRY GOODS',
			thumbnail: 'images/qcdg.jpg',
			bannerSource: 'images/qcdg.jpg',
			tidbit:'Queen City Dry Goods is owned and opporated by a one man band - Matt Renna.  The company is based out of an incredible studio shared with a screen-printing company, New Duds.  The two business have a really great symboitic relationship going thanks to Matt\'s newest addition to his product list: a made in Vermont t-shirt.  And that are damn comfortable.  Anyway, Matt has helpmed me out quite a bit in my leather and canvas work and is incredibly skilled.  If you have a second, take a chance to check his stuff out.',
			date: 'May 2014',
			location: 'Winooski, VT',
			camera: '5D Mark II',
			assets: [
				{
					name: '',
					imageUrl: 'images/qcdg.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'west_is_best',
			name: 'WEST IS BEST',
			description: 'WEST IS BEST',
			thumbnail: 'images/galin.jpg',
			bannerSource: 'images/galin.jpg',
			tidbit:'Galin had the task of driving a prius out to the opposite side of the country and offered me a seat in his car.  We cruised from Vermont to the Oregon Coast in 10 days and made some note-worthy stops along the way.  It was an awesome adventure. If you ever have an opportunity to go for a trip like that, take it.',
			date: 'June 2014',
			location: 'Vermont to Oregon',
			camera: 'Nikon EM / Canon Elan 7e / Canon 5D Mark II',
			assets: [
				{
					name: '',
					imageUrl: 'images/galin.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'oregon_coast',
			name: 'OREGON COAST | NEWPORT, OR',
			description: 'OREGON COAST',
			thumbnail: 'images/coast.jpg',
			bannerSource: 'images/coast.jpg',
			tidbit:'After driving accross the country we spent a couple of days on the Oregon coast.  It felt really satisfying to touch the pacific ocean after a trip like that.  My buddies Brian & Jarret met up with Galin & I in Newport.  We tented up on a campground the first night, and were nearly sleeping on the beach the second.  I had a blast haging with those guys, it had been far too long since I last saw them.  Looking forward to getting out to that coast again soon (hopefully with a surfboard under my feet).',
			date: 'LOOK IT UP',
			location: 'Newport, OR',
			camera: 'Nikon EM / Canon Elan 7e',
			assets: [
				{
					name: '',
					imageUrl: 'images/coast.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'fly_fishing',
			name: 'FLY FISHING | BEND, OR',
			description: 'FLY FISHING',
			thumbnail: 'images/brianpole.jpg',
			bannerSource: 'images/brianpole.jpg',
			tidbit:'Before heading back to Vermont from my trip west, I was able to stay in Bend for a night.  Bend is an awesome town filled with some of the best beer in the country.  There are also an infinite number of outdoor adventures to partake in.  I had the opportunity to tag along with Sam & Brian on a fly fishing excursion.  Brian actually landed his first fish while fly fishing that day, which was pretty cool to witness.',
			date: 'LOOK IT UP',
			location: 'Bend, OR',
			camera: '5D MARK II / Nikon EM',
			assets: [
				{
					name: '',
					imageUrl: 'images/brianpole.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'phantom_truck',
			name: 'PHANTOM FOOD TRUCK | WAITSFIELD, VT',
			description: 'PHANTOM FOOD TRUCK',
			thumbnail: 'images/truck.jpg',
			bannerSource: 'images/truck.jpg',
			tidbit:'The Phantom Food Truck is run by Matt & Nancy Sargent and serves up some of the best food you can get.  They are based in Warren, VT but the truck moves so they can take it anywhere.  Luckily the fine folks of the Mad River Valley get the truck three days a week.  Matt had been toying with the idea of getting a truck for years and pulled the trigger earlier this year.  The menu is constantly changing, and the food is always incredible.  Luckily they post a calendar of all of the places that you can find their truck.',
			date: '08.18.2014',
			location: 'Waitsfield, VT',
			camera: '5D Mark II / Canon Elan 7e',
			assets: [
				{
					name: '',
					imageUrl: 'images/truck.jpg'
				},
				{
					name: '',
					imageUrl: 'images/second-project/second.jpg'
				}
			]
		},
		{
			slug: 'blueberry_picking',
			name: 'BLUEBERRY PICKING WITH POPS | WAITSFIELD, VT',
			description: 'BLUEBERRY PICKING WITH POPS',
			thumbnail: 'images/blueberries.jpg',
			bannerSource: 'images/blueberries.jpg',
			tidbit:'The Phantom Food Truck is run by Matt & Nancy Sargent and serves up some of the best food you can get.  They are based in Warren, VT but the truck moves so they can take it anywhere.  Luckily the fine folks of the Mad River Valley get the truck three days a week.  Matt had been toying with the idea of getting a truck for years and pulled the trigger earlier this year.  The menu is constantly changing, and the food is always incredible.  Luckily they post a calendar of all of the places that you can find their truck.',
			date: 'August 2014',
			location: 'Waitsfield, VT',
			camera: 'Nikon EM',
			assets: [
				{
					name: '',
					imageUrl: 'images/blueberries.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/1.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/2.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/3.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/4.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/5.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/6.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/7.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/8.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/9.jpg'
				},
				{
					name: '',
					imageUrl: 'images/blueberries/10.jpg'
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