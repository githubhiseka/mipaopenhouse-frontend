const ContactSection = () => {
	// Source: https://tabler.io/icons
	const instagram = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
				fill='none'
			/>
			<path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
			<path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
			<path d='M16.5 7.5l0 .01' />
		</svg>
	);
	const x = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-brand-x'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
				fill='none'
			/>
			<path d='M4 4l11.733 16h4.267l-11.733 -16z' />
			<path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
		</svg>
	);
	const tiktok = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok'
		>
			<path
				stroke='none'
				d='M0 0h24v24H0z'
				fill='none'
			/>
			<path d='M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z' />
		</svg>
	);

	return (
		<div
			id='contact-section'
			className='relative flex w-full flex-col items-center justify-center bg-[#283C26] text-[#FEFDF6]' // added relative biar bunga nya bisa di belakang contact section
		>
			<div className='pt-8'>
				<p className='text-center text-5xl font-extrabold'>
					GET IN TOUCH
				</p>
				<p className='text-center text-xl font-medium tracking-wider'>
					Journey to the Universe of Science
				</p>
			</div>
			<div className='flex w-full flex-row justify-between px-8 py-8 md:px-32'>
				<div className='w-48'>
					<p className='text-xl font-bold'>Our Location</p>
					<p>
						Fakultas MIPA
						<br />
						Universitas Indonesia
						<br />
						Depok, Jawa Barat
					</p>
				</div>
				<div className='flex w-48 flex-col items-center text-center'>
					<p className='text-xl font-bold'>Contact Us</p>
					<p>
						08xxxxxx6474
						<br />
						(Name)
					</p>
				</div>
				<div className='flex w-48 flex-col items-end text-right'>
					<p className='text-xl font-bold'>Connect</p>
					<div className='flex flex-row'>
						<p className='pr-1'>
							<a
								href='https://www.instagram.com/'
								className='underline underline-offset-2'
							>
								Instagram
							</a>
						</p>
						{instagram}
					</div>
					<div className='flex flex-row'>
						<p className='pr-1'>
							<a
								href='https://x.com/'
								className='underline underline-offset-2'
							>
								Twitter/X
							</a>
						</p>
						{x}
					</div>
					<div className='flex flex-row'>
						<p className='pr-1'>
							<a
								href='https://www.tiktok.com/'
								className='underline underline-offset-2'
							>
								TikTok
							</a>
						</p>
						{tiktok}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
