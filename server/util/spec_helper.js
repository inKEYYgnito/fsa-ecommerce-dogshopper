const path = require('path');
const dotEnvTestPath = path.resolve('./.env.test');
require('dotenv').config({ path: dotEnvTestPath });

const db = require('./../db/db');

beforeEach(async () => {
  await db.sync(true);
});
