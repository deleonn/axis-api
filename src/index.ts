import { connect } from 'mongoose';
import express from 'express';
import http from 'http';
import graphqlHTTP from 'express-graphql';
import { schema } from './graphql';

const PORT = 4000;
const MONGODB_URI = 'mongodb://mongoadmin:secret@127.0.0.1:27017/axis';

connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
)
  .then(() => console.info(`DB connected to ${MONGODB_URI}`))
  .catch((reason: string) => {
    console.info(`Failed to connect due to ${reason}`);
    process.exit(1);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const server = http.createServer(app);

server
  .listen(PORT)
  .on('error', (error: string) => console.error(error))
  .on('listening', () => console.info(`Listening on port ${PORT}...`));
