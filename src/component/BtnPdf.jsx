const BtnPdf = ({ title, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="flex flex-row items-center gap-x-2 justify-center bg-gray-50 rounded-md"
		>
			<p className="text-base text-black py-1">{title}</p>
		</button>
	);
};

export default BtnPdf;
