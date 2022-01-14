import CityInfo from './CityInfo'
import CurrentTime from './CurrentTime'
import Population from './Population'
import Showplace from './Showplace'

function Facts(props) {
	return (
		<div className='Facts'>
			<CityInfo
				name={props.cityname}
				urlImage={props.image}
			/>
			<CurrentTime time={props.currentTime} />
			<Population population={props.mainInformation.population}/>
			<Showplace showplace={props.mainInformation.showplace}/>
		</div>
	)
}
export default Facts
