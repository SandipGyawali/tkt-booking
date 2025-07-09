import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync("src/graphql/schema/**/*.graphql");
// console.log("The types array is");
// console.log(typesArray);
const _mergeTypeDefs = mergeTypeDefs(typesArray);
// console.log("The merge type defs is");
// console.log(_mergeTypeDefs);

export default _mergeTypeDefs;
