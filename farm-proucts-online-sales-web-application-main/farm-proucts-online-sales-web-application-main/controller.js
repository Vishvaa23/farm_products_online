const {Books} = require('./schema');

module.exports.insertbook = async(req,res)=>{
    const bk = new Books({
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
    product: req.body.product,
    })
    const book = await Books.findOne({email:(req.body.email)});
    if(book)
         return res.send({msg:"bookss exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}