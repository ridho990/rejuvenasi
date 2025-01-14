import { useState, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';

import {
	logoBpt,
	logoRejuvenasi,
	iconBook,
	iconCalendar,
	iconChat,
	adArt,
	perduptar,
	permen,
	pembina,
	poster,
	iconClose,
	aspirasi,
	jadwalPiket,
} from '../constant/data.js';
import Title from '../component/Title.jsx';
import BtnPdf from '../component/BtnPdf.jsx';
import Schedule from '../component/Schedule.jsx';
import getSchedulePray from '../api/getSchedulePray.js';

const Home = () => {
	const [time, setTime] = useState('');
	const [date, setDate] = useState('');
	const [url, setUrl] = useState(adArt);
	const [isImg, setIsImg] = useState(false);
	const [schedulePray, setSchedulePray] = useState({});
	const [isIdle, setIsIdle] = useState(false);

	// Fungsi callback ketika pengguna idle
	const onIdle = () => {
		setIsIdle(true);
	};

	// Fungsi callback ketika pengguna aktif lagi
	const onActive = () => {
		setIsIdle(false);
	};

	// Pengaturan idle timer (misalnya 5 menit)
	useIdleTimer({
		timeout: 1000 * 60 * 5, // 5 menit
		onIdle,
		onActive,
		debounce: 500,
	});

	const updateTime = () => {
		const now = new Date();
		const formattedTime = now
			.toLocaleTimeString('en-GB', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
				timeZone: 'Asia/Jakarta',
			})
			.replace('.', ':');
		setTime(formattedTime);
	};

	const updateDate = () => {
		const now = new Date();
		const formattedDate = now.toLocaleDateString('id-ID', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			timeZone: 'Asia/Jakarta',
		});
		setDate(formattedDate);
	};

	useEffect(() => {
		const timeInterval = setInterval(updateTime, 1000);

		updateDate();

		return () => clearInterval(timeInterval);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getSchedulePray();
			setSchedulePray(response?.jadwal);
			console.log(response?.jadwal);
		};

		fetchData(); // Memanggil fungsi async
	}, []);

	const handleBtnPdfClick = (url) => {
		setIsImg(false);
		setUrl(url);
	};

	return (
		<>
			<div className="font-poppins w-[100%] h-screen flex flex-col">
				<div className="flex flex-row flex-grow">
					<div className="bg-gray-100 flex-[3] p-7">
						<div className="flex flex-row gap-x-4 justify-center border-b border-[#F4F4F4] pb-4">
							<img
								className="aspect-square object-contain w-14"
								src={logoBpt}
								alt="Logo Bpt"
							/>
							<img
								className="aspect-square object-contain w-[60px]"
								src={logoRejuvenasi}
								alt="Logo Rejuvenasi"
							/>
						</div>

						<div className="py-4 px-2 flex flex-col gap-y-3 border-b border-[#F4F4F4]">
							<Title title="BUKU" icons={iconBook} />
							<BtnPdf title="AD/ART" onClick={() => handleBtnPdfClick(adArt)} />
							<BtnPdf
								title="Perduptar"
								onClick={() => handleBtnPdfClick(perduptar)}
							/>
							<BtnPdf
								title="Permen"
								onClick={() => handleBtnPdfClick(permen)}
							/>
						</div>

						<div className="py-4 px-2 flex flex-col gap-y-3 border-b border-[#F4F4F4]">
							<Title title="JADWAL" icons={iconCalendar} />
							<BtnPdf
								title="Pembina"
								onClick={() => handleBtnPdfClick(pembina)}
							/>
							<BtnPdf
								title="Piket Jaga"
								onClick={() => handleBtnPdfClick(jadwalPiket)}
							/>
						</div>

						<div className="py-4 px-2 flex flex-col gap-y-3 border-b border-[#F4F4F4]">
							<Title title="ASPIRASI" icons={iconChat} />
							<BtnPdf
								title="Aspirasi"
								onClick={() => handleBtnPdfClick(aspirasi)}
							/>
							<BtnPdf
								title="Scan Barcode"
								onClick={() => handleBtnPdfClick(poster)}
							/>
						</div>
					</div>

					<div className="flex-[13] relative">
						{isIdle && (
							<div className="w-full h-full bg-black/80 absolute top-0 right-0 flex justify-center items-center">
								<iframe
									width="95%"
									height="95%"
									src="https://www.youtube.com/embed/iLYz0D1oVLI?autoplay=1&loop=1&playlist=iLYz0D1oVLI"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</div>
						)}

						<iframe src={url} width="100%" height="100%"></iframe>
					</div>
				</div>

				<div className="bg-gray-300 h-[76px] py-2 flex items-center justify-center box-border">
					<Schedule time="SHUBUH" clock={schedulePray.subuh} />
					<Schedule time="DZUHUR" clock={schedulePray.dzuhur} />
					<Schedule time="ASHAR" clock={schedulePray.ashar} />
					<Schedule time="MAGHRIB" clock={schedulePray.maghrib} />
					<Schedule time="ISYA" clock={schedulePray.isya} />

					<div className="flex-[1] flex items-center justify-end pr-5">
						<div className=" flex flex-col items-end justify-center ">
							<p className="font-semibold text-sm text-white text-right tracking-wide">
								{time}
							</p>
							<p className="font-semibold text-sm text-white text-right tracking-wide">
								{date}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
