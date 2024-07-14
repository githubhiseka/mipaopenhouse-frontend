import React, { useState, useEffect } from 'react';
import logoGlow from '../assets/logo-glow.svg';

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// scroll event listener
		window.addEventListener('scroll', handleScroll);

		// clean up the event listener
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 z-30 flex h-20 w-full flex-row items-center justify-between pl-6 pr-12 text-lg font-bold tracking-wide text-[#FFE37F] transition ease-in-out ${isScrolled ? 'bg-[#283C26] bg-opacity-60 shadow-2xl backdrop-blur' : ''}`}
		>
			<div>
				<a href='/'>
					<img
						src={logoGlow}
						alt='Logo'
						className='h-20'
					/>
				</a>
			</div>
			<NavBarText
				text='HOME'
				link='/'
			/>
			<NavBarText
				text='ABOUT US'
				link='/'
			/>
			<NavBarText
				text='TIMELINE'
				link='/'
			/>
			<NavBarText
				text='DEPARTMENTS'
				link='/'
			/>
			<button
				className='h-12 w-36 border-4 border-[#84743d] border-opacity-60 bg-[#FFE37F] bg-opacity-60 text-[#283C26]'
				onClick=''
			>
				DAFTAR
			</button>
		</div>
	);
};

const NavBarText = ({ text, link }) => {
	return (
		<p className='relative'>
			<a
				href={link}
				className="after:transition-width transition duration-300 ease-in-out after:block after:h-1 after:w-0 after:bg-[#FFF] after:duration-300 after:content-[''] hover:text-[#FFF] hover:after:w-full"
			>
				{text}
			</a>
		</p>
	);
};

export default NavBar;
