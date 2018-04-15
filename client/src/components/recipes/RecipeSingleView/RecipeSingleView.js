import React from 'react';
import './RecipeSingleView.css';
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";

// const fetchRecipes = gql`
//   query {
//     recipes(id:1) {
//     title,
//     description,
//     instructions,
//     prep_time,
//     images,
//     categories
//     }
//   }
// `;

function RecipeView (props) {
    return (
        <div>
            <ul>
                {props.recipes.map((recipe) => (
                    <li key={recipe.title}>
                        <img src={recipe.images[0]} style={{ maxWidth: 1200, maxHeight: 400}} className={CSS_CLASS_NAME + '-img'} />
                        <h2>{recipe.title}</h2>
                        <div className={CSS_CLASS_NAME + '-category'}>
                         {recipe.categories.map((category) => (
                           <div key={category}>{category},</div>))}
                        </div>
                        <div className='left'>
                        <div>{recipe.description}</div>
                        </div>
                    </li>
                ))}
                <div className='right'>
                <h3>Ingredients</h3>
                <div className={CSS_CLASS_NAME + '-ingredients'}>
                {props.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name},</li>
                ))}
                </div>
                </div>
                <div className='right'>
                <h3>Instructions</h3>
                {props.recipes.map((recipe) => (
                    <li key={recipe.title}>{recipe.instructions} </li>
                ))}
                </div>
                <div className='right'>
                    <h3>Photos</h3>
                {props.recipes.map((recipe) => (
                    <li key={recipe.title}>
                        {recipe.images.map((image) => (
                            <div key={image}><img src={image} style={{ height: 100, width: 'auto'}}/></div>))}
                    </li>
                    ))}
                </div>
            </ul>
        </div>
    )
}

const CSS_CLASS_NAME = 'recipe-single-view'

class RecipeSigleView  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    title: "Grandma's banana bread",
                    user_id: '1',
                    description: "My grandma's banana bread. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat erat pharetra facilisis ultricies. Pellentesque ",
                    instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat erat pharetra facilisis ultricies. Pellentesque ut consectetur mauris. Proin sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    prep_time: '150',
                    images: ['https://www.tabinotebook.com/wp-content/uploads/2018/04/IMG_20180331_134057.jpg',
                        'https://www.tabinotebook.com/wp-content/uploads/2018/04/IMG_20180331_134042.jpg'],
                    categories: ['sweets', 'special day', 'banana']
                }
            ],
            ingredients : [
                {
                    id: 1,
                    name: "onion"
                },
                {
                    id: 2,
                    name: "egg"
                },
    ]
        }
    }

    render() {
        return (
            <div className={CSS_CLASS_NAME}>
              <RecipeView
              recipes ={this.state.recipes}
              ingredients={this.state.ingredients}/>
            </div>
        )
    }
}



export default RecipeSigleView;
