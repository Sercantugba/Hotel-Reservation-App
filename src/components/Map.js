import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'
export class MapContainer extends Component {
  render() {
    const style = {
        width: '75%',
        height: '75%'
      }
    return (
    //   <Map google={this.props.google} zoom={14}>
          <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 32.779167 ,
            lng: -96.808891
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>DFW</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  
})(MapContainer)