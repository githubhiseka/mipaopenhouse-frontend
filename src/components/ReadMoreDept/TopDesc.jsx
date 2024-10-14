import rope from '../../assets/rope.svg';
import topDescLeaves from '../../assets/top-desc-leaves.webp';

const TopDesc = ({
	bgColor,
	leavesOpacity,
	leavesBrightness,
	deptLogo,
	deptTitle,
	titleColor,
	desc,
	descColor,
}) => {
	return (
		<div
			className='relative flex w-full flex-col items-center justify-center gap-6 bg-auto bg-center pb-10 pt-20 overflow-x-clip'
			style={{ backgroundColor: bgColor }}
		>
			<img
				className='absolute inset-0 h-full w-full bg-repeat'
				style={{
					backgroundImage: `url(${topDescLeaves})`,
					backgroundSize: 'auto',
					opacity: leavesOpacity,
					filter: `brightness(${leavesBrightness})`,
				}}
			/>
			<img
				className='z-10 w-[30%] md:w-1/6 lg:w-[12.5%]'
				src={deptLogo}
			/>
			<p
				className='z-10 -mb-4 font-sunborn text-4xl font-bold tracking-widest sm:text-5xl'
				style={{ color: titleColor }}
			>
				{deptTitle}
			</p>
			<p
				className='w-4/5 text-center font-lato font-semibold text-md tracking-wider sm:text-base'
				style={{ color: descColor }}
			>
				{desc}
			</p>
			<img
				className='absolute -bottom-1 z-10 w-full'
				src={rope}
			/>
		</div>
	);
};

export default TopDesc;
