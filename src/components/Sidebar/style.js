export default `
    position: fixed;
    left: 0;
    bottom: 54px;
    top: 50px;
    width: 170px;
    background-color: #6288a5;
    color: #fff;
    position: absolute;
    padding: 40px 20px;

  a {
    color: #c2daec;  
    display: block;
    margin-bottom: 10px;

    :hover, &.selected {
      color: #fff;
    }
  }

  .label {
    font-weight: 700;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .sub-nav {
    padding: 20px;
    display: none;
    
    &.open {
      display: block;
    }
  }
`;