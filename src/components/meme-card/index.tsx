import { Meme } from '@/types/memes';
import { Button, Card, CardBody, CardFooter, Image, Link } from '@heroui/react';
import { AiFillLike } from 'react-icons/ai';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

interface Props {
	meme: Meme;
}

const MemeCard = ({ meme }: Props) => {
	return (
		<Card isFooterBlurred className="py-4 group">
			<CardBody className="overflow-visible py-0 pt-0 pb-5">
				<div className="h-48 w-full overflow-hidden rounded-xl">
					<Image
						alt="Meme image"
						className="object-center object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
						src={meme.image}
						width="100%"
						height="100%"
					/>
				</div>
			</CardBody>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<span className="text-tiny text-white/80">{meme.name}</span>
				<span className="text-tiny text-white/80 flex gap-1 items-center">
					{meme.likes}
					<AiFillLike className="size-2.5" />
				</span>
				<Button
					as={Link}
          target="_blank"
          rel="noopener noreferrer"
					href={meme.image}
					className="text-tiny text-white bg-black/20"
					color="default"
					radius="lg"
					size="sm"
					variant="flat"
					endContent={<FaSquareArrowUpRight className="size-3" />}
				>
					Open
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MemeCard;
