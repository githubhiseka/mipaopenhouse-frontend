function deptCards({bgColor, imgSrc, title, desc, btnHref, titleColor}) {
	return (
		<div
			className={`dept-cards flex h-full w-[80%] flex-col items-center justify-between border-4 border-red-900 border-opacity-70 bg-opacity-70 py-7 md:w-[50%] ${bgColor}`}
		>
			<img
				src={imgSrc}
				alt=""
				className={`aspect-square h-1/2 rounded-full border-2 border-black object-cover`}
			/>
			<div className="mx-[12%] flex flex-col items-center">
				<p className={`text-3xl font-bold ${titleColor}`}>{title}</p>
				<p className="text-center">{desc}</p>
			</div>

			<div
				id="button"
				className="flex h-[11%] w-[55%] items-center justify-center border-[3px] border-[#999696] bg-[#f7f3e4] text-xl font-bold"
				onClick={() => {
					window.location.href(btnHref);
				}}
			>
				Read More
			</div>
		</div>
	);
}

export default deptCards;
