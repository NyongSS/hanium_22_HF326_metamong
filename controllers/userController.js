const db= require("../models/index.js"),
    User= db.metaUser,
    getUserParamas = body =>{
        return{
            nickname: body.first,
            userEmail: body.last,
            password: body.password
            //나중에 뱉어내도록

        };
    };
    modele.exports={
        index: async(req,res,next)=>{
            try{
                let users= await User.findAll();
                //이런식
            }catch(error){
                console.log(`Error fetching users: ${error.message}`);
                next(error);
            };
        }
    }

  