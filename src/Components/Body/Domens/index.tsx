import { useEffect, useState } from 'react';
import { getDomens, deleteDomen } from '../../../http/domens';
import { Domen } from '../../../interfaces/proxyResponse';

import Modal from './Modal';
import DomenItem from './Domen';

const Domens = () => {
	const [domens, setDomens] = useState<Domen[]>([]);
	const [isShowingModal, setIsShowingModal] = useState<boolean>(false);
	const setListOfDomens = async () => {
		const domensList = await getDomens();
		setDomens(domensList.domens);
	};
	useEffect(() => {
		setListOfDomens();
	}, []);
	const onAddDomen = () => {
		setIsShowingModal(true);
	};
	const onDeleteDomen = (domen: Domen) => {
		const index = domens.findIndex(
			(item) => item.name == domen.name && item.server == domen.server
		);
		setDomens((prev)=>{
			const newArray = [...prev];
			newArray.splice(index,1)
			return newArray
		})
		deleteDomen(domen);
	};

	return (
		<div className="flex flex-col bg-[#323639] p-2 overflow-y-auto h-full justify-around w-full  ">
			<Modal
				isShowing={isShowingModal}
				setIsShowing={setIsShowingModal}
				state={domens}
				setState={setDomens}
			/>
			<div className="overflow-y-auto p-4 border mb-4">
				{domens.map((domen, i) => {
					return (
						<DomenItem
							key={i}
							name={domen.name}
							server={domen.server}
							onDelete={onDeleteDomen}
						/>
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
