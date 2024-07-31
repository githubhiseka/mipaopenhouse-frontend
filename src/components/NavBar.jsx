import React, { useState, useEffect } from 'react';
import logoGlow from '../assets/logo-glow.svg';

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

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

	const toggleNavBar = () => {
		setIsNavBarExpanded(!isNavBarExpanded);
	};

	return (
		<div>
			{/* FOR MEDIUM AND LARGER VIEWPORT */}
			<div
				className={`fixed top-0 z-50 hidden h-20 w-full flex-row items-center justify-between pl-6 pr-12 text-lg font-bold tracking-wide text-[#FFE37F] transition ease-in-out md:flex ${isScrolled ? 'bg-[#283C26] bg-opacity-60 shadow-2xl backdrop-blur' : ''}`}
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
					link='title-section'
				/>
				<NavBarText
					text='ABOUT US'
					link='about-us-section'
				/>
				<NavBarText
					text='TIMELINE'
					link='timeline-section'
				/>
				<NavBarText
					text='DEPARTMENTS'
					link='dept-slider'
				/>
				<NavBarText
					text='CONTACT'
					link='contact-section'
				/>
				<button className='h-12 w-36 border-4 border-[#84743d] border-opacity-60 bg-[#FFE37F] bg-opacity-60 text-[#283C26]'>
					DAFTAR
				</button>
			</div>

			{/* FOR SMALL VIEWPORT */}
			<div
				className={`${isScrolled || isNavBarExpanded ? 'bg-[#283C26] bg-opacity-60 shadow-2xl backdrop-blur' : ''} fixed top-0 z-50 flex w-full flex-col justify-between px-4 align-middle text-lg font-bold tracking-wide text-[#FFE37F] transition-all duration-300 ease-in-out md:hidden ${isNavBarExpanded ? 'h-64' : 'h-20'}`}
			>
				<div className='flex h-20 w-full items-center justify-between'>
					{/* Hamburger Icon */}
					<button
						className='block w-28 md:hidden'
						onClick={toggleNavBar}
					>
						<div
							className={`relative h-8 w-8 transition-transform duration-300 ease-in-out ${isNavBarExpanded ? 'rotate-45' : ''}`}
						>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full bg-[#FFE37F] transition-transform duration-300 ease-in-out ${isNavBarExpanded ? 'rotate-22.5' : '-translate-y-1.5'}`}
							></div>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full bg-[#FFE37F] transition-opacity duration-300 ease-in-out ${isNavBarExpanded ? 'opacity-0' : ''}`}
							></div>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full bg-[#FFE37F] transition-transform duration-300 ease-in-out ${isNavBarExpanded ? '-rotate-90' : 'translate-y-1.5'}`}
							></div>
						</div>
					</button>
					{/* Owl Logo */}
					<div>
						<a href='/'>
							<img
								src={logoGlow}
								alt='Logo'
								className='h-20'
							/>
						</a>
					</div>
					{/* Daftar Button */}
					<button className='h-10 w-28 border-4 border-[#84743d] border-opacity-60 bg-[#FFE37F] bg-opacity-60 text-[#283C26]'>
						DAFTAR
					</button>
				</div>
				{/* Expanded NavBar */}
				<div
					className={`flex flex-col items-center pb-2 ${isNavBarExpanded ? 'block' : 'hidden'}`}
				>
					<NavBarText
						text='HOME'
						link='title-section'
					/>
					<NavBarText
						text='ABOUT US'
						link='about-us-section'
					/>
					<NavBarText
						text='TIMELINE'
						link='timeline-section'
					/>
					<NavBarText
						text='DEPARTMENTS'
						link='dept-slider'
					/>
					<NavBarText
						text='CONTACT'
						link='contact-section'
					/>
				</div>
			</div>
		</div>
	);
};

const NavBarText = ({ text, link }) => {
	const handleClick = (e) => {
		e.preventDefault();
		const targetElement = document.getElementById(link);
		if (targetElement) {
			setTimeout(() => {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}, 300); // Adjust the delay to match the animation duration
		}
	};

	return (
		<p className='relative'>
			<a
				href={link}
				onClick={handleClick}
				className="after:transition-width transition duration-300 ease-in-out after:block after:h-1 after:w-0 after:bg-[#FFF] after:duration-300 after:content-[''] hover:text-[#FFF] hover:after:w-full"
			>
				{text}
			</a>
		</p>
	);
};

export default NavBar;
