import { Meme } from '@/types/memes';

export interface MemesState {
	memes: Meme[];
  setMemeById: (id: number, meme: Meme) => void;
}
