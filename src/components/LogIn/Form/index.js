import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

  state = {
    formData: {
      email: '',
      password: ''
    },
  
    showErrors: {
      email: false,
      password: false
    },

    showPassword: false
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
      const { email, password } = this.state.formData;
      
      if (email === 'unqork@unqork.com' && password === 'unqork') {
        localStorage.setItem("userLogged", true);
        this.props.history.push('/dashboard')
      } else {
        alert('Invalid email and/or password');   
      }

    }
  }

  handleBlur = (e) => {
    this.fieldValid(e.target.name);
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return { showPassword: !state.showPassword }
    });
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
    const { formData, showPassword, showErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
            onBlur={this.handleBlur}
          />        
          {showErrors.email && <div className="error-message">Please enter a valid email.</div>}
          
        </fieldset>
        
        <fieldset className="form-field">
          <label htmlFor="password">Password:</label>
          <input 
            id="password" 
            className={showErrors.password && 'error'}
            name="password" 
            placeholder="Enter your password"
            type={showPassword ? "text" : "password" } 
            value={formData.password}  
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />      
          <a href="" onClick={this.showPassword}>{showPassword ? 'Hide' : 'Show'} password</a>    
          {showErrors.password && <div className="error-message">Please enter a password.</div>}
          
        </fieldset>


        <input type="submit" value="Log In"  />
      </form>
    );
  }
}

export default withRouter(Form);
