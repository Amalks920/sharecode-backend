import express from 'express'
const app = express()

app.use((req,res,next)=>{
    console.log('just a ....')
    next()
})

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(4000,()=>{
    console.log('server is running')
})