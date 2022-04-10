
const fs=require("fs");

const express=require("express");
const app=express();



app.get("/createfile",function(req,res){
    
    const d=new Date();
    let filename =`${d.getDate()}-${(d.getMonth() + 1)}-${d.getFullYear()}-${d.getHours()}.${d.getMinutes()}`;
    // filename=filename.toString();
    console.log(filename)

    let timestamp=Math.floor(new Date().getTime() / 1000).toString();


    fs.writeFile(`./${filename}.txt`,timestamp, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

   res.send("file created");
})
app.listen(4000)