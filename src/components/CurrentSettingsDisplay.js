import React from 'react';
import { Container, Table } from "semantic-ui-react";

class CurrentSettingsDisplay extends React.Component {
     

    render() {
        return ( 
            <Table color='purple' key='table' inverted textAlign='center' style={{width:'500px'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>Current settings</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Prepare:</Table.Cell>
                        <Table.Cell>{this.props.prepareTime+" seconds"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Climbing:</Table.Cell>
                        <Table.Cell>{this.props.timeLeft+" seconds"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Resting:</Table.Cell>
                        <Table.Cell>{this.props.baseRest+" seconds"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cycles:</Table.Cell>
                        <Table.Cell>{this.props.cycles / 2 + " cycles"}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

};

export default CurrentSettingsDisplay;