import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard';

import sportsPage from '../assets/images/sportsPage.png';
import filmConnector from '../assets/images/filmConnector.png';
import wvw from '../assets/images/wvw.png';
import employee from '../assets/images/employee.png';
import fitness from '../assets/images/fitness.png';
import password from '../assets/images/password.png';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: "Your Local Sports Page",
                    subTitle: "Easily find information about your favorite sports teams.",
                    imgSrc: sportsPage,
                    link: "https://jackryansmith.github.io/Group-work/",
                    selected: false
                },
                {
                    id: 1,
                    title: "Film Connector",
                    subTitle: "Finding and comparing favorite movies with other users.",
                    imgSrc: filmConnector,
                    link: "https://film-connector.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Willamette Valley Vineyards",
                    subTitle: "Schedule your wine tour.",
                    imgSrc: wvw,
                    link: "https://shrouded-wildwood-55739.herokuapp.com/",
                    selected: false
                },
                {
                    id: 3,
                    title: "Employee Directory",
                    subTitle: "Search for individual employees in the company.",
                    imgSrc: employee,
                    link: "https://mcheung008.github.io/bootcampspot-week19-hw/",
                    selected: false
                },
                {
                    id: 4,
                    title: "Fitness Tracker",
                    subTitle: "Add, track, and store workouts.",
                    imgSrc: fitness,
                    link: "https://cryptic-wildwood-83467.herokuapp.com/",
                    selected: false
                },
                {
                    id: 5,
                    title: "Password Generator",
                    subTitle: "This app will help you create a random unique password.",
                    imgSrc: password,
                    link: "https://mcheung008.github.io/bootcamp-week3-hw/",
                    selected: false
                }
            ]
        }
    }

    handleProjectCardClick = (id, projectcard) => {
        // console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }


    makeItems = (items) => {
        return items.map(item=> {
            return <ProjectCard item={item} click={(e => this.handleProjectCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;