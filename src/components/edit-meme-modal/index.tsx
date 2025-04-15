import useMemesStore from '@/store/memes';
import { Meme } from '@/types/memes';
import {
	Button,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@heroui/react';
import { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

const checkValidUrl = (url: string | undefined) => {
	if (!url) return false;

 try {
    const newUrl = new URL(url);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    console.error('Invalid URL:', err);
    return false;
  }
};

const checkValidId = (
	id: number | undefined,
	memes: Meme[],
	ownId: number | undefined
) => {
	if (!id) return false;

	const pattern = new RegExp('^[0-9]+$');

	return (
		pattern.test(id.toString()) &&
		!memes.some((meme) => meme.id === id && meme.id !== ownId)
	);
};

interface Props {
	meme: Meme | null;
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

const EditMemeModal = ({ meme, isOpen, onOpenChange }: Props) => {
	const { memes, setMemeById } = useMemesStore();
	const [memeId, setMemeId] = useState(meme?.id);
	const [memeName, setMemeName] = useState(meme?.name);
	const [imageUrl, setImageUrl] = useState(meme?.image);

	useEffect(() => {
		if (meme) {
			setMemeId(meme.id);
			setMemeName(meme.name);
			setImageUrl(meme.image);
		}
	}, [meme]);

	const handleMemeUpdate = () => {
		if (!meme || !memeId || !memeName || !imageUrl) return;

		setMemeById(meme?.id, {
			id: memeId,
			name: memeName,
			image: imageUrl,
			likes: meme.likes
		});

		onOpenChange(false);
	};

	if (!meme) {
		return null;
	}

	return (
		<Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
						<ModalBody>
							<div className="flex gap-4">
								<div className="relative h-56 basis-1/2 overflow-hidden flex justify-center items-center rounded-lg">
									<Image
										className="object-center object-cover blur-xl saturate-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-full"
										src={meme.image}
										width="100%"
										height="100%"
										removeWrapper
									/>
									<Image
										alt="Meme image"
										className="relative object-center object-cover rounded-none"
										src={meme.image}
										width="auto"
										height="100%"
										removeWrapper
									/>
								</div>
								<div className="flex flex-col gap-1 basis-1/2">
									<Input
										label="Meme ID"
										value={memeId?.toString()}
										isInvalid={!checkValidId(memeId, memes, meme?.id)}
										errorMessage="Please enter a valid meme id"
										onChange={(e) => setMemeId(Number(e.target.value))}
									/>
									<Input
										label="Name"
										value={memeName}
										onChange={(e) => setMemeName(e.target.value)}
									/>
									<Input
										label="Image URL"
										value={imageUrl}
										isInvalid={!checkValidUrl(imageUrl)}
										errorMessage="Please enter a valid url"
										onChange={(e) => setImageUrl(e.target.value)}
									/>
									<span className="text-medium mt-2 text-white/80 flex gap-1 items-center">
										Likes:&nbsp;
										{meme.likes}
										<AiFillLike className="size-4" />
									</span>
								</div>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button
								color="primary"
                className="disabled:opacity-50 disabled:hover:opacity-50"
								disabled={!checkValidId(memeId, memes, meme?.id) || !memeName || !checkValidUrl(imageUrl)}
								onPress={handleMemeUpdate}
							>
								Save
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default EditMemeModal;
