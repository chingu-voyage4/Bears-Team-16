import React from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const fetchRecipes = gql`
  query {
    recipes(id:1) {
    title,
    description,
    instructions,
    prep_time,
    images,
    categories
    }
  } 
`;

const CSS_CLASS_NAME = 'recipe-single-view'

const RecipeSigleView = props => {
    console.log(props);
    const { error, loading, recipes } = props.data;

    return (
        <div className='CSS_CLASS_NAME'>
        <h1>
            {loading && `Loading...`}
            {!error && recipes && recipes.title}
        </h1>
            <div>
                {!error && recipes && recipes.description}
            </div>
            <div>
                {!error && recipes && recipes.instructions}
            </div>
        </div>
    );
};

export default graphql(fetchRecipes)(RecipeSigleView);
