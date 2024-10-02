import cn from 'classnames';
import ticketDesktopBg from '../../assets/ticketing/ticketDesktopBg.webp';
import ticketMobileBg from '../../assets/ticketing/ticketMobileBg.webp';
import NextMap from '../../components/Ticketing/NextMap';

function Bundle({ bundleName, bundlePrice }) {
    return (
        <div
			className={cn(
				'flex h-[4.5rem] w-3/4 sm:w-3/5 lg:w-1/2 cursor-pointer flex-col items-center justify-center border-4 border-[#223d23] bg-[#628938] bg-opacity-50 font-lato md:h-24',
				{
					'bg-[#eaffd3] bg-opacity-100 text-[#223d23]': true,
				},
				{
					'text-[#eaffd3]': !true,
				}
            )}
        >
            <h1 className='text-2xl font-bold md:text-3xl'>{ bundleName }</h1>
			<p>Rp{ bundlePrice }</p>
        </div>
    )
}

export default function SelectBundle() {
    const handleNext = () => {
		if (selectedPacket === null) {
			toast.error('Harap Pilih Salah Satu Paket!');
			return;
		} else {
			setShowPopUp(true);
		}
	};

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center gap-6 overflow-y-auto'>
            <img src={ticketDesktopBg} alt='' className='absolute z-[-1] hidden h-full w-full object-cover md:block' />
            <img src={ticketMobileBg} alt='' className='absolute z-[-1] h-full w-full object-cover md:hidden' />

            <h1 className='font-sunborn text-6xl lg:text-7xl leading-none text-[#defabf] drop-shadow-title mb-8'>BUNDLING</h1>

            <Bundle
                bundleName="Personal"
                bundlePrice="60.000"
            />

            <Bundle
                bundleName="Trio"
                bundlePrice="165.000"
            />

            <Bundle
                bundleName="Penta"
                bundlePrice="250.000"
            />
            <NextMap nextFunction={handleNext} showKetentuan={true} />
        </div>
    )
}