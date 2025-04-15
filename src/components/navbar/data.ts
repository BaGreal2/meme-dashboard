import { NavbarItemType } from './types';

export const navbarItems: NavbarItemType[] = [
	{
		title: 'Home',
		href: '/home'
	},
	{
		title: 'Memes',
		items: [
			{
				title: 'Table View',
				href: '/memes/table'
			},
			{
				title: 'Card View',
				href: '/memes/cards'
			}
		]
	}
];
