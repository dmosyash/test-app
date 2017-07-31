import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { weaponList } from './dataService';
import './App.css';

const weaponSource = {
    beginDrag(props) {
        return {
            weaponId: props.name
        };
    },

    endDrag (props, monitor, component) {
        if (monitor.didDrop()) {
            let result = monitor.getDropResult();
            if (result.hasOwnProperty('success')) {
                component.updateDraggable();
            }
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    }
}

class Weapon extends Component {
    constructor(props) {
        super(props);
        this.dropped = false;
        this.state = {
            draggable: true
        };
    }

    componentWillMount () {
        if(this.props.hasOwnProperty('draggable')) {
            let bool = this.props.draggable;
            this.setState({
                draggable: bool
            });
        }
    }

    updateDraggable() {
        this.dropped = true;
        this.setState({
            draggable: false
        });
    }

    render() {
        const { connectDragSource, isDragging, dropStyle, connectDragPreview } = this.props;
        let weaponStyle = {
            position: 'relative',
            opacity: isDragging ? 0.5 : 1,
            fontSize: 15,
            fontWeight: 'bold',
            border: '1px solid',
            marginTop: '5px',
            cursor: this.state.draggable ? 'move' : 'not-allowed',
            backgroundColor: this.state.draggable ? 'yellow' : 'gray'
        };

        let element = (
            <div style={{ ...weaponStyle, ...dropStyle }}>  
                <center>              
                { connectDragPreview(<span style={{display: 'inline-block'}}><h5>{this.props.name}</h5></span>) }
                </center>
            </div>
        )

        if(this.state.draggable) {
            return connectDragSource(element);
        }

        return element;
    }
}

Weapon.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};
export default DragSource(weaponList[0].name, weaponSource, collect)(Weapon);