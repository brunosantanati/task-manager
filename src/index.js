const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

/*app.use((req, res, next) => {
  console.log(req.method, req.path)
  if (req.method === 'GET') {
    res.send('GET requests are disabled')
  } else {
    next()
  }
})

app.use((req, res, next) => {
  res.status(503).send('Site is currently down. Check back soon!')
})*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// ############### Json Web Token test
/*const jwt = require("jsonwebtoken")

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
  console.log(token)

  const data = jwt.verify(token, 'thisismynewcourse')
  console.log(data)
};

myFunction()*/

// ############### toJSON test
/*const pet = {
  name: 'Hal'
}

pet.toJSON = function () {
  return {}
}

console.log(JSON.stringify(pet))*/

// ############### User/Task Relationship test
/*const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  //const task = await Task.findById('65a4a305d8f2dfbc181fbf91')
  //await task.populate('owner').execPopulate()
  //console.log(task.owner)

  const user = await User.findById('65a49f5f11aa1bb91ca79fe4')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()*/