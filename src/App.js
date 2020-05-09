import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { thistle } from 'color-name';


type State = {
  lat: number,
  lng: number,
  zoom: number,
  data: json,
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: require('./data/NC_2010_Census_Block_Groups.json'),
      lat: 35.227,
      lng: -80.843,
      zoom: 13,
    };
  }

  render(){

    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON key={"tempkey"} data={this.state.data} />
    </Map>
    )
  }
}


export default App;
