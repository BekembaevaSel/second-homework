import React from 'react'
import './App.css'
import Facts from './components/Facts'
// import CityImage from './components/CityImage'	
// import CityInfo from './components/CityInfo'

const descriptions = [
	{
		cityImage:
			'https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5ab33f0ac3321babbd43a40d_5ab33f81bcf1bcb6689dc637/scale_1200',
	
		city: 'New-york',
		currentTime: new Date(),
		mainInformation: {
			population: '8,419 millions',
			showplace: 'statue of Liberty',
		},
	},
	{
		cityImage:
			'https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5ab33f0ac3321babbd43a40d_5ab33f81bcf1bcb6689dc637/scale_1200',
	
		city: 'New-york',
		currentTime: new Date(),
		mainInformation: {
			population: '8,419 millions',
			showplace: 'statue of Liberty',
		},
	},
]

function App() {
	return (
		<div className='App'>
			<Facts
				image={descriptions[0].cityImage}
				cityname={descriptions[0].city}
				currentTime={descriptions[0].currentTime}
				mainInformation={descriptions[0].mainInformation}
			/>
			<Facts
				image={descriptions[1].cityImage}
				cityname={descriptions[1].city}
				currentTime={descriptions[1].currentTime}
				mainInformation={descriptions[1].mainInformation}
			/>
		</div>
	)
}

export default App
