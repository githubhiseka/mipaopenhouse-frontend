import map from "../assets/map.png";
import timelineTitle from "../assets/timelineTitle.svg";

const TimelineSection = () => {
	return (
		<div className="flex w-full h-auto z-10 relative bg-[#f7f3e4]"> 
			<img
				className="w-full -mt-[7vh] -mb-[12vh] z-12"
				src={map}
				alt="Map Timeline"
			/>
			<p
				className="absolute top-[4%] left-[10%] text-[#FFE37F] font-black text-7xl font-sunborn"
				style={{
					WebkitTextStrokeColor: "#440A00",
					WebkitTextStrokeWidth: "1px",
				}}
			>
				OUR TIMELINE
			</p>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[10%] right-[15%]'>
                {/* <div className="w-10 h-10 bg-black">
                    <p>1</p>
                </div> */}
            </div>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[24%] left-[14%]'>
            </div>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[43%] right-[10%]'>
            </div>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[50%] left-[10%]'>
            </div>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[70%] right-[15%]'>
            </div>
            <div className='absolute w-[23%] h-[6%] z-100 bg-[#FFE37F] bg-opacity-50 border-[#6f2920] border-4 top-[90%] left-[42%]'>
            </div>
		</div>
	);
};

export default TimelineSection;
