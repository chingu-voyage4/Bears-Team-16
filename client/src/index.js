import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './main.css';
import App from './components/App';
import { baseURL } from "./utils/api";
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  request: operation => {
    // Sets context param received by GraphQL resolvers
    operation.setContext({
      headers: {
        authorization: window.localStorage.getItem(`recipes`),
      },
    });
  },
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById(`root`),
);
registerServiceWorker();
