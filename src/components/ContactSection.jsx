const ContactSection = () => {
	// Source: https://tabler.io/icons
	const instagram = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
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
			width='32'
			height='32'
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
			width='32'
			height='32'
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
			<div className='flex w-full flex-row flex-wrap sm:flex-nowrap gap-y-6 px-8 py-8 md:px-32'>
				<div className='w-full sm:w-[45%] order-3 sm:order-1'>
					<p className='text-xl font-bold'>Our Location</p>
					<a href="https://maps.app.goo.gl/xAYBhzgaDYfcMgBJ9">
						<p className='underline underline-offset-2'>
							Fakultas MIPA, Universitas Indonesia,
							<br />
							Depok, Jawa Barat
						</p>
					</a>
				</div>
				<div className='flex w-1/2 sm:w-[35%] flex-col order-2 sm:order-1'>
					<p className='text-xl font-bold'>Contact Us</p>
					<p className="font-[550]">Venida</p>
					<p>
						WhatsApp:{' '}
						<a
							href='https://wa.me/+62816889740'
							className='underline underline-offset-2'
						>
							0816889740
						</a>
					</p>
					<p>
						LINE:{' '}
						<a
							href='https://line.me/ti/p/g5HoF1Mmtv'
							className='underline underline-offset-2'
						>
							venidaarmd
						</a>
					</p>
				</div>
				<div className='flex w-1/2 sm:w-1/5 flex-col order-2 sm:order-3'>
					<p className='text-xl font-bold'>Connect</p>
					<div className='relative -left-1 flex flex-row gap-1'>
						<a href="https://www.instagram.com/mipaopenhouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
							<div>{instagram}</div>
						</a>
						<a href="https://twitter.com/mipaopenhouse">
							<div>{x}</div>
						</a>
						<a href="https://www.tiktok.com/@mipaopenhouse?is_from_webapp=1&sender_device=pc">
							<div>{tiktok}</div>
						</a>
					</div>
					<p>#RaihMimpimu</p>
				</div>
			</div>
			<p className='my-3 text-xs'>©FMIPACIL 2024. All rights reserved</p>
		</div>
	);
};

export default ContactSection;
