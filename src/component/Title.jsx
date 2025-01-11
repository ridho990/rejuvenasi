const Title = ({ title, icons }) => {
	return (
		<div className="flex flex-row items-center gap-x-2 justify-center">
			<img src={icons} className="aspect-square w-6 h-6 object-contain" />
			<h1 className="text-xl font-bold text-white">{title}</h1>
		</div>
	);
};

export default Title;
