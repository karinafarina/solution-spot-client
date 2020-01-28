import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SolutionView from './SolutionView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SolutionView />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
