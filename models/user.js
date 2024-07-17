const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    age:{
        type:Number,
        require:true,
    },

    email:{
        type:String,
    },

    mobile:{
        type:String,
    },

    adress:{
        type:String,
        require:true,
    },

    aadharCardNo:{
        type:String,
        require:ture,
    },

    password:{
        type:String,
        require:true,
    },

    role:{
        type:String,
        enum:['admin','voter'],
        defoult:'voter',
    },
    isVoted:{
        type:boolean,
        defoult:false
    }

})


const user=mongoose.model('user',userSchema);
module.exports=user;