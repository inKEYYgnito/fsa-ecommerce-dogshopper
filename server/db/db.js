const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL)
const { UUID, UUIDV4, STRING, TEXT, BOOLEAN } = Sequelize

const Dog = conn.define('dog', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        unique: true
    },
    description: {
        type: TEXT,
        allowNull: false,
        unique: true
    },
    price: {
        type: STRING,
        validate: {
            isDecimal:true,
            min:0.0
        }
    },
    imageURL: {
        type: STRING,
        validate: {
            isUrl: true
        }
    },
    isAvailable: {
        type: BOOLEAN
    }
})

const syncAndSeed = async()=> {
    await conn.sync({force:true})
    const dogs = [
        {name: 'Katsu1', description: 'Katsu is a young and lively pup who loves peanut butter', price: 14.99, imageURL: 'https://www.swissridgekennels.com/wp-content/uploads/gigi-8.jpg', isAvailable: true},
        {name: 'Katsu2', description: 'This pup will make u smile', price: 15.99, imageURL: 'https://www.swissridgekennels.com/wp-content/uploads/cedar-3-236x300.jpg', isAvailable: true},
        {name: 'Katsu3', description: 'Great pupster', price: 13.99, imageURL: 'https://www.allthingsdogs.com/wp-content/uploads/2019/05/Apricot-Color-Teacup-Poodle.jpg', isAvailable: true}
    ]
    await Promise.all(dogs.map(dog => Dog.create(dog)))
}

module.exports = {
    syncAndSeed,
    models:{
        Dog
    }
}