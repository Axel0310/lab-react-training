import React, { Component } from 'react';
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  FormFeedback,
} from 'reactstrap';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: '',
    msgHidden: true,
  };

  greetings = {
    en: 'Hi',
    de: 'Hallo',
    fr: 'Salut',
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  validateEmail = () => {
    const validationExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return this.state.email.match(validationExp) ? true : false;
  };

  validationPassword = () => {
    const validationExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return this.state.password.match(validationExp) ? true : false;
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      msgHidden: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              valid={this.validateEmail()}
              invalid={this.state.email.length && !this.validateEmail()}
              placeholder="Enter your email address"
              onChange={this.handleChange}
            />
            <FormFeedback>Invalid email address</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              valid={this.validationPassword()}
              invalid={this.state.password.length && !this.validationPassword()}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
            <FormFeedback>Invalid password</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              type="select"
              name="nationality"
              id="nationality"
              onChange={this.handleChange}
            >
              <option disabled selected>
                Select your nationality
              </option>
              <option value="en">en</option>
              <option value="de">de</option>
              <option value="fr">fr</option>
            </Input>
          </FormGroup>
          <Button color="primary">Signin</Button>
        </Form>
        <div
          id="message"
          style={{ display: this.state.msgHidden ? 'none' : 'block' }}
        >
          <p>{this.greetings[this.state.nationality]}</p>
          <p>Your email addres is: {this.state.email}</p>
          <p>
            Your email address is{' '}
            {this.state.emailIsValid ? 'correct' : 'incorrect'}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default SignupPage;
