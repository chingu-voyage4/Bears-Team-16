import React from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const fetchRecipes = gql`
query {
  recipes {
    id
    author {
      fname
    }
    title
  }
}
`;

const Home = () => (
  <div>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id felis eget neque faucibus cursus sit amet id libero. Vivamus varius volutpat ex quis scelerisque. Suspendisse hendrerit consequat turpis, quis dictum nisi lobortis eget. Mauris vestibulum facilisis gravida. Duis at magna quis mi laoreet finibus quis a tellus. Quisque pulvinar turpis posuere, ornare purus suscipit, dignissim velit. Praesent sit amet rhoncus odio, non fermentum lorem.

          Fusce et nunc sit amet augue lobortis condimentum. Aliquam pretium a enim at porta. Morbi blandit dignissim lorem sed consequat. Aenean at pellentesque sapien. Sed suscipit lobortis dolor, at semper massa. In ut laoreet quam, sit amet rhoncus urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus laoreet, urna posuere posuere semper, odio quam aliquam tellus, at ultricies mi purus a libero. Nullam tincidunt ligula dolor, a consectetur massa scelerisque a. Cras luctus nisl non nulla suscipit, vitae maximus eros feugiat. Aenean feugiat elementum molestie. Ut a purus arcu. Suspendisse gravida nec ipsum id rhoncus. Aenean suscipit sit amet sapien in vulputate. Cras ultricies risus et gravida dictum. Quisque ac iaculis felis.

          Nunc in sapien et arcu mattis luctus. Vivamus purus turpis, volutpat sit amet lectus id, finibus maximus nulla. Morbi finibus risus in justo elementum blandit. Pellentesque ornare felis a tortor accumsan, sit amet sollicitudin purus lobortis. Vivamus tempor felis et elementum rutrum. Sed blandit, nulla a dapibus imperdiet, tortor nisi porta sem, at pharetra justo tellus sit amet diam. Aliquam sollicitudin fringilla ligula, at vulputate nunc facilisis sed. Morbi porttitor libero nec interdum euismod. Phasellus odio nibh, tristique ac metus sit amet, tristique aliquet augue. Nulla lobortis vel ante nec mattis.


      </div>
  </div>
);

export default graphql(fetchRecipes)(Home);
