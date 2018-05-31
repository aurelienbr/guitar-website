// @flow
import React from 'react';
import axios from 'axios';
import verifForm from '../tools/verifForm';
import Loader from 'react-loader-spinner';

const API_MAIL = 'https://apiresume.herokuapp.com/mail';

type Props = {};

type State = {
  name: string,
  email: string,
  textarea: string,
  success: string,
  loading: boolean,
  error: {
    name: string,
    email: string,
    textarea: string,
    global: string
  }
};

class Contact extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      textarea: '',
      success: '',
      loading: false,
      error: {
        name: '',
        email: '',
        textarea: '',
        global: ''
      }
    };
  }

  sendEmail = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, email, textarea } = this.state;
    event.preventDefault();
    this.setState({ loading: true });
    const error = verifForm(name, email, textarea);
    if (Object.keys(error).length > 0) {
      this.setState({
        error,
        loading: false
      });
      return false;
    }
    axios
      .post(API_MAIL, {
        email: email,
        subject: 'Email from guitar-website',
        text: `${name} wants to tell you that... ${textarea}`,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        this.setState({
          loading: false,
          success: 'Your e-mail has been successfully sent',
          error: { name: '', email: '', textarea: '', global: '' }
        });
        setTimeout(() => {
          this.setState({ success: '', success: '' });
        });
      })
      .catch(err => {
        const global =
          err.message === 'Network Error'
            ? 'Your message could not be sent please check your internet connection'
            : 'Error while sending your message';
        this.setState({
          error: { ...this.state.error, global },
          loading: false
        });
      });
  };

  handleName = (e: SyntheticInputEvent<HTMLInputElement>) =>
    this.setState({
      name: e.target.value,
      error: { ...this.state.error, name: '' }
    });
  handleEmail = (e: SyntheticInputEvent<HTMLInputElement>) =>
    this.setState({
      email: e.target.value,
      error: { ...this.state.error, email: '' }
    });
  handleTextArea = (e: SyntheticInputEvent<HTMLInputElement>) =>
    this.setState({
      textarea: e.target.value,
      error: { ...this.state.error, textarea: '' }
    });
  render() {
    const { name, email, textarea, loading, error, success } = this.state;
    return (
      <form id="form">
        <div id="container">
          <h1>&bull; Keep in Touch &bull;</h1>
          <div className="underline" />

          <form id="contact_form">
            <div>
              <input
                type="text"
                placeholder="My name is"
                value={name}
                onChange={this.handleName}
              />
              <p className="error">{error.name}</p>
            </div>
            <div>
              <input
                type="email"
                placeholder="My e-mail is"
                value={email}
                onChange={this.handleEmail}
              />
              <p className="error">{error.email}</p>
            </div>
            <div>
              <textarea
                value={textarea}
                onChange={this.handleTextArea}
                placeholder="My message"
              />
              <p className="error">{error.textarea}</p>
            </div>
            <div>
              {loading ? (
                <div id="form_button" className="loader-container">
                  <Loader type="Rings" color="black" height="50" width="50" />
                </div>
              ) : (
                <button onClick={this.sendEmail} id="form_button">
                  SEND
                </button>
              )}
            </div>
            <p className="success">{success}</p>
            <p className="error">{error.global}</p>
          </form>
        </div>
        <style jsx>{`
          @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

          html {
            font-family: 'Montserrat', Arial, sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }

          body {
            background: #f2f3eb;
          }

          button {
            overflow: visible;
          }

          .success {
            color: green;
          }

          button,
          select {
            text-transform: none;
          }
          .error {
            color: red;
          }

          button,
          input,
          select,
          textarea {
            color: #5a5a5a;
            font: inherit;
            margin: 0;
          }

          input {
            line-height: normal;
          }

          textarea {
            overflow: auto;
          }

          #container {
            border: solid 3px #474544;
            max-width: 768px;
            margin: 60px auto;
            position: relative;
          }

          form {
            padding: 37.5px;
          }

          h1 {
            color: #474544;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 7px;
            text-align: center;
            text-transform: uppercase;
          }

          .underline {
            border-bottom: solid 2px #474544;
            margin: -0.512em auto;
            width: 80px;
          }

          .email {
            float: right;
            width: 45%;
          }

          input[type='text'],
          [type='email'],
          select,
          textarea {
            background: none;
            border: none;
            border-bottom: solid 2px #474544;
            color: #474544;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 1px;
            margin: 0em 0 1.875em 0;
            padding: 0 0 0.875em 0;
            text-transform: uppercase;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }

          input[type='text']:focus,
          [type='email']:focus,
          textarea:focus {
            outline: none;
            padding: 0 0 0.875em 0;
          }

          textarea {
            line-height: 150%;
            height: 150px;
            resize: none;
            width: 100%;
          }

          ::-webkit-input-placeholder {
            color: #474544;
          }

          :-moz-placeholder {
            color: #474544;
            opacity: 1;
          }

          ::-moz-placeholder {
            color: #474544;
            opacity: 1;
          }

          :-ms-input-placeholder {
            color: #474544;
          }

          #form_button {
            background: none;
            border: solid 2px #474544;
            color: #474544;
            cursor: pointer;
            display: inline-block;
            font-family: 'Helvetica', Arial, sans-serif;
            font-size: 0.875em;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            height: 60px;
            width: 175px;
            text-transform: uppercase;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }

          #form_button:hover {
            background: #474544;
            color: #f2f3eb;
          }

          @media screen and (max-width: 768px) {
            #container {
              margin: 20px auto;
              width: 95%;
            }
          }

          @media screen and (max-width: 480px) {
            h1 {
              font-size: 26px;
            }

            .underline {
              width: 68px;
            }

            #form_button {
              padding: 15px 25px;
            }
          }

          @media screen and (max-width: 420px) {
            h1 {
              font-size: 18px;
            }

            .underline {
              width: 53px;
            }

            input[type='text'],
            [type='email'],
            select,
            textarea {
              font-size: 0.875em;
            }
          }
        `}</style>
      </form>
    );
  }
}

export default Contact;
