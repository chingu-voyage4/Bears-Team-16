import User from "../../models/user";

export const queryText = `
	users: [User]
  	user(id: ID!): User
`;

export const queries = {
  async users() {
    const allUsers = await User
      .forge()
      .orderBy(`title`, `ASC`)
      .fetchAll({ withRelated: [ `user` ] })
      .then(users => users.toJSON());
    return allUsers;
  },
  async user(_, { id: userId }) {
    const singleUser = await User
      .where(`id`, userId)
      .fetch({ withRelated: [ `user` ] })
      .then(user => {
        if (!user) return;
        return user.toJSON();
      });
    return singleUser;
  },
};
