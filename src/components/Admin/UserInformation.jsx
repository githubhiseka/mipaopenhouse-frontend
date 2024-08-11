function UserInformation({ item }) {
	return (
		<div className='flex h-full w-full flex-col px-8 py-4'>
			<h1 className='font-lato text-xl font-bold'>
				Detailed Information:
			</h1>
			<div className='table-scrollbar text-md flex h-full w-full flex-col overflow-y-scroll'>
				<p>
					<span className='font-bold'>Nama:</span> {item.nama}
				</p>
				<p>
					<span className='font-bold'>TimeStamp:</span>{' '}
					{item.created_at}
				</p>
				<p>
					<span className='font-bold'>Asal Sekolah:</span>{' '}
					{item.asal_sekolah}
				</p>
				<p>
					<span className='font-bold'>Kelas:</span> {item.kelas}
				</p>
				<p>
					<span className='font-bold'>Email:</span> {item.email}
				</p>
				<p>
					<span className='font-bold'>Kontak:</span> {item.kontak}
				</p>
				<p>
					<span className='font-bold'>Kode Reveal:</span>{' '}
					{item.kode_reveal}
				</p>
				<p>
					<span className='font-bold'>Paket:</span> {item.paket}
				</p>
				<p>
					<span className='font-bold'>Metode:</span> {item.metode}
				</p>
			</div>
		</div>
	);
}

export default UserInformation;
