const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('list.ejs')
})

app.get('/summary', (req,res)=>{
    const doneMembers=req.query.doneMembers
    const notDoneMembers=req.query.notDoneMembers    
    const doneStudents=doneMembers.split(',')
    const notDoneStudents=notDoneMembers.split(',')

    res.render('summary', {
        doneMembers:doneStudents,
        notDoneMembers:notDoneStudents
    })
})

app.listen(7676, ()=>{
    console.log('Database connected successfully');  
})