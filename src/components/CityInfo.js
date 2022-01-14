import CityImage from './CityImage'
import './CityInfo.css'

const CityInfo = (props) => {
	return (
		<div className='city-info'>
			<CityImage image={props.urlImage} />
			<div className='city-name'>{props.name}</div>
		</div>
	)
}

export default CityInfo
