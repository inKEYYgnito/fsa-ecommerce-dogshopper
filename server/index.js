require('dotenv').config()
const app = require('./app')
const db = require('./db/db')
const PORT = process.env.PORT || 8000

db.syncAndSeed()
    .then(()=> app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`)))
    
// try {
//     app.listen(PORT, () => console.log(`\nBackend service running on port ${PORT}\n`))
// } catch (e) {
//     console.error(`Failed to load app on port ${PORT}`)
// }
