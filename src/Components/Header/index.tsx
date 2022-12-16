import { NavLink } from 'react-router-dom'

const Header = ()=>{
	return(
		<div className='bg-[#323133] text-white p-5 space-x-5 text-xl'>
			<NavLink to="/domens"  className={({ isActive }) => (isActive ? 'font-bold': 'inactive')}>Domens</NavLink>
			<NavLink to="/proxy"  className={({ isActive }) => (isActive ? 'font-bold' : 'inactive')}>Proxy</NavLink>
			<NavLink to="/dns"  className={({ isActive }) => (isActive ? 'font-bold' : 'inactive')}>DNS</NavLink>
		</div>
	)
}
export default Header