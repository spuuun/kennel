import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        locationName: "",
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    locationName: location.locationName
                });
            })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./Blake_jacobsladder.jpg')} alt="Beautiful Location" /> */}
                        <img src={require("./Blake_jacobsladder.jpg")} alt="Beautiful Location" />
                    </picture>
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.locationName}</span></h3>
                </div>
            </div>
        );
    }
}

export default LocationDetail;