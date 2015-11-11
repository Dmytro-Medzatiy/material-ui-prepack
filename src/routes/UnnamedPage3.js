
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';


class UnnamedPage3 extends Component {

    render() {
        return (
            <div>
                <h3 style={ {    padding: '1em',    textAlign: 'center'} } params={ this.props.params }><span params={ this.props.params }>This is an empty page. To add new component select needed element on left-side panel and click on an element on the page where you want to put new component, than choose action for right component's place.</span></h3>
                <Row params={ this.props.params }>
                    <Col className="col-xs" params={ this.props.params }>
                        <Box params={ this.props.params }>
                            <img width={ 200 }
                                 height={ 100 }
                                 src="http://placehold.it/200x100"
                                 params={ this.props.params }></img>
                        </Box>
                    </Col>
                    <Col className="col-xs" params={ this.props.params }>
                        <Box params={ this.props.params }>
                            <img width={ 200 }
                                 height={ 100 }
                                 src="http://placehold.it/200x100"
                                 params={ this.props.params }></img>
                        </Box>
                    </Col>
                    <Col className="col-xs" params={ this.props.params }>
                        <Box params={ this.props.params }>
                            <img width={ 200 }
                                 height={ 100 }
                                 src="http://placehold.it/200x100"
                                 params={ this.props.params }></img>
                        </Box>
                    </Col>
                </Row>
            </div>
            );
    }
}

export default UnnamedPage3;

