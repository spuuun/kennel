import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./Blake_jacobsladder.jpg')} alt="Beautiful Location" />
                    </picture>
                    <h3>Location: <span className="card-location">{this.props.location.locationName}</span></h3>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;