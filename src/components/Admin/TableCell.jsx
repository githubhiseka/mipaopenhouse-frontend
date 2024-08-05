import cn from 'classnames';
import { FaEllipsis } from 'react-icons/fa6';

export default function TableCell({ item, setSelected, selectedCustomer }) {
	const formatDate = (dateString) => {
		// Parse the input date-time string
		const date = new Date(dateString);

		// Define the UTC+7 offset in milliseconds
		const offsetWIB = 7 * 60 * 60 * 1000;

		// Create a new date by adding the offset
		const dateWIB = new Date(date.getTime() + offsetWIB);

		// Extract date components in WIB timezone
		const day = String(dateWIB.getUTCDate()).padStart(2, '0');
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const month = monthNames[dateWIB.getUTCMonth()];
		const year = dateWIB.getUTCFullYear();

		const hours = String(dateWIB.getUTCHours()).padStart(2, '0');
		const minutes = String(dateWIB.getUTCMinutes()).padStart(2, '0');

		return `${day} ${month} ${year}, ${hours}:${minutes} WIB`;
	};

	return (
		<tr
			className={cn(
				'h-16 cursor-default border-b-2 border-gray-400 border-opacity-20 text-black hover:bg-gray-300/30',
				selectedCustomer !== null &&
					selectedCustomer.id === item.id &&
					'bg-gray-300/60'
			)}
			onClick={() => setSelected(item)}
		>
			<td className='truncate px-4'>{item.nama}</td>
			<td className='hidden truncate md:table-cell'>{item.email}</td>
			<td className='hidden truncate md:table-cell'>
				{formatDate(item.created_at)}
			</td>
			<td className='truncate'>{item.paket}</td>
			<td className='hidden items-center truncate md:table-cell'>
				<div
					className={cn(
						'w-20 rounded-full px-2 py-1 text-center text-sm font-bold text-white',
						item.verified ? 'bg-green-500' : 'bg-gray-500'
					)}
				>
					{item.verified ? 'Verified' : 'Unverified'}
				</div>
			</td>
			<td className='truncate'>
				<FaEllipsis className='text-gray-500' />
			</td>
		</tr>
	);
}
