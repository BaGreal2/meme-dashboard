import { NavbarItemType, NavbarSingleItemType } from '../types';

const isSingleItem = (item: NavbarItemType): item is NavbarSingleItemType => {
	return 'href' in item;
};

export default isSingleItem;
