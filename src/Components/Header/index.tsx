import { NavLink } from 'react-router-dom'

const Header = ()=>{
	return(
		<div className='flex bg-[#202124] p-5 space-x-5 text-3xl h-[10%] items-center'>
			<NavLink to="/domens"  className={({ isActive }) => (isActive ? 'font-bold': 'inactive')}>Domens</NavLink>
			<NavLink to="/proxy"  className={({ isActive }) => (isActive ? 'font-bold' : 'inactive')}>Proxy</NavLink>
		</div>
	)
}
export default Header