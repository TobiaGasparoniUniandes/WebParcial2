import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class SeriesDetail extends Component {
    state = this.props.currentSeries;

    render() {
        return (
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={this.props.currentSeries.poster} />
                <Card.Body>
                    <Card.Title>{this.props.currentSeries.name}</Card.Title>
                    <Card.Text>
                        {this.props.currentSeries.description}
                    </Card.Text>
                    <Card.Text>
                        <a href={this.props.currentSeries.webpage}>{this.props.currentSeries.webpage}</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
    
export default SeriesDetail;