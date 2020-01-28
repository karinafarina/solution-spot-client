import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FilteredSolutions from './FilteredSolutions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FilteredSolutions />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
