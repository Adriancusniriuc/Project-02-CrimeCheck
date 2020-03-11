import React, { version } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './style/main.scss'
import 'bulma'

import CrimeMap from './components/CrimeMap'


const App = () => (
  <BrowserRouter>
    <main>
      <div>
        <div>
          <CrimeMap />
        </div>
      </div>
    </main>
  </BrowserRouter>
)

//to start server use server

ReactDOM.render(
  <App />,
  document.getElementById('root')
)




mapRef = React.createRef()
  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  handleGeocoderViewportChange = (viewport) => {
    console.log(viewport)
    const geocoderDefaultOverrides = { transitionDuration: 3000 }
    this.setState({ viewport: { latitude: viewport.latitude, longitude: viewport.longitude, zoom: viewport.zoom } })
    // this.apiCall()
    console.log(this.state.viewport)
    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }




  key={index}
latitude={parseFloat(postcode.location.latitude)}
longitude={parseFloat(postcode.location.longitude)}  





apiCall = async ()=> {
  try {
    const response =  await axios.get(`https://data.police.uk/api/crimes-street/all-crime?lat=${this.state.viewport.latitude}&lng=${this.state.viewport.longitude}`)
    const data = response.data
    // console.log(data, 'data')
    // .filter(point => !isNaN(point.longitude) || !isNaN(point.longitude))
    this.setState({ crimes: data })
  } catch (err) {
    console.log(err)
  }
}
async componentDidMount() {  
  this.apiCall()
}





WORKING version


import React from 'react'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import MapGL, { Marker, Popup } from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

// import PubCard from './PubCard'

export default class PubIndex extends React.Component {
state = {
  postcodes: [],
  pubs: [],
  viewport: {
    latitude: 51.5074,
    longitude: 0.1278,
    zoom: 7
  }
}

async componentDidMount() {
  try {
    const res = await axios.get('/api/pubs')
    this.setState({ pubs: res.data })
    this.getPostcodes()
  } catch (error) {
    console.log(error)
  }
}
 
async getPostcodes () {
  const postcodes = this.state.pubs.map( pub => pub.postcode)
  const res = await axios.post('https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes', { postcodes })
  console.log(res.data.result)
  // console.log(postcodes.result)
  this.setState({ postcodes: res.data.result })
}

render() {
  if (!this.state.postcodes) return null
  console.log(this.state.postcodes.map(postcode => postcode.result.longitude))
  return (
    <MapGL
      mapboxApiAccessToken={mapboxToken}
      height={'100vh'}
      width={'100vw'}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      zoom={10}
      latitude= {51.5074}
      longitude= {0.1278}
    >
      {this.state.postcodes.map((postcode, index) => {
        return <Marker
          key={index.toString()}
          latitude={postcode.result.latitude}
          longitude={postcode.result.longitude} >
          <div className="marker"/>
        </Marker>
      } )}

      {this.state.postcodes.map(postcode => {
        <Popup
          tipSize={5}
          latitude={postcode.result.latitude}
          longitude={postcode.result.longitude}>
          <p>works</p>

        </Popup> 
        //if pub has the same post code as one of the post code = post.query and thehn map all the stuff you ant from the obj
      })}
     
    </MapGL>
  )
}
}



<div>
            <div className='marker'>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/0a/8c/68/4d/abbey-bar-in-the-minories.jpg' alt='AbbeyBar' />
            </div>
          </div>







    {/* {this.state.postcodes.map(postcode => {
        if (this.state.showInfo)
          return (
            <Popup
              tipSize={5}
              anchor="bottom-right"
              closeButton={false}
              closeOnClick={true}
              onClose={ ()=> this.setState({ showInfo: false }) }
              latitude={postcode.result.latitude}
              longitude={postcode.result.longitude}>
              <p>Pop Up Works</p>

            </Popup> 
          //if pub has the same post code as one of the post code = post.query and thehn map all the stuff you ant from the obj
          )
      })} */}






      import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React from 'react'
import axios from 'axios'
import MapGL, {  Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

// import PubCard from './PubCard'

export default class PubIndex extends React.Component {
state = {
  postcodes: [],
  pubs: [],
  viewport: {
    latitude: 51.5074,
    longitude: 0.1278,
    zoom: 9
  }
  // showInfo: false
}

mapRef = React.createRef()
handleViewportChange = (viewport) => {
  this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  })
}

handleGeocoderViewportChange = (viewport) => {
  // console.log(viewport)
  const geocoderDefaultOverrides = { transitionDuration: 1000 }
  this.setState({ viewport: { latitude: viewport.latitude, longitude: viewport.longitude, zoom: viewport.zoom } })
  // this.apiCall()
  // console.log(this.state.viewport)
  return this.handleViewportChange({
    ...viewport,
    ...geocoderDefaultOverrides
  })
}



async componentDidMount() {
  console.log('hello')
  try {
    const res = await axios.get('/api/pubs')
    this.setState({ pubs: res.data })
    this.getPostcodes()
  } catch (error) {
    console.log(error)
  }
}
 
async getPostcodes () {
  const postcodes = this.state.pubs.map( pub => pub.postcode)
  const res = await axios.post('https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes', { postcodes })
  console.log(res.data.result)
  // console.log(postcodes.result)
  this.setState({ postcodes: res.data.result })
}

render() {
  console.log(1)
  if (!this.state.postcodes) return null
  console.log(this.state.postcodes.map(postcode => postcode.result.longitude))
  return (
    <MapGL
      mapboxApiAccessToken={mapboxToken}
      ref={this.mapRef}
      {...this.state.viewport}
      height={'100vh'}
      width={'100vw'}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      // zoom={10}
      // latitude= {51.5074}
      // longitude= {0.1278}
      onViewportChange={this.handleViewportChange}>
      <Geocoder
        mapRef={this.mapRef}
        onViewportChange={this.handleGeocoderViewportChange}
        mapboxApiAccessToken={mapboxToken}
      />
      
      {this.state.postcodes.map((postcode, index) => {
        return <Marker
          key={index.toString()}
          latitude={postcode.result.latitude}
          longitude={postcode.result.longitude} >
          <div className="marker">
            
          </div>
        </Marker>
      } )}

 
     
    </MapGL>
  )
}
}






require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.jpe?g(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/jpeg' },
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
    new webpack.EnvironmentPlugin([
      'MAPBOX_ACCESS_TOKEN'
    ])
  ]
}




MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoiY3VzbmlyaXVjLWFkcmlhbiIsImEiOiJjazVpOTB5MnkwYjRqM3FvN2RrNGYyNDhqIn0.HU0j2R0LLGcvs8_Osx-luw














* {
  box-sizing: border-box;
}

.navbar {
  margin: 5px;
}

.nav-item {
  margin: 5px;
}
.marker {
  // background-color: red;
  height: 5px;
  width: 5px;
  // transform: translate(-50%, -50%);
  border-radius: 100px;
  // background: none;
  border: none;
  cursor: pointer;
}


.marker img {
  width: 60px;
  height: 60px;
  border-radius:100%;
}










import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React from 'react'
import axios from 'axios'
import MapGL, {  Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

// import PubCard from './PubCard'

export default class PubIndex extends React.Component {
state = {
  postcodes: [],
  pubs: [],
  {selectedPub,setSelectedPub}: null,
  viewport: {
    latitude: 51.5074,
    longitude: 0.1278,
    zoom: 9
  }
  const { selectedPub, setSelectedPub } = this.state(null)
}

mapRef = React.createRef()
handleViewportChange = (viewport) => {
  this.setState({
    viewport: { ...this.state.viewport, ...viewport }
  })
}

handleGeocoderViewportChange = (viewport) => {
  // console.log(viewport)
  const geocoderDefaultOverrides = { transitionDuration: 1000 }
  this.setState({ viewport: { latitude: viewport.latitude, longitude: viewport.longitude, zoom: viewport.zoom } })
  // this.apiCall()
  // console.log(this.state.viewport)
  return this.handleViewportChange({
    ...viewport,
    ...geocoderDefaultOverrides
  })
}



async componentDidMount() {
  console.log('hello')
  try {
    const res = await axios.get('/api/pubs')
    this.setState({ pubs: res.data })
    this.getPostcodes()
  } catch (error) {
    console.log(error)
  }
}
 
async getPostcodes () {
  const postcodes = this.state.pubs.map( pub => pub.postcode)
  const res = await axios.post('https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes', { postcodes })
  console.log(res.data.result)
  // console.log(postcodes.result)
  this.setState({ postcodes: res.data.result })
}

render() {
  console.log(1)
  if (!this.state.postcodes) return null
  console.log(this.state.postcodes.map(postcode => postcode.result.longitude))
  return (
    <MapGL
      mapboxApiAccessToken={mapboxToken}
      ref={this.mapRef}
      {...this.state.viewport}
      height={'100vh'}
      width={'100vw'}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      // zoom={10}
      // latitude= {51.5074}
      // longitude= {0.1278}
      onViewportChange={this.handleViewportChange}>
      <Geocoder
        mapRef={this.mapRef}
        onViewportChange={this.handleGeocoderViewportChange}
        mapboxApiAccessToken={mapboxToken}
      />
      
      {this.state.postcodes.map((postcode, index) => {
        return <Marker
          key={index.toString()}
          latitude={postcode.result.latitude}
          longitude={postcode.result.longitude} >
          <button className="marker" onClick = {(e) => {
            e.preventDefault()
            this.
          }}>
            {/* <img src={this.state.image} /> */}
            <img src="https://d2kdkfqxnvpuu9.cloudfront.net/images/big/47455.jpg?1319388226" />
          </button>
        </Marker>
      } )}

 
     
    </MapGL>
  )
}
}