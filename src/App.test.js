import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  render(<App />) // the test would fail if there was a problem with rendering the component
})

});

it('renders Hello World', () => {
  const { getByText } = render(<App />)

  const text = getByText(/hello world/i)

  expect(text).toBeInTheDocument()
})

it('greets the team', () => {
  const { getByText } = render(<App />)

  const greetButton = getByText(/greet/i)
  fireEvent.click(greetButton)

  getByText(/hello web students/i)

  // If the greeting does not show up, the test will fail
  getByText(/hello web students/i)
})

