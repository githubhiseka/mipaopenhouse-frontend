import Owl from "../assets/owl.svg";

const AboutUsSection = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row bg-[#FFE37F] w-full pt-20 md:pt-32 justify-center">
			<img className="h-96 mt-10 md:mt-0" src={Owl} alt="Owl" />
			<div className="w-100 md:ml-32 md:w-96 ">
				<p className="font-extrabold text-6xl pt-12 text-center md:text-left text-[#283C26]">
					ABOUT US
				</p>
				<p className="text-justify text-xl px-8 md:px-0 pt-6 text-[#283C26] font-normal">
					“MIPA Open House” adalah program BEM FMIPA UI yang
					memperkenalkan kampus dan kehidupan mahasiswa kepada siswa
					SMA. Acara ini mencakup tur kampus, seminar, workshop, dan
					Intip Departemen.
				</p>
			</div>
		</div>
	);
};

export default AboutUsSection;
