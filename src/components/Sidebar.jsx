const LocationIndicator = ({ title, active, number }) => {
    return <li className="location-indicator flex items-center gap-3">
        <div className={`${active && 'active'} text-xsm text-white location grid items-center justify-center`}>{number}</div>
        <div className="text-uppercase text-white leading-text flex flex-column gap-1">
            <span className="text-xsm step">step {number}</span>
            <h2 className="text-sm leading-sm tracking-wide">{title}</h2>
        </div>
    </li>
}

const locations = [ 'Your info', 'Selelct Plans', 'Add-ons', 'Summary'  ]

const Sidebar = () => {
    return <aside className="sidebar">
        <ul className="flex flex-column" style={{ gap: '1rem' }}>
            {locations.map((item, i) => {
                return (<LocationIndicator key={item} title={item} active={i == 0} number={i + 1}/>)
            })}
        </ul>
    </aside>
}

export default Sidebar;