import TableCell from './TableCell';

export default function AdminTable({ data, setSelectedCustomer, selectedCustomer, handleDelete }) {
	return (
		<div className='table-scrollbar h-full w-full flex-1 overflow-y-auto'>
			{data.length === 0 ? (
				<div className='flex h-full w-full items-center justify-center text-lg text-gray-500'>
					Data masih Kosong
				</div>
			) : (
				<div className='table-scrollbar h-full w-full overflow-auto'>
					<table className='w-full table-fixed'>
						<thead className='sticky top-0 cursor-default border-b-2 border-gray-400 border-opacity-20 bg-white text-left text-black text-opacity-50'>
							<tr>
								<th className='w-[50%] px-4 py-2 pb-3 md:w-[25%]'>Name</th>
								<th className='hidden w-[20%] py-2 pb-3 md:table-cell'>Email</th>
								<th className='hidden w-[20%] py-2 pb-3 md:table-cell'>Date</th>
								<th className='w-[15%] py-2 pb-3 md:w-[9%]'>Paket</th>
								<th className='hidden w-[15%] py-2 pb-3 md:table-cell'>Bundle</th>
								<th className='hidden w-[15%] py-2 pb-3 md:table-cell'>Verified</th>
								<th className='w-[10%] truncate py-2 pb-3 md:w-[5%]'></th>
							</tr>
						</thead>
						<tbody className='w-full'>
							{data.map((item) => {
								return (
									<TableCell
										key={item.id}
										item={item}
										setSelected={setSelectedCustomer}
										selectedCustomer={selectedCustomer}
										handleDelete={handleDelete}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
