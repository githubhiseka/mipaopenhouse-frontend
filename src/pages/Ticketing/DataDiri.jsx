import { useContext } from 'react';
import datadiriDesktopBg from '../../assets/ticketing/datadiri/datadiriDesktopBg.webp';
import datadiriMobileBg from '../../assets/ticketing/datadiri/datadiriMobileBg.webp';
import TicketPageContext from '../../contexts/TicketPageContext';
import NextMap from '../../components/Ticketing/NextMap';
import { toast, Toaster } from 'sonner';

const TextInput = ({ label, id, value, setValue }) => (
	<div className='font-lato font-bold text-[#ba702a]'>
		<label
			htmlFor={id}
			className='text-xl md:text-3xl'
			style={{
				WebkitTextStrokeColor: '#FFFFFF',
				WebkitTextStrokeWidth: '0.6px',
			}}>
			{label}
		</label>
		<input
			type='text'
			id={id}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder={id === 'reveal' ? 'Jika tidak ada isi dengan -' : ''}
			className='w-full rounded-md border-[3px] border-[#ba702a] bg-[#e9cf9d] p-1 md:p-2'
		/>
	</div>
);

export default function DataDiri() {
	const { userData, setUserData, setPage, page } = useContext(TicketPageContext);

	const handleNext = () => {
		if (!userData.nama || !userData.sekolah || !userData.kelas || !userData.email || !userData.noTelp) {
			toast.error('Harap Isi Semua Data Diri!');
			return;
		} else {
			setPage(page + 1);
		}
	};

	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			<Toaster richColors position='top-center' />
			<div className='flex h-full w-[75%] flex-col py-[8vh] font-sunborn'>
				<h1
					className='self-center text-[12vw] text-[#b8c168] md:text-[5vw]'
					style={{
						WebkitTextStrokeColor: '#FFFFFF',
						WebkitTextStrokeWidth: '3px',
					}}>
					DATA DIRI
				</h1>
				{/* input form */}
				<div className='flex h-full w-full flex-col gap-y-4 md:flex-row md:gap-[8rem]'>
					<div className='flex h-1/2 w-full flex-col gap-4'>
						<TextInput
							label='Nama'
							id='nama'
							value={userData.nama}
							setValue={(value) => setUserData({ ...userData, nama: value })}
						/>
						<TextInput
							label='Nama Sekolah'
							id='sekolah'
							value={userData.sekolah}
							setValue={(value) => setUserData({ ...userData, sekolah: value })}
						/>
						<div className='font-lato font-bold text-[#ba702a]'>
							<label
								htmlFor='kelas'
								className='text-xl md:text-3xl'
								style={{
									WebkitTextStrokeColor: '#FFFFFF',
									WebkitTextStrokeWidth: '0.6px',
								}}>
								Kelas
							</label>
							<input
								type='number'
								id='kelas'
								value={userData.kelas}
								onChange={(e) => setUserData({ ...userData, kelas: e.target.value })}
								className='w-full rounded-md border-[3px] border-[#ba702a] bg-[#e9cf9d] p-1 md:p-2'
							/>
						</div>
						<TextInput
							label='E-mail'
							id='email'
							value={userData.email}
							setValue={(value) => setUserData({ ...userData, email: value })}
						/>
					</div>
					<div className='flex h-1/2 w-full flex-col gap-4'>
						<TextInput
							label='No. WhatsApp/ID LINE'
							id='noTelp'
							value={userData.noTelp}
							setValue={(value) => setUserData({ ...userData, noTelp: value })}
						/>
						<TextInput
							label='Kode Referral Ambassador'
							id='reveal'
							value={userData.reveal}
							setValue={(value) => setUserData({ ...userData, reveal: value })}
						/>
					</div>
				</div>
			</div>
			<img
				src={datadiriDesktopBg}
				alt=''
				className='absolute z-[-1] hidden h-full w-full object-cover md:block'
			/>
			<img src={datadiriMobileBg} alt='' className='absolute z-[-1] h-full w-full object-cover md:hidden' />
			<NextMap nextFunction={handleNext} />
		</div>
	);
}
