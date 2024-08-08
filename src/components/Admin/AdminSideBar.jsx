import { Bell, Check, CheckCircleIcon, LogOut, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export default function AdminSideBar() {
	const navigate = useNavigate();
	const [selectedPath, setSelectedPath] = useState('');

	//get current location
	const currentLocation = window.location.pathname;

	useEffect(() => {
		setSelectedPath(currentLocation);
	}, []);

	return (
		<div className='flex h-screen w-28 flex-col items-center justify-between border-r-[1px] border-gray-800/20 bg-gray-500/10 py-8'>
			<div className='flex flex-col items-center justify-start gap-12'>
				<img
					src={logo}
					alt=''
					className={cn('mb-4 h-20 w-20 object-contain p-4')}
				/>
				<Bell
					className={cn(
						'h-8 w-8 object-contain',
						selectedPath === '/admin/verify'
							? 'text-blue-500'
							: 'text-black'
					)}
					onClick={() => navigate('/admin/verify')}
				/>
				<CheckCircleIcon
					className={cn(
						'h-8 w-8 object-contain',
						selectedPath === '/admin/dashboard'
							? 'text-blue-500'
							: 'text-black'
					)}
					onClick={() => navigate('/admin/dashboard')}
				/>
			</div>
			<LogOut className='h-8 w-8 object-contain' />
		</div>
	);
}
