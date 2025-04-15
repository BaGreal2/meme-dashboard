export type NavbarSingleItemType = {
	title: string;
	href: string;
};

export type NavbarNestedItemType = {
	title: string;
	items: NavbarSingleItemType[];
};

export type NavbarItemType = NavbarSingleItemType | NavbarNestedItemType;
