import React, {Component} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';

class TourList extends Component {
    state = {
        tours: tourData
    };

    handleDelete = (id) => {
        const {tours} = this.state;
        const filteredTours = tours.filter((tour) => {
            return tour.id !== id;
        });
        this.setState({
           tours: filteredTours
        });
    };

    render() {
        const {tours} = this.state;

        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.handleDelete}/>
                        );
                })}
            </section>
        );
    }
}

export default TourList;