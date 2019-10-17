/* load configs */
require('dotenv').config()
require('./config/passport-setup')

/* app setup */
const app = require('./app')
const db = require('./db')

const PORT = process.env.PORT || 8000

try {
    db.sync().then(app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`)))
} catch (e) {
    console.error(`Failed to load app on port ${PORT} with error: ${e}`)
}
