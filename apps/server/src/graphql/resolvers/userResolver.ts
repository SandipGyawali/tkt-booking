export const userResolver = {
  Query: {
    user: (parent, args, context, info) => {
      // fetch user by args.id
    },
    users: () => {
      // fetch all users
    },
  },
  User: {
    // field resolvers if any
  },
};
