import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './index.css';
import './assets/style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById(`root`),
);
registerServiceWorker();
