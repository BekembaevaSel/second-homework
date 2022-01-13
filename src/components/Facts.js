function Facts(props){
    
    return (
        <div className="Facts">
            <div className="city-info">
                <img className="city-image" src={props.image} alt="photoo"></img>
                <div className="city-name">{props.city}</div>
            </div>
            <div className="current-time">{props.currentTime.toString()}</div>
            <div className="city-population">{props.mainInformation.population}</div>
            <div className="city-showplace">{props.mainInformation.showplace}</div>
        </div>
    )
}
export default Facts;