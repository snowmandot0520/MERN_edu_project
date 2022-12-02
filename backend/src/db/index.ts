import { MongoClient } from 'mongodb';
import { IS_DEVELOPMENT, DB_USERNAME, DB_PASSWORD, DB_NAME, CLUSTER_URL } from '../config/env'

// Replace the uri string with your connection string.
// example : mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER_URL}?retryWrites=true&w=majority`;

const client = new MongoClient(IS_DEVELOPMENT ? `mongodb://localhost:27017/${DB_NAME}` : URI);

console.log(`⚡️[App runing in]: ${IS_DEVELOPMENT} mode`);

client.connect((error) => {
    if (error) {
        console.log(`⚡️[DB]: Could not connected to database!`);
        console.log(error)     
    } else {
        console.log(`⚡️[DB]: Connected to database!`);
    }
});

const db = client.db(DB_NAME);

export default db;