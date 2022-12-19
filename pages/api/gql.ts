import { ApolloServer } from "apollo-server-micro";
import type { MicroRequest } from "apollo-server-micro/dist/types";
import type { ServerResponse, IncomingMessage } from "http";

const server = new ApolloServer({});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: MicroRequest,
  res: ServerResponse<IncomingMessage>
) {
  await startServer;
  await server.createHandler({ path: "/api/gql" })(req, res);
}
