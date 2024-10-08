import NextMap from '../../components/Ticketing/NextMap';
import ticketDesktopBg from '../../assets/ticketing/ticketDesktopBg.webp';
import ticketMobileBg from '../../assets/ticketing/ticketMobileBg.webp';
import only45k from '../../assets/ticketing/only45k.webp';
import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';
import { Toaster, toast } from 'sonner';
import useTicket from '../../hooks/useTicket';
import nextButton from '../../assets/ticketing/nextButton.webp';

function Packet({ packet, selected, onClick }) {
	return (
		<div
			className={cn(
				'flex h-[4.5rem] w-full cursor-pointer flex-col items-center justify-center border-4 border-[#223d23] bg-[#628938] bg-opacity-50 font-lato md:h-24',
				{
					'bg-[#eaffd3] bg-opacity-100 text-[#223d23]': selected,
				},
				{
					'text-[#eaffd3]': !selected,
				},
				{
					'cursor-not-allowed border-opacity-10 bg-opacity-30 opacity-50': packet.slot === 0,
				}
			)}
			onClick={packet.slot === 0 ? undefined : onClick}>
			<h1 className='text-2xl font-bold md:text-3xl'>{packet.name}</h1>
			<p>({packet.slot}) available slot left!</p>
		</div>
	);
}

function DetailPopUp({ userData, setShowPopUp, setPage, page }) {
	return (
		<div className='fixed z-40 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-10'>
			<div className='flex h-[70%] w-[90%] flex-col items-center justify-between overflow-x-auto border-4 border-[#223d23] bg-[#628938] bg-opacity-90 px-4 py-8 md:w-auto md:px-10'>
				<h1 className='text-center font-sunborn text-3xl leading-none text-[#defabf] drop-shadow-title'>
					Konfirmasi Pesanan Anda
				</h1>
				<div className='flex w-full flex-col items-start justify-start truncate'>
					<div className='flex'>
						<div className=''></div>
						<div className=''></div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Nama:</div>
						<div className=''>{userData.nama}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Sekolah:</div>
						<div className=''>{userData.sekolah}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Kelas:</div>
						<div className=''>{userData.kelas}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Email:</div>
						<div className=''>{userData.email}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>No. Telp:</div>
						<div className=''>{userData.noTelp}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Kode Reveal:</div>
						<div className=''>{userData.reveal || '-'}</div>
					</div>
					<div className='flex flex-col -space-y-2 text-white'>
						<div className='font-bold'>Paket:</div>
						<div className=''>{userData.packet}</div>
					</div>
				</div>
				<div className='flex w-full items-center justify-between'>
					<button
						className='rounded-full border bg-white px-3 py-1 font-sunborn text-xl text-black/50'
						onClick={() => setShowPopUp(false)}>
						Cancel
					</button>
					<img
						src={nextButton}
						alt=''
						className='w-32 scale-90 cursor-pointer object-contain hover:scale-110 md:scale-100'
						onClick={() => setPage(page + 1)}
					/>
				</div>
			</div>
		</div>
	);
}

export default function SelectPacket() {
	const [selectedPacket, setSelectedPacket] = useState(null);
	const { setUserData, page, setPage, userData } = useContext(TicketPageContext);
	const [showPopUp, setShowPopUp] = useState(false);
	const [isFetching, setIsFetching] = useState(true);
	const { getStock } = useTicket();

	const [packets, setPackets] = useState([
		{ name: 'PAKET 1', id: 1, slot: '...' },
		{ name: 'PAKET 2', id: 2, slot: '...' },
		{ name: 'PAKET 3', id: 3, slot: '...' },
		{ name: 'PAKET 4', id: 4, slot: '...' },
		{ name: 'PAKET 5', id: 5, slot: '...' },
		{ name: 'PAKET 6', id: 6, slot: '...' },
	]);

	useEffect(() => {
		const fetchData = async () => {
			setIsFetching(true);
			const updatedPackets = await Promise.all(
				packets.map(async (packet) => {
					const stock = await getStock(packet.id);
					return { ...packet, slot: stock.stok };
				})
			);
			setPackets(updatedPackets);
			setIsFetching(false);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setUserData((prev) => ({
			...prev,
			packet: selectedPacket + 1,
		}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedPacket]);

	const handleNext = () => {
		if (selectedPacket === null) {
			toast.error('Harap Pilih Salah Satu Paket!');
			return;
		} else {
			setShowPopUp(true);
		}
	};

	return (
		<div className='relative flex h-screen w-full items-start justify-center overflow-clip'>
			{showPopUp && !isFetching && (
				<DetailPopUp userData={userData} setShowPopUp={setShowPopUp} setPage={setPage} page={page} />
			)}
			<Toaster richColors position='top-center' />
			<div className='flex h-full w-[60%] flex-col items-center justify-start gap-10 py-[8vh] md:w-[75%] md:gap-20'>
				<div className='relative'>
					<h1 className='font-sunborn text-6xl leading-none text-[#defabf] drop-shadow-title'>PACKAGE</h1>
					<p className='text-center font-lato text-xl font-bold leading-none text-[#eaffd3]'>Select Yours!</p>
					<img
						src={only45k}
						alt=''
						className='z-2 absolute bottom-[-10vw] right-[-8vw] w-24 -rotate-12 transform object-contain md:bottom-[-5vw] md:right-[-6vw] md:w-36'
					/>
				</div>
				<div className='mb-[20vw] flex h-full w-full flex-col gap-2 overflow-y-auto md:mb-0 md:flex-row md:gap-[8rem]'>
					<div className='flex w-full flex-col gap-2 md:h-full md:gap-4'>
						{packets.slice(0, 4).map((packet, i) => (
							<Packet
								key={packet.id}
								packet={packet}
								selected={selectedPacket === i}
								onClick={() => setSelectedPacket(i)}
							/>
						))}
					</div>
					<div className='flex w-full flex-col gap-2 md:h-full md:gap-4'>
						{packets.slice(4).map((packet, i) => (
							<Packet
								key={packet.id}
								packet={packet}
								selected={selectedPacket === i + 4}
								onClick={() => setSelectedPacket(i + 4)}
							/>
						))}
					</div>
				</div>
			</div>
			<img src={ticketDesktopBg} alt='' className='absolute z-[-1] hidden h-full w-full object-cover md:block' />
			<img src={ticketMobileBg} alt='' className='absolute z-[-1] h-full w-full object-cover md:hidden' />
			<NextMap nextFunction={handleNext} showKetentuan={true} />
		</div>
	);
}
