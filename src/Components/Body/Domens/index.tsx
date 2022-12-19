import { useEffect, useState } from 'react';
import { getDomens } from '../../../http/domens';
import { Domen } from '../../../interfaces/proxyResponse';
import apacheImg from '../../../images/apache.jpeg';
import nginxImg from '../../../images/nginx.png';
import Modal from './Modal';

const Domens = () => {

	const [domens, setDomens] = useState<Domen[]>([]);
	const [isShowingModal, setIsShowingModal] = useState<boolean>(true);
	const setListOfDomens = async () => {
		const domensList = await getDomens();
		setDomens(domensList.domens);
	};
	useEffect(() => {
		setListOfDomens();
	}, []);
	const onAddDomen = () => {
		setIsShowingModal(true)
	};
	const onDeleteDomen = () => {
		console.log('delete this');
	};


	return (
		<div className="flex flex-col bg-[#323639] p-2 overflow-y-auto h-full justify-around w-full  ">
			<Modal isShowing={isShowingModal} setIsShowing = {setIsShowingModal} state={domens} setState = {setDomens}/>
			<div className="overflow-y-auto p-4 border mb-4">
				{domens.map((domen, i) => {
					return (
						<div
							key={i}
							className="flex flex-row p-4 items-center h-24 border mb-4 justify-between"
						>
							<div className='flex flex-row items-center space-x-4'>
								<div className="text-4xl">{domen.name}</div>
								<div className="bg-red-500 p-2 rounded-md cursor-pointer" onClick={onDeleteDomen}> Delete </div>
							</div>

							<div className="flex flex-row text-sm font-light justify-end items-center">
								<div>Powered by</div>
								<img
									className="w-10"
									src={domen.server == 'apache' ? apacheImg : nginxImg}
									alt={domen.server}
								/>
								<div>{domen.server[0].toUpperCase() + domen.server.slice(1)}</div>
							</div>
						</div>
					);
				})}
			</div>
			<div
				className="flex justify-center items-center bg-green-500 p-5 rounded-md w-1/2 self-center cursor-pointer "
				onClick={onAddDomen}
			>
				Add domen
			</div>
		</div>
	);
};
export default Domens;
