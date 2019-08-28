import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import LocationDetail from './location/LocationDetail';


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Pass the locationId to the LocationDetailComponent
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />

                <Route path="/owner" render={(props) => {
                    return <OwnerList />
                }} />

                <Route path="/employee" render={(props) => {
                    return <EmployeeList />
                }} />

                <Route path="/location" render={(props) => {
                    return <LocationList />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews