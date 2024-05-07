import { useSearchParams } from 'react-router-dom'
import { locations } from '../data.json'

const LocationIndicator = ({ title, active, number }) => {
    return <li className="location-indicator flex items-center gap-3">
        <div className={`${active && 'active'} text-sm text-white font-medium location grid items-center justify-center`}>{number}</div>
        <div className="text-uppercase text-white leading-text flex flex-column gap-1">
            <span className="text-xsm step">step {number}</span>
            <h2 className="text-sm leading-sm tracking-wide">{title}</h2>
        </div>
    </li>
}

const Sidebar = () => {
    const [ searchParams ] = useSearchParams()
    const tab = Number(searchParams.get('tab'))
    return <aside className="sidebar">
        <ul className="flex flex-column" style={{ gap: '1rem' }}>
            {locations.map((item, i) => {
                return (<LocationIndicator key={item.title} title={item.title} active={tab == i+1} number={i + 1}/>)
            })}
        </ul>
    </aside>
}

export default Sidebar;