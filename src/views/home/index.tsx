import { Button, Link } from '@heroui/react';
import { FaListUl, FaTable } from 'react-icons/fa';

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row md:px-5 xl:px-0 px-9 justify-center h-full items-center p-2 gap-14">
			<h1 className="text-4xl font-bold">
				Welcome <br />
				to the <span className="text-primary">Meme Dashboard!</span>
			</h1>
			<div className="flex items-center gap-4 flex-col md:flex-row mt-2">
				<Button
					as={Link}
					href="/memes/cards"
					className="size-56 lg:size-64 bg-yellow-400/60"
				>
					<div className="flex flex-col gap-2 items-center">
						<FaListUl className="size-16 lg:size-20 text-yellow-200" />
						<span className="font-bold text-lg text-yellow-100">
							View memes in card view
						</span>
					</div>
				</Button>
				<Button
					as={Link}
					href="/memes/table"
					className="size-56 lg:size-64 bg-blue-400/60"
				>
					<div className="flex flex-col gap-2 items-center">
						<FaTable className="size-16 lg:size-20 text-blue-200" />
						<span className="font-bold text-lg text-blue-100">
							View memes in table view
						</span>
					</div>
				</Button>
			</div>
		</div>
	);
};

export default Home;
