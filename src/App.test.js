import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import Enzyme, {shallow}from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()});
// import ReactDOM from 'react-dom'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
 const wrapper = shallow(<App />)
//  console.log(wrapper.debug())
 expect(wrapper).toBeTruthy();
})