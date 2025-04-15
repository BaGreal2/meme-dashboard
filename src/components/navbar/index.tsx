import {
	Button,
	cn,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	NavbarBrand,
	Navbar as NavbarComponent,
	NavbarContent,
	NavbarItem
} from '@heroui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { navbarItems } from './data';
import isSingleItem from './helpers/is-single-item';

const Navbar = () => {
	const location = useLocation();

	return (
		<NavbarComponent>
			<NavbarBrand>
				<Link className="font-bold text-inherit text-xl" href="/home">
					Meme Dashboard
				</Link>
			</NavbarBrand>
			<NavbarContent className="!grow-0">
				{navbarItems.map((item) =>
					!isSingleItem(item) ? (
						<Dropdown key={item.title}>
							<NavbarItem>
								<DropdownTrigger>
									<Button
										disableRipple
										className={cn(
											'p-0 bg-transparent data-[hover=true]:bg-transparent text-medium',
											item.items.some(
												(subItem) => location.pathname === subItem.href
											) && 'text-primary'
										)}
										endContent={<FaChevronDown className="size-4" />}
										radius="sm"
										variant="light"
									>
										Memes
									</Button>
								</DropdownTrigger>
							</NavbarItem>
							<DropdownMenu
								itemClasses={{
									base: 'gap-4'
								}}
							>
								{item.items.map((subItem) => (
									<DropdownItem key={subItem.title}>
										<Link
											key={subItem.title}
											href={subItem.href}
											color={
												location.pathname === subItem.href
													? 'primary'
													: 'foreground'
											}
											className="size-full"
										>
											{subItem.title}
										</Link>
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					) : (
						<NavbarItem
							key={item.title}
							isActive={location.pathname === item.href}
						>
							<Link
								href={item.href}
								color={
									location.pathname === item.href ? 'primary' : 'foreground'
								}
							>
								{item.title}
							</Link>
						</NavbarItem>
					)
				)}
			</NavbarContent>
		</NavbarComponent>
	);
};

export default Navbar;
