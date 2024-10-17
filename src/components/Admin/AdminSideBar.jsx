import { Bell, Check, CheckCircleIcon, LogOut, Menu, MenuIcon, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { FaHamburger } from 'react-icons/fa';

export default function AdminSideBar() {
	const navigate = useNavigate();
	const [selectedPath, setSelectedPath] = useState('');
	const [showMenu, setShowMenu] = useState(false);

	//get current location
	const currentLocation = window.location.pathname;

	const handleLogOut = () => {
		localStorage.removeItem('access_token');
		navigate('/admin/login');
	};

	useEffect(() => {
		setSelectedPath(currentLocation);
	}, []);

	return (
		<>
			<div className='hidden h-screen w-28 flex-col items-center justify-between border-r-[1px] border-gray-800/20 bg-gray-500/10 py-8 md:flex'>
				<div className='flex flex-col items-center justify-start gap-12'>
					<img src={logo} alt='' className={cn('mb-4 h-20 w-20 object-contain p-4')} />
					<Bell
						className={cn(
							'h-8 w-8 object-contain',
							selectedPath === '/admin/verify' ? 'text-blue-500' : 'text-black'
						)}
						onClick={() => navigate('/admin/verify')}
					/>
					<CheckCircleIcon
						className={cn(
							'h-8 w-8 object-contain',
							selectedPath === '/admin/dashboard' ? 'text-blue-500' : 'text-black'
						)}
						onClick={() => navigate('/admin/dashboard')}
					/>
				</div>
				<LogOut className='h-8 w-8 object-contain' onClick={handleLogOut} />
			</div>
			<div className='fixed top-0 z-20 flex h-20 w-full items-center justify-between border-r-[1px] border-gray-800/20 bg-gray-200 px-8 md:hidden'>
				<img src={logo} alt='' className={cn('h-20 w-20 object-contain p-4')} />
				<MenuIcon color='black' className='h-10 w-10' onClick={() => setShowMenu(!showMenu)} />
				{showMenu && (
					<div className='fixed left-0 top-20 z-30 flex h-auto w-full flex-col items-center justify-between gap-2 bg-gray-200 py-4 text-lg'>
						<p
							className={cn({
								'font-bold text-blue-500': selectedPath === '/admin/verify',
							})}
							onClick={() => navigate('/admin/verify')}>
							Verify
						</p>
						<p
							className={cn({
								'font-bold text-blue-500': selectedPath === '/admin/dashboard',
							})}
							onClick={() => navigate('/admin/dashboard')}>
							Dashboard
						</p>
						<p onClick={handleLogOut}>Logout</p>
					</div>
				)}
			</div>
		</>
	);
}
