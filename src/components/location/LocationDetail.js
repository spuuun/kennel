import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        locationName: "",
        loadingStatus: true
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    locationName: location.locationName,
                    loadingStatus: false
                });
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        LocationManager.delete(this.props.locationId)
            .then(() => this.props.history.push("/location"))
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
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;