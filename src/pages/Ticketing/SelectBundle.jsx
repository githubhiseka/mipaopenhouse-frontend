import cn from 'classnames';

function Bundle({ bundleName, bundlePrice }) {
    return (
        <div
			className={cn(
				'flex h-[4.5rem] w-full cursor-pointer flex-col items-center justify-center border-4 border-[#223d23] bg-[#628938] bg-opacity-50 font-lato md:h-24',
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
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-3 justify-center items-center w-3/4 h-full bg-red-400'>
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
            </div>
        </div>
    )
}