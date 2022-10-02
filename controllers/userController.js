
const models = require("../models/index"),
    User= models.metaUser;
    Op = models.Sequelize.Op;



exports.signUp = async (res, req) => { //회원가입 함수

        models.User.create({  
                userEmail: req.body.userEmail,
                userName: req.body.userName,
                userpwd: req.body.userpwd
        })
        .then( result => {
                console.log("회원가입 완료");
                
        })
        .catch( err => {
                console.log(err)
                console.log("회원가입 실패");
                res.send("<script>alert('이미 사용중인 이메일입니다.');location.href='/signUp';</script>");
        })
};


exports.userDelete = async (req, res) => {   //회원 탈퇴
    try {
        console.log("UserDelete 중 삭제할 Id", req.session.idx)
        await User.destroy({ //세션에 저장된 id로 memberId를 찾아 destroy 해준다.
            where:{
                userID : req.session.idx
            }
        });
        
        console.log("회원 삭제 완료")
        //탈퇴 완료 view로 랜더링
    
    } catch(err) {
    //    res.render(블라블라) //오류 view로  보내준다.(for user)
        console.log(err); //for developer
    }
}

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




  