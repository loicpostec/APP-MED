const axios = require('axios');
import React from 'react'; 
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      'user' : {
        'firstname' : '',
        'lastname' : '',
        'email' : '',
        'phone' : '',
        'address' : '',
        'zip' : '',
        'city' : '',
      },
    };
  }
  componentDidMount() {
    axios
      .get('/api/user.php')
      .then(response => (
        this.setState({user:{...this.state.user,firstname: JSON.parse(JSON.stringify(response.data['FIRSTNAME']))}}),       
        this.setState({user:{...this.state.user,lastname: JSON.parse(JSON.stringify(response.data['LASTNAME']))}}),        
        this.setState({user:{...this.state.user,email: JSON.parse(JSON.stringify(response.data['EMAIL']))}}),        
        this.setState({user:{...this.state.user,phone: JSON.parse(JSON.stringify(response.data['MOBILE_PHONE']))}}),
        this.setState({user:{...this.state.user,address: JSON.parse(JSON.stringify(response.data['ADDRESS']))}}), 
        this.setState({user:{...this.state.user,zip: JSON.parse(JSON.stringify(response.data['POSTAL_CODE']))}}),
        this.setState({user: {...this.state.user,city: JSON.parse(JSON.stringify(response.data['CITY']))}})
        ))
  }

  render() {
    return(
     <div className="user-form">
     <Form  id="user-form" onSubmit={this.handleSubmit}>
      <FormGroup  onChange={this.handleChange} id="user-persoinfo">
        <Label id="user-firstname-label">Prénom</Label>
        <Input name="firstname" id="user-firstname" type="text" defaultValue={this.state.user.firstname}/>
        <Label id="user-lastname-label">Nom</Label>
        <Input name="lastname" id="user-lastname" type="text" defaultValue={this.state.user.lastname}/>
        <Label id="user-email-label">Adresse e-mail</Label>
        <Input name="email" id="user-email" type="email" defaultValue={this.state.user.email}/>
        <Label id="user-phone-label">Numéro de téléphone</Label>
        <Input name="phone" id="user-phone" type="text" defaultValue={this.state.user.phone}/>
        <Label id="user-address-label">Adresse</Label>
        <Input name="address" id="user-address" type="text" defaultValue={this.state.user.address}/>
        <Label id="user-zip-label">Code postal</Label>
        <Input name="zip" id="user-zip" type="text" defaultValue={this.state.user.zip}/>
        <Label id="user-city-label">Ville</Label>
        <Input name="city" id="user-city" type="text" defaultValue={this.state.user.city}/>
      </FormGroup>
      <Button type="submit" value="user-form-send">Sauvegarder</Button>
      </Form>
      </div> 

    );
  }
  handleChange(e) {   
    this.setState({ 
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  }
  handleSubmit(e) {
            let user = this.state.user;
            console.log(user)
            axios
            .post('./api/user.php',{
              user : this.state.user,
            })
            .then(function(response) {
              console.log(response);
              if (response.data.code === 200) {
                  console.log("registration successfull");
              }
              else {
                  console.log("some error ocurred", response.data.code);
              }
          })
          .catch(function(error) {
              console.log(error);
          });
          }
          
}
export default UserForm;