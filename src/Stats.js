export const Stats = (stat) => {
    return (
        <div>
            <p>{stat.stat.stat.name} : {stat.stat.base_stat}</p>
        </div>
    )
}