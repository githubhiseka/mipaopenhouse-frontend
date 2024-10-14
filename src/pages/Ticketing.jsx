import React, { createContext, useState, useEffect } from 'react';
import WelcomeTicket from './Ticketing/WelcomeTicket';
import TicketPageContext from '../contexts/TicketPageContext';
import TataCara from './Ticketing/TataCara';
import DataDiri from './Ticketing/DataDiri';
import PenjelasanPacket from './Ticketing/PenjelasanPacket';
import SelectPacket from './Ticketing/SelectPacket';
import Payment from './Ticketing/Payment';
import BuktiTransaksi from './Ticketing/BuktiTransaksi';
import MoreInfo from './Ticketing/MoreInfo';
import Terimakasih from './Ticketing/Terimakasih';

const Ticketing = () => {
	const [page, setPage] = useState(0);
	const [userData, setUserData] = useState({
		nama: '',
		sekolah: '',
		kelas: '',
		email: '',
		noTelp: '',
		reveal: '',
	});
	const pageList = [
		WelcomeTicket,
		TataCara,
		DataDiri,
		PenjelasanPacket,
		SelectPacket,
		Payment,
		BuktiTransaksi,
		MoreInfo,
		Terimakasih,
	];
	const CurrentPage = pageList[page % pageList.length];

	useEffect(() => {
		const handlePopState = (event) => {
			setPage(event.state?.page || 0);
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, []);

	const navigateToPage = (newPage) => {
		setPage(newPage);
		window.history.pushState({ page: newPage }, `Page ${newPage}`, `#page${newPage}`);
	};

	return (
		<TicketPageContext.Provider value={{ page, setPage: navigateToPage, userData, setUserData }}>
			<CurrentPage />
		</TicketPageContext.Provider>
	);
};

export default Ticketing;
