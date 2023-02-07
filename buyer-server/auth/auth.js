// var jwt = require('jsonwebtoken');
// module.exports=(req,res,next)=>{
//     try{
//         const token=req.headers.authorization.split('')[1]

//         const decodeToken=jwt.verify(token,'secretKey')

//         next()

//     }catch(error){
//         return res.status(401).send({
//             message:'Yetkisiz Erisim Kardesim',
       
//         })

//     }
// }