import { useEffect, useState } from 'react';
import { isProxyOn, proxyOff, proxyOn } from '../../../http/proxy';

const Proxy = () => {
	const [isOn, setIsOn] = useState<boolean>(false);



	useEffect(() => {
		const checkIsProxyOn = async () => {
			return await isProxyOn();
		};
		checkIsProxyOn().then((data)=>{
			if(data.status===1){
				setIsOn(false)
			}
			else if(data.status===2){
				setIsOn(true)
			}
			else{
				throw new DOMException()
			}
		})
	}, []);

	const [isFetching, setIsFetching] = useState<boolean>(false);
	const onProxyOn = async () => {
		setIsFetching(true);
		const data = await proxyOn();
		setIsFetching(false);
		if (data.status == 2) {
			setIsOn(true);
		}
	};
	const onProxyOff = async () => {
		setIsFetching(true);
		const data = await proxyOff();
		setIsFetching(false);
		if (data.status == 1) {
			setIsOn(false);
		}
	};
	return (
		<div className="w-full h-full">
			{/* <div className="w-full h-1/2 bg-[#AAB2BD] mb-4"></div> */}
			{isFetching && <div>Loading...</div>}
			{!isFetching && (
				<div>
					{!isOn && (
						<button
							onClick={onProxyOn}
							className="bg-green-800 p-2 rounded-md transition-all"
						>
							Включить
						</button>
					)}
					{isOn && (
						<button
							onClick={onProxyOff}
							className="bg-red-800 p-2 rounded-md transition-all"
						>
							Выключить
						</button>
					)}
				</div>
			)}
		</div>
	);
};
export default Proxy;
