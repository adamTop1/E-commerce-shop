import express from 'express'

const app = express()

app.get('/', function ({req,res}: {req: express.Request, res: express.Response}) {
	res.send('Hello World')
})

app.listen(4000)
