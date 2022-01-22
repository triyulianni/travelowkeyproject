// Create a new Vue instance

const main = Vue.createApp({

    // Data Properties
    data() {
        return {
            bus_stop_code: "",
            bus_stop_info: "",

            bus_num_arr: [],
            next_bus1: "",
            next_bus2: "",
            next_bus3: "",
            error_msg_arrival_time: "",

            bus_destination_road: "",
            bus_destination_description: "",
            flag: false,
            error_msg_destination: "",

            load_sea: "<img style='vertical-align: middle;height: 10px; padding-bottom: 4px;' src='./images/transport/green.png'>",
            load_sda: "<img style=' vertical-align: middle;height: 10px; padding-bottom: 4px;' src='./images/transport/yellow.png'>",
            load_lsd: "<img style='vertical-align: middle;height: 10px; padding-bottom: 4px;' src='./images/transport/red.png'>",

            wheelchair: "<img style='height: 14px; width: auto; padding-right: 2px;padding-bottom: 3px;' class='wheelchair'  src='./images/transport/disabled.png'>",

        }
    },

    methods: {

        // get number of minutes before bus reaches the bus stop
        minutes_msg(next_bus_timing) {
            console.log("=== START of next_bus_timing() ===")
            //busArrival1 = busArrival1.substring(13, 19)

            // if bus services are operating
            if (next_bus_timing != "") {
                next_bus_timing = next_bus_timing.substring(14, 16)
                console.log("next bus arriving in " + next_bus_timing)

                var today_timing = new Date();
                today_timing = today_timing.toLocaleString('en-GB');
                //todayTiming = todayTiming.substring(12, 20);
                today_timing = today_timing.substring(15, 17);
                console.log("today minutes is " + today_timing)

                let arriving_in = ""
                if (next_bus_timing > today_timing) {
                    arriving_in = (next_bus_timing - today_timing).toString()
                } else if (next_bus_timing < today_timing) {
                    arriving_in = (next_bus_timing - today_timing + 60).toString()
                } else {
                    arriving_in = "Arriving"
                }
                // console.log(arriving_in)
                console.log("=== END of next_bus_timing() ===")
                return arriving_in

                // if no operating buses or no estimate available
            } else {
                return "Not Available"
            }

        },

        // add visual indicators of different loading values (e.g green -> Seats available)
        bus_load(load) {
            // SEA (for Seats Available)
            // SDA (for Standing Available)
            // LSD (for Limited Standing)
            console.log("=== START of bus_load() ===")
            let load_type = ""

            if (load == "SEA") {
                load_type = this.load_sea

            } else if (load == "SDA") {
                load_type = this.load_sda
            } else {
                load_type = this.load_lsd
            }
            console.log("=== END of bus_load() ===")
            return load_type
        },

        // display wheelchair icon for wheelchair accessible buses
        bus_feature(feature) {
            console.log("=== START of bus_feature() ===")

            let output = ""
            if (feature == "WAB") {
                output = this.wheelchair
            } else {
                output = "&nbsp"
            }
            console.log("=== END of bus_feature() ===")
            return output


        },
        // get bus destination road name and description
        bus_destination() {
            console.log("=== START of bus_destination() ===")
            // if user press enter or click search button without keying in any value
            if (this.bus_stop_code == "" || isNaN(this.bus_stop_code)) {
                alert("Please key in a bus stop number in the search bar!")
            } else {
                // get api point
                let api_url = "http://datamall2.mytransport.sg/ltaodataservice/BusStops"
                // console.log(url)
                var config = {
                    "headers": {
                        "AccountKey": "HNH6IIKASKGFTHfON4Fdxw=="
                    }
                };
                // resolve cors error
                // but need to request for temporary access - https://cors-anywhere.herokuapp.com/corsdemo
                let url = "https://cors-anywhere.herokuapp.com/" + api_url

                axios.get(url, config)
                    .then(response => {
                        this.error_msg_destination = ""
                        // console.log(response.data.value)
                        let destination_info_arr = response.data.value
                        console.log(this.bus_stop_code)
                        this.bus_destination_road=""
                        this.bus_destination_description=""

                        for (var i = 0; i < destination_info_arr.length; i++) {
                            if (destination_info_arr[i].BusStopCode == this.bus_stop_code) {
                                this.bus_destination_road = destination_info_arr[i].RoadName
                                this.bus_destination_description = destination_info_arr[i].Description
                                this.flag = true
                                // console.log(this.bus_destination_road)
                            }
                        }
                        console.log("=== END of bus_destination() ===")
                        this.bus_num_info()
                    })
                    .catch(error => {

                        this.error_msg_destination = [{ entry: 'There was an error: ' + error.message }]
                    })
            }
        },


        bus_num_info() {
            console.log("=== START of bus_num_info() ===")

            // get api point
            let api_url = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=" + this.bus_stop_code

            var config = {
                "headers": {
                    // "Access-Control-Allow-Origin": "http://127.0.0.1:5502/",
                    // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                    // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
                    "AccountKey": "HNH6IIKASKGFTHfON4Fdxw=="
                }
            };

            // resolve cors error
            // but need to request for temporary access - https://cors-anywhere.herokuapp.com/corsdemo
            let url = "https://cors-anywhere.herokuapp.com/" + api_url

            axios.get(url, config)
                .then(response => {
                    console.log(response.data.Services)

                    this.error_msg_arrival_time=""

                    if (response.data.Services.length==0) {
                        alert("No Operating Bus Service")
                    }
                    // Show bus arrival timing
                    this.bus_num_arr = response.data.Services
                    this.bus_stop_info = ""
                    this.bus_stop_info += `<table class="table table-striped table-hover table-responsive-sm">`
                    this.bus_stop_info += `
                    <colgroup>
                        <col class="col-md-4">
                        <col class="col-md-2">
                        <col class="col-md-2">
                        <col class="col-md-3">
                    </colgroup>
                    
                    <thead>
                        <tr>
                            <th>BUS NO.</th>
                            <th>NEXT BUS</th>
                            <th>NEXT 2ND BUS</th>
                            <th>NEXT 3RD BUS</th>
                        </tr>
                    </thead>

                    <tbody>
                    `
                    for (bus_info of this.bus_num_arr) {
                        // console.log(this.minutes_msg(bus_info.NextBus.EstimatedArrival))
                        // console.log(this.minutes_msg(bus_info.NextBus2.EstimatedArrival))
                        // console.log(this.minutes_msg(bus_info.NextBus3.EstimatedArrival))

                        this.bus_name = bus_info.ServiceNo

                        this.next_bus1 = this.minutes_msg(bus_info.NextBus.EstimatedArrival)
                        this.next_bus2 = this.minutes_msg(bus_info.NextBus2.EstimatedArrival)
                        this.next_bus3 = this.minutes_msg(bus_info.NextBus3.EstimatedArrival)

                        let load1 = this.bus_load(bus_info.NextBus.Load)
                        let load2 = this.bus_load(bus_info.NextBus2.Load)
                        let load3 = this.bus_load(bus_info.NextBus3.Load)

                        let feature1 = this.bus_feature(bus_info.NextBus.Feature)
                        let feature2 = this.bus_feature(bus_info.NextBus2.Feature)
                        let feature3 = this.bus_feature(bus_info.NextBus2.Feature)

                        this.bus_stop_info += `
                        <tr>
                            <td class="fw-bold">${this.bus_name}</td>
                            <td>${load1} ${this.next_bus1} ${feature1}</td>
                            <td>${load2} ${this.next_bus2} ${feature2}</td>
                            <td>${load3} ${this.next_bus3} ${feature3}</td>
                        </tr>
                        `
                    }

                    this.bus_stop_info += `
                        <tr>
                            <td colspan='4'> <strong>Legend: </strong>  
                            &nbsp;&nbsp&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;
                            ${this.wheelchair}
                            Wheelchair Accessible&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;${this.load_sea} &nbsp; Seats Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;${this.load_sda} &nbsp; Standing Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;${this.load_lsd} &nbsp; Limited Standing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </td>
                        </tr>

                        </tbody>
                    <table class="table table-light">`
                    // console.log(this.bus_stop_info)

                    
                    console.log("=== END of bus_num_info() ===")
                })
                .catch(error => {
                    this.error_msg_arrival_time = [{ entry: 'There was an error: ' + error.message }]

                })
        }
    }
})

// Link this Vue instance with <div id="main">
main.mount("#main")
