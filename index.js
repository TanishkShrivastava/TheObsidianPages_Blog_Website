import express from "express"


const app = express();
const port = 3000;
app.use(express.static("public"))

var blogArray = [ {
        title: "What is Blog?",
        content: "Check the full article inside.",
        image: "/Images/BlogImage1.png"
    },

    {
        title: "The problem with Indian Wildlife Tourism",
        content: "Check the full article inside.",
        image: "/Images/BlogImage2.png"
    },

    {
        title: "What Einstein said about Gravity",
        content: "Check the full article inside.",
        image : "/Images/BlogImage3.png"
    }

];

app.get("/",(req,res)=>{
    res.render("index.ejs",{blogArray});
})

app.post("/article",(req,res)=>{
    res.render("")
})

app.get("/create",(req,res)=>{
    res.render("createPost.ejs")
})

app.listen(port, ()=>{
    console.log(`I Love You ${port}`);
})