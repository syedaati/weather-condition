const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3667db0ebdmsh79b3b6a8fd8c0aep1f2724jsn088ac3214c0d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
var temp=document.getElementById("temp");
const getweather=(city)=>{
	cityName.innerHTML= city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		sunset.innerHTML= response.sunset

		tmpr.innerHTML=response.temp
		badal.innerHTML = response.cloud_pct
		mahs.innerHTML = response.feels_like
		nam.innerHTML = response.humidity
		zyt.innerHTML=response.max_temp
		kamt.innerHTML=response.min_temp
		tulu.innerHTML=response.sunrise
		gurub.innerHTML=response.sunset
		deg.innerHTML=response.temp
		hawa.innerHTML=response.wind_degrees
		rftar.innerHTML=response.wind_speed
		cityName1.innerHTML= city
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
getweather(city.value);

})

