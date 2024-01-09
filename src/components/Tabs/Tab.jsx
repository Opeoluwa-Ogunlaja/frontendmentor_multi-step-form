const Tab = ({ isActive, children }) => {
    return <div className={`tab${isActive ? ' active' : ''}`}>
        {children}
    </div>
}

export default Tab