import apacheImg from '../../../../images/apache.jpeg';
import nginxImg from '../../../../images/nginx.png';
import { Domen } from '../../../../interfaces/proxyResponse';

interface DomenProps {
	name: string;
	server: string;
	onDelete:  (domen: Domen)=> void
}

const DomenItem = ({ name, server, onDelete }: DomenProps) => {
	return (
		<div className="flex flex-row p-4 items-center h-24 border mb-4 justify-between">
			<div className="flex flex-row items-center space-x-4">
				<div className="text-4xl">
					<a href={"http://"+name}>{name}</a>
					</div>
				<div
					className="bg-red-500 p-2 rounded-md cursor-pointer"
					onClick={() => onDelete({ name, server })}
				>
					Delete
				</div>
			</div>

			<div className="flex flex-row text-sm font-light justify-end items-center">
				<div>Powered by</div>
				<img
					className="w-10"
					src={server == 'apache' ? apacheImg : nginxImg}
					alt={server}
				/>
				<div>{server[0].toUpperCase() + server.slice(1)}</div>
			</div>
		</div>
	);
};
export default DomenItem;
