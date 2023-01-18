import express from "express"
import {PrismaClient} from "@prisma/client"
import {p} from "prisma/build/public/assets/vendor";
const server = express()
const PORT = 8080
const prisma = new PrismaClient()
server.use(express.json())
server.post("/",async (req,res)=>{
    const {username,password} = req.body
  const user = await  prisma.user.create({
      data:{
          username:username,
          password:password
      }
  })
    res.status(201).json({message:"Created!"})
})

// Get all users
server.get("/",async (req,res)=>{
    const users = await prisma.user.findMany({
        include:{cars:true}
    })
    res.status(200).json({message:users})
})
// Update te data
server.put("/",async (req,res)=>{
    const {id,body} = req.body
    const thisusers = await  prisma.user.findUnique({
        where:{
            id:id
        }
    })
    const updatedUser = await prisma.user.update({
        where:{
            id:id
        },
        data:{
            username:body.username?body.username:thisuser.username,
            password:body.password?body.password:thisuser.password
        }
    })
    res.status(200).json({message:updatedUser})
})
// Delete user
server.delete('/:id',async (req,res)=>{
    const { id } = req.params
    const deletedUser = await prisma.delete({
        where:{
            id:Number(id)
        },
    })
    res.status(200).json({message: deletedUser})
})

server.post('/createMany',async (req,res)=>{
    const {Users} = req.body
    const createdUsers = await prisma.user.createMany({
        data:Users
    })
    res.status(201).json(createdUsers)
})
// Post Cars
server.post('/createCars',async (req,res)=>{
    const {Cars} = req.body
    const createdCasr = await prisma.car.createMany({
        data:Cars
    })
    res.status(201).json(createdCasr)
})
server.listen(PORT,()=>{
    console.log(`Server: http://localhost:${PORT}`)
})