const express  = require('express')
const app = express()
const PORT = process.env.PORT || 4044


app.get('/', (req, res)=>{
	console.log(`it's working!!`)
	res.send(`Hello from my server process id: ${process.version}`)
})

app.listen(PORT, ()=> {console.log(`listen on port ${PORT}`)})

