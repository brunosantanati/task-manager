require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('637bb65368130a96b9e0a995', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})