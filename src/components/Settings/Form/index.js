import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

  state = {
    formData: {
      firstName: '',
      lastName: '',
      email: ''
    },
  
    showErrors: {
      firstName: false,
      lastName: false,
      email: false
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState((state) => {
      return state.formData[name] = value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.formValid()){
      const { firstName, lastName, email } = this.state.formData;
      
      localStorage.setItem("settings", JSON.stringify({ firstName, lastName, email }));

      this.setState((state) => {
        return state.formData = {
          firstName: '',
          lastName: '',
          email: ''
        }
      }, () => {
        alert('You have successfully updated your profile');
      });
    }
  }

  formValid = () => {
    let formValid = true;
    const { formData } = this.state;

    // check if every form field is valid
    Object.keys(formData).forEach((field) => {
      if(!this.fieldValid(field)){
        formValid = false;  
      }
    });

    return formValid;
  }

  fieldValid = (field) => {
    let showError = false;

    // check if field is empty
    if(this.state.formData[field].trim() === ''){
      showError = true;
    }  

    // if it's an email, check if it's valid
    if(field === 'email' && !this.validateEmail(this.state.formData[field])){
      showError = true; 
    }

    // display error messages
    this.setState((state) => { 
      return state.showErrors[field] = showError;  
    });

    return !showError;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { formData, showErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={this.props.className} >

        <fieldset className="form-field">
          <label htmlFor="firstName">First Name:</label>
          <input 
            id="firstName" 
            className={showErrors.firstName && 'error'}
            name="firstName" 
            placeholder="Enter your first name"
            type="text"
            value={formData.firstName}  
            onChange={this.handleChange}
          />      
          {showErrors.firstName && <div className="error-message">Please enter your first name.</div>}
        </fieldset>
  
        <fieldset className="form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            id="lastName" 
            className={showErrors.lastName && 'error'}
            name="lastName" 
            placeholder="Enter your last name"
            type="text"
            value={formData.lastName}  
            onChange={this.handleChange}
          />      
          {showErrors.lastName && <div className="error-message">Please enter your last name.</div>}
        </fieldset>

        <fieldset className="form-field">
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            className={showErrors.email && 'error'}
            name="email"    
            placeholder="Enter your email address"
            type="text"      
            value={formData.email}     
            onChange={this.handleChange} 
          />        
          {showErrors.email && <div className="error-message">Please enter a valid email.</div>}
        </fieldset>
        
        <input type="submit" value="Save"  />
      </form>
    );
  }
}

export default Form;