import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './index.js';

configure({ adapter: new Adapter() });

class LocalStorageMock {
  constructor() {
    this.store = {
      settings: '{ "firstName": "First", "lastName": "Last", "email": "test@test.com" }'
    };
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();


it('renders Profile with provided data', () => {

  const wrapper = mount(<Profile />);
  const profileData = <ul><li>First Name: First</li><li>Last Name: Last</li><li>Email: test@test.com</li></ul>;

  expect(wrapper.contains(profileData)).toEqual(true);
});