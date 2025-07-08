import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ENVIRONMENT } from "../lib/env";

const authMiddleware = new ApolloLink((operation, forward) => {
  // check for the session and set the operation context header

  return forward(operation);
});

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    // if (graphQLErrors) {
    //   graphQLErrors.forEach((err) => {
    //     //   if (err.extensions.code === "UNAUTHENTICATED") {
    //     //   }
    //   });
    // }

    if (networkError && networkError?.response === "invalid_token") {
      // delete the session stored too
      window.location.href = "/login";
    }
  }
);

const link = from([
  authMiddleware,
  errorLink,
  new HttpLink({
    uri: ENVIRONMENT["VITE_API_URI"],
  }),
]);

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

// apollo client provider wrapper method.
export function _ApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default apolloClient;
