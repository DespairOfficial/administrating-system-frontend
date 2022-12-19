import React, { useState } from 'react';
import { addDomen } from '../../../../http/domens';
import { Domen } from '../../../../interfaces/proxyResponse';
import styles from './Modal.styles.module.scss';

interface ModalProps {
	isShowing: boolean;
	setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
	state: Domen[];
	setState: React.Dispatch<React.SetStateAction<Domen[]>>;

}

const Modal = ({ isShowing, setIsShowing, state, setState }: ModalProps) => {
	const [newDomenName, setNewDomenName] = useState<string>('');
	const [newServerName, setNewServerName] = useState<string>('apache');
	const onSubmitAdding = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setNewDomenName('');
		setIsShowing(false);
		const newObj = {
			name: newDomenName,
			server: newServerName
		}
		await addDomen(newObj)
		setState((prev)=>{return [...prev, newObj ] })
		
	};

	if (isShowing) {
		return (
			<div className={styles.modalWrapper}>
				<div className={styles.modalBg}></div>
				<div className={styles.modal}>
					<div className={styles.main}>
						<form onSubmit={(e) => onSubmitAdding(e)}>
							<div className={styles.formHead}>
								<p className="text-2xl">Enter new domain name:</p>
								<input
									value={newDomenName}
									onChange={(e) => setNewDomenName(e.target.value)}
									className={styles.input}
									type="text"
									placeholder="Your new domain name"
								/>
								<p className="text-2xl">Choose server:</p>
								<select
									className={styles.select}
									value={newServerName}
									onChange={(e) => setNewServerName(e.target.value)}
									
								>
									<option value="apache">Apache</option>
									<option value="nginx">Nginx</option>
								</select>
							</div>
							<div className={styles.options}>
								<button type="submit">Add</button>
							</div>
						</form>
					</div>
					<div className={styles.close} onClick={() => setIsShowing(false)}>
						<svg
							width="36px"
							height="36px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill="#FF4512"
						>
							<g data-name="Layer 2">
								<g data-name="close">
									<rect
										width="24"
										height="24"
										transform="rotate(180 12 12)"
										opacity="0"
									/>
									<path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
		);
	} else return null;
};
export default Modal;
