import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';

const Listing = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const listing = props.listings[0]

    return (
        <Container maxWidth="sm">
            <h2>{listing.name}</h2>
            <h3>{listing.address}</h3>
            <h3>{listing.hours}</h3>
            <p>{listing.description}</p>
        </Container>
    )
}

export default Listing