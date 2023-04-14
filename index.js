import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import {configDB} from './configDB.js';

const db=mysql.createConnection(configDB)
const app=express()
app.use(cors())
app.use(express.json())

app.get('/all',(request,response)=>{
    db.query('select * from todos order by timestamp desc',(error,results)=>{
        if(error)
            console.log(error)
        else
            response.send(results)
        
    })
})

app.post('/add',(request,response)=>{
    const {name}=request.body
    console.log('name:',name)
    db.query('insert into todos (name) values (?)',[name],(error,result)=>{
        if(error)
            console.log(error)
        else{
            //const lastInserted={id:result.insertId,name:name,timestamp:new Date().toISOString().slice(0, 19).replace('T', ' '),status:0}
            response.send(result)
        }
            
    })
})

app.delete('/del/:id',(request,response)=>{
    const {id}=request.params
     db.query('delete from todos where id=?',[id],(error,results)=>{
        if(error)
            console.log(error)
        else
            response.send(results)
    })
})

app.put('/done/:id',(request,response)=>{
    const {id}=request.params
    console.log('done id:',id)
     db.query('update todos set status= not status where id=?',[id],(error,results)=>{
        if(error)
            console.log(error)
        else
            response.send(results)
    })
})

app.delete('/delAll',(request,response)=>{
    const {id}=request.params
     db.query('delete from todos ',(error,results)=>{
        if(error)
            console.log(error)
        else
            response.send(results)
    })
})

const port=process.env.PORT || 8000
app.listen(port,()=>console.log(`server listening on port ${port}...`))
