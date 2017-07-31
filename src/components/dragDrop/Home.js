import React from 'react';
import Weapon from './Weapon';
import Board from './board';
import { weaponList } from './dataService';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { default as TouchBackend } from 'react-dnd-touch-backend';
import './App.css';

const Home = () => {
    let weapons = weaponList.map((w, i) => {
        return (<Col xs key={i}>
            <Weapon key={w.id} name={w.name} />
            </Col>
        );    
    });

    return (
        <Grid fluid>
            <center><h3>Choose Your Weapon</h3></center>
            <Row>
                <Col xs={6} sm={3} md={3} className="weapon-container">
                    {weapons}
                </Col>
                <Col xs={12} md={9}>
                    <Board className="board"/>
                </Col>
            </Row>
        </Grid>
    );
}

export default DragDropContext(HTML5Backend)(Home);