import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./userResolver";

const resolvers = mergeResolvers([userResolver]);
export default resolvers;
