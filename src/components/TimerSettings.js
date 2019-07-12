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
            cycles: 4,
            reduceRestByPercent: 50,
            open: false
        };
        
    };

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    handleSubmit = () => {
        this.close();
        this.props.handleSubmit(this.state)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: Number(value) })

    render() {

        return (
            <Modal 
            open={this.state.open}
            onClose={this.close}
            trigger={<Button onClick={this.open} color='blue'>Change settings</Button>} 
            centered={false} 
            size={'tiny'} >
                <Modal.Header>Settings:</Modal.Header>
                <Modal.Content>
                    <Form size='small' unstackable widths="equal" onSubmit={this.handleSubmit}>
                        <Form.Group inline>
                            <Form.Field>
                                <label >Preparation: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="prepMinutes" placeholder={this.state.prepMinutes+" min"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="prepSeconds" placeholder={this.state.prepSeconds+" sec"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Field>
                                <label >Climbing: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="climbMinutes" placeholder={this.state.climbMinutes+" min"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="climbSeconds" placeholder={this.state.climbSeconds+" sec"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Field>
                                <label >Resting: </label>
                            </Form.Field>
                            <Form.Field>
                                <Input name="restMinutes" placeholder={this.state.restMinutes+" min"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <Input name="restSeconds" placeholder={this.state.restSeconds+" sec"} type='tel' onChange={this.handleChange}/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                                fluid
                                name="cycles"
                                label='Cycles:'
                                placeholder={this.state.cycles}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                name="reduceRestByPercent"
                                label='Cut rest by % each cycle'
                                placeholder={this.state.reduceRestByPercent+"%"}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button type='submit' color='blue'>Submit</Button>

                    </Form>
                </Modal.Content>
            </Modal>
        );
    };

};

export default TimerSettings;