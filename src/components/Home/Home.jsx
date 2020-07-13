import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';


class Home extends Component {
    render() {
        return (
            <div>
                <Link to = "/exterior" ><Button color="primary">Exterior</Button>{' '} </Link>
                <Link to = "/interior" ><Button color="success">primary</Button>{' '}</Link>
            </div>
        );
    }
}

export default Home;