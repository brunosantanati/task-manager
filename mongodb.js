// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Bruno',
        age: 33
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },{
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'Read the Bible',
            completed: true
        },{
            description: 'Learn Golang',
            completed: false
        },{
            description: 'Teach programming to my children',
            completed: true
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })
})