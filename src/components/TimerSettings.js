import React from 'react';
import { Modal, Button, Form, Input } from "semantic-ui-react";

class TimerSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prepMinutes: 0,
            prepSeconds: 5,
            climbMinutes: 2,
            climbSeconds: 0,
            restMinutes: 2,
            restSeconds: 0,
            cycles: 8,
            cutRestByPercent: 50
        };
        
    };

    handleSubmit = () => {
        console.log(this.state)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: Number(value) })

    render() {

        return (
            <Modal trigger={<Button>Set default settings</Button>} centered={false} size={'tiny'} >
                <Modal.Header>Settings:</Modal.Header>
                <Modal.Content>
                    <Form size='small' unstackable widths='equal' onSubmit={this.handleSubmit}>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Preparation: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="prepMinutes" placeholder='0 min' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="prepSeconds" placeholder='5 sec' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Field>
                                <label>Climbing: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="climbMinutes" placeholder='2 min' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="climbSeconds" placeholder='0 sec' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Field>
                                <label>Resting: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="restMinutes" placeholder='2 min' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="restSeconds" placeholder='0 sec' type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                                fluid
                                name="cycles"
                                label='Cycles:'
                                placeholder='8 cycles'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                name="cutRestByPercent"
                                label='Cut rest by % each cycle'
                                placeholder='50%'
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button type='submit'>Submit</Button>

                    </Form>
                </Modal.Content>
            </Modal>
        );
    };

};

export default TimerSettings;