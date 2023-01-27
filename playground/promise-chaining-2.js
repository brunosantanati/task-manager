require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('637cd5ea66c44ca30b188e4f').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('63781ec69340a3778e462c3f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})