const express = require("express");
const app = express();

//require firestore credentials
const admin = require("firebase-admin");
const credentials = require("./serviceAccount.json");

//initialize app using the credentials
admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Post method with defined ids
app.post("/create", async (req,res)=>{
  try {
    console.log(req.body);
    const id = req.body.name;
    const userjson= {
      age : req.body.age,
      name: req.body.name
    };
    const response = await db.collection("Graduates").doc(id).set(userjson);
    res.send(response);
  } catch (error) {
    res.send(error)
  }
})

// //Post method with unique ids
// app.post("/create", async (req,res)=>{
//   try {
//     console.log(req.body);
//     const id = req.body.name;
//     const userjson= {
//       age : req.body.age,
//       name: req.body.name
//     };
//     const response = db.collection("Graduates").add(userjson);
//     res.send(response);
//   } catch (error) {
//     res.send(error)
//   }
// })

//Reading all the data from the firestore
app.get("/readAll", async (req,res)=>{
  const graduatesRef = db.collection('Graduates');
const response = await graduatesRef.get();
let resArray = [];
response.forEach(doc => {
  resArray.push(doc.data())
  console.log(resArray);
  
});
res.send(resArray);
})

//Readingspecific data from Firestore
app.get("/read/:id", async (req,res)=>{
  const graduateRef = db.collection('Graduates').doc(req.params.id);
const response = await graduateRef.get();
res.send(response.data());

})

//Updating firestore
app.post("/update", async (req,res)=>{

  const id = req.body.id;
  const updateName = "Mfowam"
  const response = db.collection('Graduates').doc(id)
  .update({
    name:updateName
  });
  res.send(response);

})

//Deleting data from Firestore
app.delete("/delete/:id", async(req,res)=>{
  const response = await db.collection("Graduates").doc(req.params.id).delete();
  res.send(response);
})

// app.get("/readAll", async (req,res)=>{
//   try {
//     const graduateRef =  db.collection("Graduates");
//     const response =  graduateRef.get();
//     let resArray = [];
//     response.forEach(doc =>{
//       resArray.push(doc.data());
//       console.log(resArray.push(doc.data()))
//     })
//   } catch (error) {
//     res.send(error);
//   }
// })



const db = admin.firestore();



app.listen(9500,()=>{
  console.log("Server up and running on port 9500!!!");
})