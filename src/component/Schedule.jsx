const Schedule = ({ time = 'Shubuh', clock = '15:00' }) => {
	return (
		<div className="flex-[1] flex flex-row items-center justify-center border-r border-white px-5">
			<div className="w-full">
				<div className="bg-succes py-[2px] flex justify-center">
					<p className="text-sm font-bold text-white">{time}</p>
				</div>
				<div className="bg-white py-[2px] flex justify-center">
					<p className="text-sm font-bold text-black">{clock}</p>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
