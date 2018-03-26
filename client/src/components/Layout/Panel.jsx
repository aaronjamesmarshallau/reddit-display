import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width
        };
    }

    getStyleObject() {
        return {
            width: this.state.width
        };
    }

    render() {
        return (
            <div className="panel-base" style={this.getStyleObject()} >
                {this.props.children}
            </div>
        )
    }
}

export default Panel;