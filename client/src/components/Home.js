import React from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const fetchRecipes = gql`
query {
  recipes {
    id
    author {
      uname
    }
    title
  }
}
`;

const Home = ({ data, loading, error }) => (
  <div>
    <h1>Recipe app</h1>
    <ul>{!data.loading && data.recipes.map(recipe =>
      <li key={recipe.id}>{`${recipe.title} by ${recipe.author.uname}`}</li>)}
    </ul>
  </div>
);

export default graphql(fetchRecipes)(Home);
