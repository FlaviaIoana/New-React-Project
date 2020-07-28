import React from 'react';
import { SingleInput } from './SingleInput'
import { Label } from './Label'

class NameForm extends React.Component {
    FAQform;
    constructor(props) {
        super(props);
        this.state = {
            subject: 'bug',
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        console.log(event.target);
    }
    resetForm = () => {
        this.FAQform.reset();
    }
    onClickk = () => {
        const firstNString = "First name";
        const lastNString = "Last name";
        const emailString = "Email";
        const subjectsString = "Subject"
        const messageString = "Message"
        const indexOfEmail = this.state.email.indexOf("@");
        if (this.state.textarea.length >= 10 && indexOfEmail !== -1) {
            document.getElementById("formDetails").innerHTML = `{&quot${firstNString}&quot: ` + this.state.firstname + "<br />" + `&quot${lastNString}&quot: ` + this.state.lastname +
                "<br />" + `&quot${emailString}&quot: ` + this.state.email + "<br />" + `&quot${subjectsString}&quot: ` + this.state.subject + "<br />" + `&quot${messageString}&quot: ` + this.state.textarea + "<br />" + `}`;
            this.resetForm();
        }
        else if (this.state.textarea.length < 10 && indexOfEmail == -1) {
            document.getElementById("formDetails").innerHTML = "Mesajul dvs trebuie sa contina 10 caractere, iar mailul trebuie sa aiba format corespunzator!";
        }
        else if (this.state.textarea.length < 10) {
            document.getElementById("formDetails").innerHTML = "Mesajul dvs trebuie sa contina cel putin 10 caractere!";
        }
        else if (indexOfEmail == -1) {
            document.getElementById("formDetails").innerHTML = "Mailul dvs nu are formatul corect!";
        }
    }
    render() {
        return (
            <form ref={(elem) => this.FAQform = elem}>
                <Label>First name: </Label>
                <SingleInput name='firstname' onChange={(event) => this.myChangeHandler(event)}></SingleInput>
                <Label>Last name: </Label>
                <SingleInput name='lastname' onChange={(event) => this.myChangeHandler(event)}></SingleInput>
                <Label>Email: </Label>
                <SingleInput name='email' onChange={(event) => this.myChangeHandler(event)}></SingleInput>
                <Label>Subject: </Label>
                <select name='subject' value={this.state.subject} onChange={this.myChangeHandler}>
                    <option value="bug">Bug</option>
                    <option value="question">Question</option>
                    <option value="other">Other</option>
                </select>
                <Label>Please write your message here: </Label>
                <textarea name="textarea" onChange={this.myChangeHandler} />
                <button type="button" className="formButton" onClick={() => this.onClickk()}>Send</button>
                <p id="formDetails"></p>
            </form>
        );
    }
}
export default NameForm;