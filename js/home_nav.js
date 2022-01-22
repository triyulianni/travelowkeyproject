
const app = Vue.createApp({

    data(){
        return{
            forecast: "",
            humidity: "",
            temperature: "",
            wind: "",
            weather_logo_src: "",
            hamToggle: "",
            YOUTUBE_API_KEY: "AIzaSyDVHR9hMMVhf_TIkT4zAU3cznCdiHqXxGI"
            /* ONLY PUT IN API KEY RIGHT BEFORE SUBMISSION: AIzaSyBcgXMVgjPwVtwCMvINPhGWxvoz1wjAvKE */
            // Randy's key: "AIzaSyBcgXMVgjPwVtwCMvINPhGWxvoz1wjAvKE"
        }
    },

    methods: {
        get_current_date(){
            /* https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1 */
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            return today
        },

        get_yesterday_date(){
            /* 86400000 = 24 * 60 * 60 * 1000 */
            var yesterday = new Date(Date.now() - 86400000);
            var dd = String(yesterday.getDate()).padStart(2, '0');
            var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
            var yyyy = yesterday.getFullYear();

            yesterday = yyyy + '-' + mm + '-' + dd;
            
            return yesterday
        },

        retrieve_weather(){
            let curr_date = {date : this.get_current_date()}
            let url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast/"
            axios.get(url, {params : curr_date})
            .then(response => {
                /* If api data not yet updated for the day (happens when it is too early in the morning: 12am-5am etc) then we call API on yesterday's date instead */
                if (response.data.items.length < 1){
                    let yesterday_date = {date : this.get_yesterday_date()}
                    axios.get(url, {params : yesterday_date})
                    .then(response => {
                        this.update_weather_details(response.data.items[0].general)
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                }else{
                    this.update_weather_details(response.data.items[0].general)
                }
                

            })
            .catch(error => {
                console.log(error.message)
            })
        },

        update_weather_details(data){
            /* Only capturing first two words of forecast as some forecast data is too long e.g. Party Cloudy in the early morning */
            let fore_arr = data.forecast.split(' ')
            if (fore_arr.length > 2){
                var forecast = fore_arr.slice(0, 2).join(" ")
            }else{
                var forecast = data.forecast
            }
            
            let humidity = ((data.relative_humidity.high + data.relative_humidity.low) / 2).toFixed(0)

            let temperature = ((data.temperature.high + data.temperature.low) / 2).toFixed(0)

            let wind = ((data.wind.speed.high + data.wind.speed.low) / 2).toFixed(0)

            this.forecast = forecast
            this.humidity = "Humidity: " + humidity + "%"
            this.temperature = temperature + "°"
            this.wind = "Wind: " + wind + " km/h"

            /* Updating weather icon based on keywords in the forecast data */
            if (forecast.toLowerCase().includes("thunder")){
                this.weather_logo_src = "images/weather_icons/thunder_icon.png"
            }else if (forecast.toLowerCase().includes("shower")){
                this.weather_logo_src = "images/weather_icons/showers_icon.png"
            }else if (forecast.toLowerCase().includes("rain")){
                this.weather_logo_src = "images/weather_icons/rain_icon.png"
            }else if (forecast.toLowerCase().includes("cloud")){
                this.weather_logo_src = "images/weather_icons/cloud_icon.png"
            }else{
                this.weather_logo_src = "images/weather_icons/sun_icon.png"
            }
            
        },

        call_youtube_api() {

            var search_term = encodeURI("singapore guide");
            var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search_term}&key=${this.YOUTUBE_API_KEY}`;
        
            fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("iframe_vid").setAttribute("src", `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
            });
        }

    },

    created: function(){
        this.retrieve_weather()
        this.call_youtube_api()
    }
})

app.mount("#app")

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}