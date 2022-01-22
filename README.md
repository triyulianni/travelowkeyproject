[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=453406&assignment_repo_type=GroupAssignmentRepo)



# :wave: is216-project

## :man_technologist: IS216 - G10 - Sib-gwang-gwang

| No. | Name | Email  |
|     :---:      |     :---:      |     :---:      |
| 1 | Tri Yulianni Basukie | tybasukie.2020  |
| 2 | Justine Joy | justine.joy.2020  |
| 3 | Randy Chan Wei Yang | randy.chan.2020  |
| 4 | Ling Yu Jun | yujun.ling.2020  |
| 5 | Rhonda Ho Kah Yee | rhonda.ho.2020  |

<br>
<hr>

## :hugs: Project Overview ##

<!-- <div align="center"> -->

<img src="images/README/travellowkeyLogo.png" height="200">
<!-- </div> -->
<p> Travelowkey is a web-based one-stop portal for tourists to be able to plan their itinerary for their trip in Singapore by providing them the resources/information they need. 
For first time tourists, it is difficult to plan on what to do in Singapore and they do not know where to find the resources/information they need. Currently, there are existing applications for tourists to use, however, they have to search for a lot of different applications to meet their needs. For example, a tourist would need to search/view applications such as ‘VisitSingapore’ and ‘Singapore Travel Guide’, which provide tourists with tourism activities information, applications such as ‘Traveloka’ which enable users to book their tourism activities tickets and transport applications such as ‘MyTransport’, where tourists can check the public transport routes. This causes inconvenience for tourists as they would need to find and download/view all these separate applications to use these features. Hence, there is a lack of integration of tourism resources and a need for them to have a centralised web application to help them access the resources they need.
We plan to target first time tourists, age 25 to 34 years old, regardless of gender as Singapore's visitors arrival count for age group, 25 to 34 years old, in 2018 was the highest among the other age groups, according to <a href="https://www.ceicdata.com/en/singapore/visitor-arrivals-by-age "> CEIC</a>.

<!-- https://www.ceicdata.com/en/singapore/visitor-arrivals-by-age -->

</p>
<br>

### System Architecture Diagram: ###

<img src="images/README/architectureDiagram.JPG" height="400">

<br>
A user will be able to interact with the web application which contains HTML, CSS, Javascript and data retrieved from external APIs. The web application will then send a request to the web server which will interact with the file systems which contains HTML, CSS , Javascript and Vue.js in which the web application will receive the response accordingly.
<br>
<br>

### Figma Links: ###

* [Overview of all pages](https://www.figma.com/file/vrEzO39Qp83aleozWQ2gbX/WAD2-Sib-Gwang-Gwang?node-id=0%3A1)

* [Laptop Version](https://www.figma.com/proto/vrEzO39Qp83aleozWQ2gbX/WAD2-Sib-Gwang-Gwang?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=127%3A2&show-proto-sidebar=1)

* [Mobile Version](https://www.figma.com/proto/vrEzO39Qp83aleozWQ2gbX/WAD2-Sib-Gwang-Gwang?node-id=203%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=203%3A2&show-proto-sidebar=1)

<hr>

## :desktop_computer: How to Install and Run Our Web Application (for Developers) ##


### Installation: ###

Please ensure that you have the following applications installed/ account created:
* Google Chrome (Updated to the latest version) 
* Github Account Creation
    * [Tutorial Video](https://www.youtube.com/watch?v=tTvLl138ky4 )
* Github Desktop
    * [Download Link](https://desktop.github.com/)
    * [Tutorial Documentation](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)
* Visual Studio Code
    * [Download Link](https://code.visualstudio.com/download)
    * [Install Live Server Extension on VScode Tutorial Video](https://www.youtube.com/watch?v=KeESffCCihQ)
* For Mac OS users: Mamp
    * [Download Link](https://www.mamp.info/en/windows/)
    * [Tutorial video](https://www.youtube.com/watch?v=rN7JOs34akU)
* For Window 10 users: Wamp 
    * [Download link](https://www.wampserver.com/en/)
    * [Tutorial video](https://www.youtube.com/watch?v=dmnbSpotLb8)
<br>

### Step-by-step Walkthrough to get Development Environment Running: ###

To start off, 
1. For Mac OS: Start your Mamp
    1. Click the **Start** button in the toolbar
    2. If necessary, you will be asked for your administrator password
    3. The button shows the server status by its color:
        1. grey = servers are not running
        2. green = server running
        3. orange = not all servers are running
    4. The web server (Apache or Nginx) starts by default on port 8888, the database server (MySQL) on port 8889. When calling your web page in a web browser, you must enter the web server port at the end of the URL, e.g.: http://localhost:8888
    <br>
    <img src="images/README/1_mac_a.JPG" height="250">&nbsp; &nbsp; &nbsp; &nbsp;<img src="images/README/1_mac_b.JPG" height="250">
    
    For Windows10: Start your Wamp
    1. Ensure that the wamp icon is green
    <br>
    <img src="images/README/1_win.JPG" height="250">

<br>

2. Open Github Desktop 
3. In the **File** menu, click **Clone Repository** <br>
<img src="images/README/3_clone.JPG" height="250">

4. Click the **URL** tab and input this -> https://github.com/is216-supreme/is216-project-group10.git <br>
<img src="images/README/4_url.JPG" height="250">

5. Click **Clone** <br>
<img src="images/README/5_click_clone.JPG" height="250">

6. Repository is cloned! Click **Open in Visual Studio Code** <br>
<img src="images/README/6_vsc.JPG" height="250">

7. On any HTML file, right click and click on **Open with Live Server** <br>
<img src="images/README/7_live_server.JPG" height="250">

Alternatively, after cloning the repository,
1. Click **View on Github** <br><br>
<img src="images/README/1_view_github.JPG" height="250">

2. Click on the green button **Code** and click **Download Zip** <br>
<img src="images/README/2_green.JPG" height="250">

3. Unzip the zip file under your webroot
    * For Mac OS: /Applications/MAMP/htdocs <br>
    <img src="images/README/3_mac_a.jpg" height="250"> &nbsp; <img src="images/README/3_mac_b.jpg" height="250"> &nbsp; <img src="images/README/3_mac_c.jpg" height="250">

    * For Windows 10: C:\wamp64\www <br>
    <img src="images/README/3_win_a.jpg" height="250">

4. Right click on the file that you have unzipped and click **Open with Code** <br>
<img src="images/README/4_open.JPG" height="250">

5. On any HTML file, right click and click on **Open with Live Server** <br>
<img src="images/README/7_live_server.JPG" height="250">
<hr>

## :memo: Things to take note ##

### API Documentation Links: ###
* [Weather API](https://data.gov.sg/dataset/weather-forecast)
* [Youtube API](https://developers.google.com/youtube/v3/getting-started) 
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
* [LTA Datamall API](https://datamall.lta.gov.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf)

### Limitations of API used: ###
* Youtube API (from index.html):
    * Maximum call quota set at 10000 calls per day
* LTA Datamall API (from transport.html): 
    * To sucessfully call the API, you need to click the button in this [link](https://cors-anywhere.herokuapp.com/corsdemo) to get temporary access
    * API call to get name of bus stop only retrieves 500 data sets which means we can only retrieve 500 bus stop's name (Refer to bus.json to see the list of bus stop's name we can retrieve)

### Viewport of our web application: ###
* Laptop: Macbook Pro 2019 16" (1536px WIDTH) <br>
<img src="images/README/viewport.png" height="250">

* Mobile: iPhone 13 Pro (390px WIDTH) <br>
<img src="images/README/viewport2.png" height="250">
<br>
<hr>
<br>

## :people_holding_hands: How to Use Our Web Application (for Visitors to our Website) ##

<br>

1. First off, users will see our index page where they can have access to “Travel Essentials” and the most recent Youtube video on Singapore’s travel guide. 
<img src="images/README/index.png" height="500">
<br>

2. Traveller Essentials serves to equip users with the necessary information of what to do before coming to Singapore, such as Singapore’s currency, local food, emergency hotline, etc.
<img src="images/README/travellerEs.JPG" height="500">
<br>

3. Upon clicking "Find Out More!" under what to eat in Singapore, users will be directed to this page. It is a page where users can have a look at Singapore’s famous food.
<img src="images/README/singaporefood.jpg" height="500">
<br>

4. On the attractions page, users can have a look at we have information about tourists attractions. In this page, the official link to book the attractions is provided and users can also see the latest deals. To have a better gauge of the location of all the attractions, tourists can click “View Map” which will direct them to the Map page.
<img src="images/README/attraction1.jpg" height="500">
<img src="images/README/attraction2.jpg" height="500">
<br>

5. On the map page, users can see all the pinned locations of the attractions shown in the previous page. <br>
<img src="images/README/map.JPG" height="500"><br>
Upon clicking the marker, the location’s name and directions will be displayed. <br>
<img src="images/README/markerzoomin.png"> <br>
They can also click the “Where am I” button to see their current location.
This page also serves to help users to better plan their itinerary as users can choose to visit attractions that are near each other. 
<br>

6. Lastly, should users choose to take public transportation to travel around Singapore, they can visit our Transport page. Here, users can have a read on payment methods for buses and trains. <br>
<img src="images/README/transport1.png"><br>
<img src="images/README/transport2.png">
<br>
MRT Map is also provided for users to better plan their journeys. <br>
<img src="images/README/transport4.png" >

<br>

7. Last but not least, they will be able to see the estimated time of arrival of the buses on the transport page.
If the user is currently at Grand Pacific Hotel, he can key in the bus stop number “01012“ and they will have all the information of arrival times for buses. However, before they key in their bus stop number, they need to press a button in this link to get temporary access. Users only need to request the temporary access once per day. <br>
<img src="images/README/busarrival.jpg"> <br>
To ensure that users know how to look for the bus stop number, a guide is provided to them (the information button). <br>
<img src="images/README/feelinglost.png" height="500">

### Navigation Diagram: ###
<img src="images/README/navigationDiagram.JPG" height="400"> <br>
General path for tourists who plans to visit Singapore but knows nothing about Singapore: <br>
Index -> Traveller Essentials -> Singapore Food -> Attractions -> Map -> Transport


<!-- ## 🤓 Useful Resources ##
* [**Markdown** Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
* [**GOOD** README Example 1](https://github.com/testing-library/cypress-testing-library)
* [**GOOD** README Example 2](https://github.com/typeorm/typeorm)
* [**GOOD** README Example 3](https://github.com/amark/gun)
* [**GOOD** README Example 4](https://github.com/google/leveldb) -->
<br>
<hr>
