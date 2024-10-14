import { useNavigate } from 'react-router-dom';

function DeptCards({ bgColor, imgSrc, title, desc, btnHref, titleColor }) {
	const navigate = useNavigate();

	return (
		<div
			className={`dept-cards flex h-full w-[80%] flex-col items-center justify-between border-4 border-[#440A00] border-opacity-30 bg-opacity-60 py-7 md:w-3/4 xl:w-1/2 ${bgColor}`}>
			<img
				src={imgSrc}
				alt=''
				className={
					'aspect-square h-1/2 object-cover' // border-2 border-black
				}
			/>
			<div className='mx-[12%] flex flex-col items-center'>
				<p className={`font-sunborn text-4xl font-medium ${titleColor}`}>{title}</p>
				<p className='text-center font-medium'>{desc}</p>
			</div>

			<a
				href={btnHref}
				id='button'
				className='flex h-[11%] w-[55%] items-center justify-center border-[3px] border-[#6a6868] bg-[#f7f3e4] text-xl font-bold'
				onClick={() => navigate(`${btnHref}`)}>
				Read More
			</a>
		</div>
	);
}

export default DeptCards;
