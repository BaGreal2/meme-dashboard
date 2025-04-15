import { Meme } from '@/types/memes';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { MemesState } from './state';

const defaultMemes: Meme[] = [
	{
		id: 1,
		name: 'Зла Рибка',
		image:
			'https://i2.photo.2gis.com/images/profile/30258560130158526_086b_1920x.jpg',
		likes: Math.floor(Math.random() * 1000)
	},
	{
		id: 2,
		name: 'Хочу дерунів',
		image: 'https://pbs.twimg.com/media/GFLLcmTW8AAGvrp?format=jpg&name=large',
		likes: Math.floor(Math.random() * 1000)
	},
	{
		id: 3,
		name: 'Pizza Cztery Sery',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeWv-r6LaiOEYij-oCCeQf5OT69BCDRgDfg&s',
		likes: Math.floor(Math.random() * 1000)
	},
	{
		id: 4,
		name: 'Walking Man',
		image:
			'https://as1.ftcdn.net/v2/jpg/05/43/22/26/1000_F_543222681_BgKcDy2U5eD4ldTgx7r3OODRamPdsrb2.jpg',
		likes: Math.floor(Math.random() * 1000)
	},
  {
    id: 5,
    name: 'Black Overlord',
    image: 'https://i.ytimg.com/vi/0-dq0R5sr34/mqdefault.jpg',
    likes: Math.floor(Math.random() * 1000)
  },
  {
    id: 6,
    name: 'Heavy Cat',
    image: 'https://i.pinimg.com/736x/40/10/eb/4010eb55bd1c49fe1a6324268b26e63c.jpg',
    likes: Math.floor(Math.random() * 1000)
  },
  {
    id: 7,
    name: 'Dangerous Cat',
    image: 'https://i.pinimg.com/736x/88/f1/c0/88f1c0f1621bff4075d3b153209a6314.jpg',
    likes: Math.floor(Math.random() * 1000)
  },
  {
    id: 8,
    name: 'Curious Cat',
    image: 'https://i.pinimg.com/736x/6f/8e/f4/6f8ef4a605a3b48822ec8c777006ba78.jpg',
    likes: Math.floor(Math.random() * 1000)
  },
  {
    id: 9,
    name: 'Skilled Gamer',
    image: 'https://i.pinimg.com/736x/b8/ca/b2/b8cab2c17bf8758e6deef316d510c504.jpg',
    likes: Math.floor(Math.random() * 1000)
  },
  {
    id: 10,
    name: 'Sensei Cat',
    image: 'https://i.pinimg.com/736x/30/28/69/302869b59c5576e3296879e774e562f7.jpg',
    likes: Math.floor(Math.random() * 1000)
  }
];

const useMemesStore = create<MemesState>()(
	persist(
		(set) => ({
			memes: defaultMemes,
			setMemeById: (id, meme) =>
				set((state) => {
					const memes = [...state.memes];
					const index = memes.findIndex((meme) => meme.id === id);
					if (index !== -1) {
						memes[index] = meme;
					} else {
						memes.push(meme);
					}
					return { memes };
				})
		}),
		{
			name: 'memes-storage',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
);

export default useMemesStore;
