import React from 'react'
import './App.css'
import Facts from './components/Facts'

const descriptions = {
	cityImage:
		'https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5ab33f0ac3321babbd43a40d_5ab33f81bcf1bcb6689dc637/scale_1200',

	city: 'New-york',
	currentTime: new Date(),
	mainInformation: {
		population: '8,419 millions',
		showplace: 'statue of Liberty',
	},
}

function App() {
	return (
		<div className='App'>
			<Facts
				image={descriptions.cityImage}
				city={descriptions.city}
				currentTime={descriptions.currentTime}
				mainInformation={descriptions.mainInformation}
			/>
		</div>
	)
}

export default App
