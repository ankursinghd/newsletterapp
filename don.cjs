const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "95d8ddd68faa20fd66c6d803bf61707e-us21",
  server: "us21",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();


const express=require("express")
const mailchimp=require("@mailchimp/mailchimp_marketing")
const app=express()
const https=require("https");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}))

mailchimp.setConfig({
apiKey:

})
// api key
// 95d8ddd68faa20fd66c6d803bf61707e-us21

// audience id
// a6b56a41a2.