import MemeCard from '@/components/meme-card';
import useMemesStore from '@/store/memes';

const CardsView = () => {
	const { memes } = useMemesStore();

	return (
		<div className="flex flex-col gap-4 mt-10 px-7">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{memes.map((meme) => (
					<MemeCard key={meme.id} meme={meme} />
				))}
			</div>
		</div>
	);
};

export default CardsView;
