import EditMemeModal from '@/components/edit-meme-modal';
import useMemesStore from '@/store/memes';
import { Meme } from '@/types/memes';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
	useDisclosure
} from '@heroui/react';
import { useCallback, useState } from 'react';
import { FaPen } from 'react-icons/fa';

const columns = [
	{
		key: 'id',
		label: 'ID'
	},
	{
		key: 'name',
		label: 'NAME'
	},
	{
		key: 'image',
		label: 'IMAGE URL'
	},
	{
		key: 'likes',
		label: 'LIKES'
	},
	{
		key: 'actions',
		label: 'ACTIONS'
	}
];

const TableView = () => {
	const { memes } = useMemesStore();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);

	const onEditMeme = useCallback(
		(meme: Meme) => {
      console.log('meme', meme);
			setCurrentMeme(meme);
			onOpen();
		},
		[onOpen]
	);

	const renderCell = useCallback(
		(item: Meme, columnKey: keyof Meme | 'actions') => {
			switch (columnKey) {
				case 'actions':
					return (
						<div className="relative flex items-center gap-2">
							<Tooltip content="Edit meme">
								<Button
									className="flex gap-2 items-center cursor-pointer"
									variant="light"
									onPress={() => onEditMeme(item)}
								>
									<span className="text-lg text-default-400 active:opacity-50">
										Edit
									</span>
									<FaPen className="size-3 text-red-500" />
								</Button>
							</Tooltip>
						</div>
					);
				default:
					return item[columnKey];
			}
		},
		[onEditMeme]
	);

	return (
		<div className="flex px-4 flex-col gap-4 mt-10 max-w-6xl mx-auto">
			<Table aria-label="Example table with dynamic content">
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>{column.label}</TableColumn>
					)}
				</TableHeader>
				<TableBody items={memes}>
					{(item) => (
						<TableRow key={item.id}>
							{(columnKey) => (
								<TableCell>{renderCell(item, columnKey as keyof Meme | 'actions')}</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
			<EditMemeModal
				meme={currentMeme}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
		</div>
	);
};

export default TableView;
