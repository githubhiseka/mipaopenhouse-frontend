export default function AdminLogin({
	email,
	setEmail,
	setPassword,
	password,
	handleLoginSubmit,
}) {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='flex h-1/2 w-1/3 flex-col items-center justify-center gap-2'>
				<h1 className='text-5xl font-bold'>Admin Login</h1>
				<p className='text-md pb-5 opacity-80'>
					Enter your credentials to access the admin dashboard.
				</p>
				<div className='flex w-full flex-col items-start justify-center gap-4 rounded-md border-[2px] px-4 py-4 shadow-md'>
					<div className='flex w-full flex-col gap-1'>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							type='text'
							placeholder='Enter your email'
							className='w-full rounded-md border-[1px] border-gray-200 p-2'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex w-full flex-col gap-1'>
						<label htmlFor='password'>Password</label>
						<input
							id='password'
							type='password'
							placeholder='Enter your password'
							className='w-full rounded-md border-[1px] border-gray-200 p-2'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						className='h-10 w-full rounded-md bg-green-700 text-center font-bold text-white shadow-sm'
						onClick={handleLoginSubmit}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
