import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.axios(axios));

const videos = app.service('videos');
export { videos };
export default app;
