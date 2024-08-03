import longRope from '../../assets/long-rope.svg';
import rope from '../../assets/rope.svg';

const TopDesc = ({
	bgColor,
	deptLogo,
	deptTitle,
	titleColor,
	desc,
	descColor,
}) => {
	return (
		<div
			className='bg-container relative flex w-full flex-col items-center justify-center gap-6 bg-auto bg-center pb-10 pt-20' // bg-container is defined in styles.css
			style={{ backgroundColor: bgColor }}
		>
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
				className='w-4/5 text-center font-lato text-xs tracking-wider sm:text-base'
				style={{ color: descColor }}
			>
				{desc}
			</p>
			<img
				className='absolute -bottom-1 w-full z-10'
				src={longRope}
			/>
		</div>
	);
};

export default TopDesc;
