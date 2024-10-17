import {
	IconWorld,
	IconMapPin,
	IconPhone,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandX,
	IconGlobe,
} from '@tabler/icons-react';

const ContactSection = () => {
	return (
		<div
			id='contact-section'
			className='relative flex w-full flex-col items-center justify-center bg-[#283C26] font-lato text-[#FEFDF6]'
		>
			<div className='pt-8'>
				<p className='text-center text-5xl font-extrabold'>
					GET IN TOUCH
				</p>
				<p className='text-center text-xl font-medium tracking-wider'>
					Journey to the Universe of Science
				</p>
			</div>
			<div className='flex w-full flex-row flex-wrap gap-y-6 py-8 px-8 sm:flex-nowrap md:px-32'>
				<div className='order-3 w-full sm:order-1 sm:w-[45%]'>
					<div className='flex flex-row items-center space-x-2'>
						<IconMapPin size={22} />
						<p className='text-xl font-bold'>Our Location</p>
					</div>
					<a href='https://maps.app.goo.gl/xAYBhzgaDYfcMgBJ9'>
						<p className='underline underline-offset-2'>
							Fakultas MIPA, Universitas Indonesia,
							<br />
							Depok, Jawa Barat
						</p>
					</a>
				</div>
				<div className='order-2 flex w-1/2 flex-col sm:order-1 sm:w-[35%]'>
					<div className='flex flex-row items-center space-x-2'>
						<IconPhone size={22} />
						<p className='text-xl font-bold'>Contact Us</p>
					</div>
					<p className='font-[550]'>Venida</p>
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
				<div className='order-2 flex w-1/2 flex-col sm:order-3 sm:w-1/5'>
					<div className='flex flex-row items-center space-x-2'>
						<IconWorld size={22} />
						<p className='text-xl font-bold'>Connect</p>
					</div>
					<div className='relative flex flex-row gap-1'>
						<a href='https://www.instagram.com/mipaopenhouse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
							<IconBrandInstagram />
						</a>
						<a href='https://twitter.com/mipaopenhouse'>
							<IconBrandX />
						</a>
						<a href='https://www.tiktok.com/@mipaopenhouse?is_from_webapp=1&sender_device=pc'>
							<IconBrandTiktok />
						</a>
					</div>
					<p>#ExploreTheScience</p>
				</div>
			</div>
			<p className='my-3 text-xs'>
				© FMIPACIL 2024 — All rights reserved.
			</p>
		</div>
	);
};

export default ContactSection;
