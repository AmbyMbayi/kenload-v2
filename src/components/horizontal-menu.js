export const menuItems = [
	{
		id: 1,
		label: 'menuitems.dashboard.text',
		icon: 'uil-home-alt',
		link: '/'
	},
	{
		id: 11,
		label: 'menuitems.userslist.text',
		icon: 'uil-users-alt',
		link: '/users-list'
	},
	{
		id: 111,
		label: 'menuitems.specialrelease.text',
		icon: 'uil-taxi',
		link: '/special-release'
	},

	{
		id: 2,
		label: 'menuitems.uielements.text',
		icon: 'uil-flask',
		subItems: [
			{
				id: 3,
				label: 'menuitems.uielements.list.alerts',
				link: '/ui/alerts'
			},

			{
				id: 8,
				label: 'menuitems.uielements.list.grid',
				link: '/ui/grid'
			},

			{
				id: 18,
				label: 'menuitems.uielements.list.video',
				link: '/ui/video'
			}
		]
	}
];
