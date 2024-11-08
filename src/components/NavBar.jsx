import React, { useState, useEffect } from 'react';
import logoGlow from '../assets/logo-glow.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { color } from 'framer-motion';

const NavBar = ({ bgColor, textColor }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [showMessage, setShowMessage] = useState(false);

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
			{/* Fixed div for message, saying "Pendaftaran Tiket Sudah Ditutup" */}
			<div
				className={`fixed bottom-1/2 right-1/2 z-[200] flex w-[20rem] translate-x-1/2 translate-y-1/2 flex-col items-center justify-center space-y-3 rounded-lg bg-[#000d2b] px-3 py-4 font-lato text-lg font-bold tracking-wide text-[#FFF] opacity-100 transition ease-in-out ${showMessage ? '' : 'hidden'}`}>
				<p>Pendaftaran Tiket Sudah Ditutup</p>
				<button
					className='h-8 w-full rounded-lg bg-[#FFF] text-[#000d2b]'
					onClick={() => setShowMessage(false)}>
					Got it!
				</button>
			</div>

			{/* Dim overlay behind the message */}
			<div
				className={`fixed left-0 top-0 z-[190] h-full w-full bg-[#000d2b] opacity-50 transition ease-in-out ${showMessage ? '' : 'hidden'}`}
				onClick={() => setShowMessage(false)}></div>

			{/* FOR MEDIUM AND LARGER VIEWPORT */}
			<div
				// refactored navbar to take in bgColor and textColor arguments for flexibility in departments
				className={`fixed top-0 z-50 hidden h-20 w-full flex-row items-center justify-between pl-6 pr-12 font-lato text-lg font-bold tracking-wide transition ease-in-out md:flex ${isScrolled ? 'bg-opacity-60 shadow-2xl backdrop-blur' : ''}`}
				style={{
					backgroundColor: isScrolled ? bgColor : 'transparent',
					color: textColor,
				}}>
				<div>
					<a href='/'>
						<img src={logoGlow} alt='Logo' className='h-20' />
					</a>
				</div>
				<HashLink to='/#title-section'>
					<NavBarText text='HOME' link='title-section' />
				</HashLink>
				<HashLink to='/#about-us-section'>
					<NavBarText text='ABOUT US' link='about-us-section' />
				</HashLink>
				<HashLink to='/#timeline-section'>
					<NavBarText text='TIMELINE' link='timeline-section' />
				</HashLink>
				<HashLink to='/#dept-slider'>
					<NavBarText text='DEPARTMENTS' link='dept-slider' />
				</HashLink>
				<HashLink to='/#contact-section'>
					<NavBarText text='CONTACT' link='contact-section' />
				</HashLink>
				<button
					className='h-12 w-36 cursor-pointer border-4 border-[#84743d] border-opacity-60 bg-[#FFE37F] bg-opacity-60 text-[#283C26]'
					onClick={() => setShowMessage(true)}>
					DAFTAR
				</button>
			</div>

			{/* FOR SMALL VIEWPORT */}
			<div
				// refactored navbar to take in bgColor and textColor arguments for flexibility in departments
				className={`${isScrolled || isNavBarExpanded ? 'bg-[#283C26] bg-opacity-60 shadow-2xl backdrop-blur' : ''} fixed top-0 z-50 flex w-full flex-col justify-between px-4 align-middle text-lg font-bold tracking-wide transition-all duration-300 ease-in-out md:hidden ${isNavBarExpanded ? 'h-64' : 'h-20'}`}
				style={{
					backgroundColor: isScrolled || isNavBarExpanded ? bgColor : 'transparent',
					color: textColor,
				}}>
				<div className='flex h-20 w-full items-center justify-between'>
					{/* Hamburger Icon */}
					<button className='block w-28 md:hidden' onClick={toggleNavBar}>
						<div
							className={`relative h-8 w-8 transition-transform duration-300 ease-in-out ${isNavBarExpanded ? 'rotate-45' : ''}`}>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full transition-transform duration-300 ease-in-out ${isNavBarExpanded ? 'rotate-22.5' : '-translate-y-1.5'}`}
								style={{ backgroundColor: textColor }}></div>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full transition-opacity duration-300 ease-in-out ${isNavBarExpanded ? 'opacity-0' : ''}`}
								style={{ backgroundColor: textColor }}></div>
							<div
								className={`absolute left-0 top-1/2 h-[3px] w-full transition-transform duration-300 ease-in-out ${isNavBarExpanded ? '-rotate-90' : 'translate-y-1.5'}`}
								style={{ backgroundColor: textColor }}></div>
						</div>
					</button>
					{/* Owl Logo */}
					<div>
						<a href='/'>
							<img src={logoGlow} alt='Logo' className='h-20' />
						</a>
					</div>
					{/* Daftar Button */}
					<button
						className='h-10 w-28 border-4 border-[#84743d] border-opacity-60 bg-[#FFE37F] bg-opacity-60 text-[#283C26]'
						onClick={() => setShowMessage(true)}>
						DAFTAR
					</button>
				</div>
				{/* Expanded NavBar */}
				<div className={`flex flex-col items-center pb-2 ${isNavBarExpanded ? 'block' : 'hidden'}`}>
					<HashLink to='/#title-section'>
						<NavBarText text='HOME' link='title-section' />
					</HashLink>
					<HashLink to='/#about-us-section'>
						<NavBarText text='ABOUT US' link='about-us-section' />
					</HashLink>
					<HashLink to='/#timeline-section'>
						<NavBarText text='TIMELINE' link='timeline-section' />
					</HashLink>
					<HashLink to='/#dept-slider'>
						<NavBarText text='DEPARTMENTS' link='dept-slider' />
					</HashLink>
					<HashLink to='/#contact-section'>
						<NavBarText text='CONTACT' link='contact-section' />
					</HashLink>
				</div>
			</div>
		</div>
	);
};

const NavBarText = ({ text, link }) => {
	// const location = useLocation();
	// const navigate = useNavigate();

	// const handleClick = (e) => {
	// 	e.preventDefault();

	// 	if (document.getElementById(link) === null && location.pathname !== '/') {
	// 		navigate('/')
	// 	}
	// 	const targetElement = document.getElementById(link);
	// 	if (targetElement) {
	// 		setTimeout(() => {
	// 			targetElement.scrollIntoView({ behavior: 'smooth' });
	// 		}, 300); // Adjust the delay to match the animation duration
	// 	}
	// };

	return (
		<p className="after:transition-width relative transition duration-300 ease-in-out after:block after:h-1 after:w-0 after:bg-[#FFF] after:duration-300 after:content-[''] hover:text-[#FFF] hover:after:w-full">
			{/* <a
				href={link}
				onClick={handleClick}
				className="after:transition-width transition duration-300 ease-in-out after:block after:h-1 after:w-0 after:bg-[#FFF] after:duration-300 after:content-[''] hover:text-[#FFF] hover:after:w-full">
				{text}
			</a> */}
			{text}
		</p>
	);
};

export default NavBar;
