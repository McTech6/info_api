import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000


app.get('/', (req,res)=>{
    const data = {
        email: "tiddingramsey@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/McTech6/info_api.git"
    }
    res.json(data).status(200)
})


app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})