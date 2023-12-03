export const Stats = (stat) => {
    return (
        <div>
            <div className="statContainer">
                <div id="statType" className="stat">{stat.stat.stat.name}</div>
                <div id="statValue" className="stat">{stat.stat.base_stat}</div>
            </div>
        </div>
    )
}