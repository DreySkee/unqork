import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 500;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  h2 {
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  ul {
    list-style-type: none;

    li {
      margin-bottom: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #6288a5;
  }

  p {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }

  fieldset {
    border: none;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .page {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 10px;
  }

  .form-container {
    width: 100%;
    max-width: 525px;
    margin: 0 auto; 
  }

  form {
    max-width: 525px;  
  }

  input {
    width: 100%;
    height: 44px;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    transition: .3s;

    &.error {
      border-color: #d0021b;
    }
  }

  input[type='submit'] {
    background-color: #6288a5;
    border-color: #4d7b9f;
    cursor: pointer;
    color: #fff;

    &:hover {
      background-color: #326891;
      border-color: #265e8b;  
    }
  } 

  input[type='submit'],
  input[type='text'] {
    -webkit-appearance: none;   
  }

  .form-field {
    position: relative;
    margin-bottom: 20px;
    
    a {
      position: absolute;
      right 10px;
      top: 42px;
      font-size: 12px;
    } 
    .error-message {
      padding 5px 0 0 10px;
      font-size: 12px;
      color: #d0021b;
    }
  }

  .form-bottom {
    position: relative;

    label, p {
      color: #666;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 20px;     
    }

    label {
      max-width: 96%;
      padding-left: 10px;
    }

    .forgot-password {
      font-size: 12px;
      position: absolute;
      right: 0;
      top: 0;
    }

    .checkbox-row {
      display: flex;
      justify-content: flex-start

      input {
        width: 20px;
        height: 20px;
      }
    }
  }
`;