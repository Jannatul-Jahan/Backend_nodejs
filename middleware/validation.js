const { success, failure } = require("../util/common");

const {body} = require("express-validator");

const validator = {
    create:[
        body("name").exists().withMessage("name must be added").isString().withMessage("name must be sting"),
        body("price").exists().withMessage("price must be added"),
        body("stock").exists().withMessage("stock must be added"),
        body("author").exists().withMessage("author must be added").isString().withMessage("author must be sting")
    ]
}

// const createValidation = (req, res, next)=>{
//     const { name, price, stock, author} =req.body;
//     const errors = {};

//     if(!name || name ===""){
//         errors.name = "name is not provided";
//     }
//     if(!price || price ===""){
//         errors.price = "price is not provided";
//     }
//     if(!stock || stock ===""){
//         errors.stock = "stock is not provided";
//     }
//     if(!author || author ===""){
//         errors.author = "author is not provided";
//     }
//     if(Object.keys(errors).length>0){
//         return res.status(422).send(failure("unprocessable entity", errors))
//     }
//     next();
// };

// module.exports = createValidation;
module.exports = validator;