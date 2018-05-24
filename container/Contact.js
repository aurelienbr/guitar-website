class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      textarea: ""
    };
  }

  handleName = e => this.setState({ name: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handleTextArea = e => this.setState({ textarea: e.target.value });
  render() {
    const { name, email, textarea } = this.state;
    return (
      <form id="form" class="topBefore">
        <div id="container">
          <h1>&bull; Keep in Touch &bull;</h1>
          <div class="underline" />

          <form id="contact_form">
            <div class="name">
              <input
                type="text"
                placeholder="My name is"
                value={name}
								onChange={this.handleName}
                id="name_input"
                required
              />
            </div>
            <div class="email">
              <input
                type="email"
                placeholder="My e-mail is"
                value={email}
								onChange={this.handleEmail}
                id="email_input"
                required
              />
            </div>
            <div class="message">
              <textarea
                value={textarea}
								onChange={this.handleTextArea}
                placeholder="My message"
                id="message_input"
                required
              />
            </div>
            <div class="submit">
              <input type="submit" id="form_button" />
            </div>
          </form>
        </div>
        <style jsx>{`
          @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

          html {
            font-family: "Montserrat", Arial, sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }

          body {
            background: #f2f3eb;
          }

          button {
            overflow: visible;
          }

          button,
          select {
            text-transform: none;
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
            margin: 50px 0;
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

          input[type="text"],
          [type="email"],
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

          input[type="text"]:focus,
          [type="email"]:focus,
          textarea:focus {
            outline: none;
            padding: 0 0 0.875em 0;
          }

          .message {
            float: none;
          }

          .name {
            float: left;
            width: 45%;
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
            font-family: "Helvetica", Arial, sans-serif;
            font-size: 0.875em;
            font-weight: bold;
            outline: none;
            padding: 20px 35px;
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

            input[type="text"],
            [type="email"],
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
