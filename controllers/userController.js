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


    const getNickname = async(id) => {
        try{
            data= User.findOne(
                {
                    where:{ userID:id }
                }
            )
            return data;
        }catch(err){
            return err;

        }
    }

    const getUsername = async(id) => {
        try{
            data= User.findOne(
                {
                    where:{ userID:id }
                }
            )
            return data;
        }catch(err){
            return err;

        }
    }

    const getEmail = async(id) => {
        try{
            data= User.findOne(
                {
                    where:{ userID:id }
                }
            )
            return data;
        }catch(err){
            return err;

        }
    }




  