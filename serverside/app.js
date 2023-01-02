const express=require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express()
const port=process.env.PORT || 4040;
const bodyParser = require('body-parser')
const cors = require('cors')

// middle ware
app.use(cors())
app.use(bodyParser.json())
const uri = "mongodb+srv://user1:noWJZJyWz7KCuvKj@cluster0.y8g1qyk.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
 try{
    const collection = client.db("Food").collection("user");
    // How to post data in to server
    app.post("/user",async(req,res)=>{
        const bodydata=req.body
        const result=await collection.insertOne(bodydata)
       res.send(result)
    })
    // how to get data
    app.get("/user",async(req,res)=>{
        const query={}
        const user=collection.find(query)
        const result=await user.toArray()
        res.send(result)
    })
    // routing
    app.get("/user/:id",async(req,res)=>{
        const id=req.params.id
        const query={_id:ObjectId(id)}
        const result=await collection.findOne(query)
        res.send(result)
    })
    // delete
    app.delete("/user/:id",async(req,res)=>{
        const id=req.params.id
        const query={_id:ObjectId(id)}
        const result=await collection.deleteOne(query)
        res.send(result)
    })
    app.put("/user/:id",async(req,res)=>{
        const bodydata=req.body
        const id=req.params.id
        const query={_id:ObjectId(id)}
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              name:bodydata.name,
              email:bodydata.email
            },
          };
        const result=await collection.updateOne(query,updateDoc,options)
        res.send(result)
    })
 
 }finally{
    
 }
}
run().catch(console.dir)

app.get("/",(req,res)=>{
    res.send("Hello Express js")
})

app.listen(port,()=>{
    console.log(`Your server run successfull-${port}`)
})