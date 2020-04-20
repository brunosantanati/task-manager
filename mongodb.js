// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)*/

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    let searchCriteria = { _id: new ObjectID('5e9929b72a83056d12fb9026') }
    //searchCriteria = { name: 'Jen', age: 1 }
    //searchCriteria = { name: 'Jen' }

    db.collection('users').findOne(searchCriteria, (error, user) => {
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27 }).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({ _id: new ObjectID('5e9a6d2f47f59735e39b277e') }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })

    /*db.collection('users').insertOne({
        _id: id,
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
    })*/
})