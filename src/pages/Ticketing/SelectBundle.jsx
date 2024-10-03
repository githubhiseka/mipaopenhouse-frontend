import cn from 'classnames';
import ticketDesktopBg from '../../assets/ticketing/ticketDesktopBg.webp';
import ticketMobileBg from '../../assets/ticketing/ticketMobileBg.webp';
import NextMap from '../../components/Ticketing/NextMap';
import { Toaster, toast } from 'sonner';
import { useContext, useEffect, useState } from 'react';
import TicketPageContext from '../../contexts/TicketPageContext';

function Bundle({ bundle, selected, onClick}) {
    return (
        <div
			className={cn(
				'flex h-[4.5rem] w-3/4 sm:w-3/5 lg:w-1/2 cursor-pointer flex-col z-10 items-center justify-center border-4 border-[#223d23] bg-[#628938] bg-opacity-50 font-lato md:h-24',
				{
					'bg-[#eaffd3] bg-opacity-100 text-[#223d23]': selected,
				},
				{
					'text-[#eaffd3]': !selected,
				}
            )}
            onClick={onClick}
        >
            <h1 className='text-2xl font-bold md:text-3xl'>{ bundle.name }</h1>
			<p>Rp{ bundle.price }</p>
        </div>
    )
}

export default function SelectBundle() {
	const [selectedBundle, setSelectedBundle] = useState(null);
	const { setUserData, page, setPage, userData } = useContext(TicketPageContext);
    const [bundles, setBundles] = useState([
        {name: 'Personal', price: '60.000'},
        {name: 'Trio', price: '165.000'},
        {name: 'Penta', price: '250.000'},
    ]);

    useEffect(() => {
		setUserData((prev) => ({
			...prev,
			bundle: selectedBundle + 1,
		}));
	}, [selectedBundle]);

    const handleNext = () => {
		if (selectedBundle === null) {
			toast.error('Harap Pilih Salah Satu Bundle!');
			return;
		} else {
            setPage(page + 1)
        }
	};

    return (
        <div className='relative flex flex-col w-full h-screen justify-center items-center gap-6 overflow-hidden'>
            <img src={ticketDesktopBg} alt='' className='absolute z-[-1] hidden h-full w-full object-cover md:block' />
            <img src={ticketMobileBg} alt='' className='absolute z-[-1] h-full w-full object-cover md:hidden' />
            <Toaster richColors position='top-center' />

            <h1 className='font-sunborn text-6xl lg:text-7xl leading-none text-[#defabf] drop-shadow-title mb-8'>BUNDLING</h1>

            {bundles.map((bundle, i) => (
                <Bundle
                    bundle={bundle}
                    selected={selectedBundle === i}
                    onClick={() => setSelectedBundle(i)}
                />
            ))}
            
            <NextMap nextFunction={handleNext}/>
        </div>
    )
}