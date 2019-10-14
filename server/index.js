const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 8000

try {
    app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`))
} catch (e) {
    console.error(`Failed to load app on port ${PORT}`)
}
