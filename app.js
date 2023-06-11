
const express=require("express")
const mailchimp=require("@mailchimp/mailchimp_marketing")
const app=express()
const https=require("https");
const { Server } = require("http");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}))

mailchimp.setConfig({
apiKey:"95d8ddd68faa20fd66c6d803bf61707e-us21",
server: "us21"
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
});

app.post("/",function (req,res){
    const firstName=req.body.don1
    const lastName=req.body.don2
    const email=req.body.don3

    const data={
        members: [{
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName
            }
        }]
    }


    const jsonData=JSON.stringify(data)
    const url="https://us21.api.mailchimp.com/3.0/lists/a6b56a41a2"

    const options={
        method:"POST",
        auth:'don:95d8ddd68faa20fd66c6d803bf61707e-us21'
    }

    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html")
        }
        else{
            res.sendFile(__dirname+"/failure.html")
        }

        response.on("data",function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.post("/failure",function(res,req){
 res.redirect("/")
})

app.listen(3000,()=>console.log("Server is running on port 3000")
)