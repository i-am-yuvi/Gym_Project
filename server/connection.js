const mongoose=require('mongoose');

const connect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://yuvraj:MNWWxAQhngKpPrix@gymkhana.uxvzkwk.mongodb.net/?retryWrites=true&w=majority&appName=gymkhana",{ useNewUrlParser: true });
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}


connect()