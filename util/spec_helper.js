var path = require('path');
var dotEnvTestPath = path.resolve('./.env.test');
require('dotenv').config({ path: dotEnvTestPath });
