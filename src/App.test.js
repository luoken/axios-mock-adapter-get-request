import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { mockAxios } from './mockAdapter';
import axios from 'axios';

const data = {
  message: 'success',
};

const initialState = {
  info: 'App',
};

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe('api', () => {
  let wrapper;

  beforeEach(() => {
    mockAxios.reset();
    wrapper = shallow(<App/>, initialState);
  });

  afterAll(() => {
    mockAxios.reset();
    wrapper.unmount();
  });

  it('gets', async () => {
    mockAxios.onGet("https://localhost:4000/user").reply(200, data);
    wrapper.instance().componentDidMount();
    await flushPromises();
    wrapper.update();
    expect(wrapper.state("info")).toBe('success');
  });
});
