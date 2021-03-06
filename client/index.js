import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongDetail from './components/SongDetails';
import SongCreate from './components/SongCreate';
import SongList from './components/SongList';
import App from './components/App'

import './style/style.css';

const client = new ApolloClient({
    // allows apollo to track and fetch all objects with id.
    dataIdFromObject: o => o.id
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={SongList} />
                <Route path="songs/new" component={SongCreate} />
                <Route path="songs/:id" component={SongDetail} />
            </Route>
        </Router>
      </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
