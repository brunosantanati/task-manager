require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('637cd5ea66c44ca30b188e4f').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})