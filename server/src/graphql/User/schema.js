export default `
	type User {
		id: ID!
		uname: String!
		email: String!
		password: String
		location: String
		bio: String
		recipes: [Recipe]
	}
`;
