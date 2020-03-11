**<h1>Crime Check</h1>**

**<h2>Software Engineering Immersive – Project 02</h2>**


This was my second project of the Software Engineering Immersive course – week 6

**<h2>Built with</h2>**
<ol>
<li>React</li>
<li>https://data.police.uk/docs/method/crime-categories/</li>
<li>GitHub</li>
<li>Bulma</i>
<li>MapBox</li>
</ol>

**<h2>Deployment</h2>**
This website is deployed on Heroku at https://crimecheck.herokuapp.com/

**<h2>Getting Started</h2>**
Use the clone button to download the website source code. From the root directory type 'npm run server' in the terminal. The project will run on localhost:8000.

**<h2>Website Architecture</h2>**
The app is composed of a Homepage that contains a map provided by Mapbox, crime data API is provided by the Metropolitan Police and a search option that filters through the crime categories. 
 
<img src="https://i.imgur.com/bSWocIj.png"> 

**<h2>1. Home/Index Page</h2>**


<p>a. A section with a select/dropdown menu that lists the specific categories available on the API – the user can select a category and type in the postcode , click the “Filter Crime” button and will be shown the number of found crimes and their placement of the map with red dots as the markers.</p>
<p>b. The second section consists of the map provided by the MapBox that has features as “Marker”, “Popup” and “Geocoder” attached to it. </p>

**<h2>The API</h2>**

The API has been provided by the Metropolitan Police and it is being updated every month. Being a complex API with a big load of data and the actual high crime numbers we had to limit our search to one search filter at a time. 
The Police API call limit operates using a 'leaky bucket' algorithm as a controller. This allows for infrequent bursts of calls, and allows you to continue to make an unlimited amount of calls over time.

Due to this and our machines not being able to handle too much data(at least not in a user friendly way, having a prolonged waiting time), we have limited the shown data to maximum 300 results. If  the search result number exceeded it, we could risk having the server crashing with a HTTP 429 error. 

<p>Below is an excerpt of code from the Home Page which was built as a classical React component.</p>

<img src="https://i.imgur.com/MnVV5lT.png" width= 500px height= 600px>

**<h2>MapBox</h2>**

By carefully reading the documentation MapBox provides on how to set up the rendering of the map, we have managed to get it up and running in no time. As a security measure we have placed our MapBox token in a **.env file.**  What has proved to be a more tedious process was turning the coordinates of a certain crime(provided by the API as a string) into actual markers on the map. 

<p>The process of rendering the data on the map was possible by utilising a classical React component using a map function that maps through different categories of crimes provided by the API. The Pop Ups have been placed using the same coordinates. </p>


<p>Styling has been done by using Bulma.</p>
<img src="https://i.imgur.com/jWYCzCI.png" width= 500px height= 600px>

**<h2>Challenges and future improvements</h2>**
As mentioned before, one of the main challenges has been placing the provided coordinates on the map. We had to create a second axios get request and map through the crimes and associated coordinates. This has been a new process for us and it took a while to work through.<br>

<img src="https://i.imgur.com/RA0704Y.png" height= 200px> 

<p>As improvement, I believe that a refactoring of the code might be beneficial and could help speed up the process of loading the page which at the moment is rather slow. The possibility to search through the crimes based on the date and more information on the crime would definitely be a great step forward. </p>
