const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET products page. */
router.get("/", function (req, res, next) {
    const products = readJsonFile("./mockdata/products.json");
    res.render("products", { title: "Express" });
});

// function readJsonFile(filePath) {
//     const products = new Promise((resolve, reject) => {
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 reject(err);
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 resolve(JSON.parse(data));
//             }
//         });
//     })
//         .then((value) => {
//           console.log(value);
//           return value;
//     })
//         .catch((err) => {
//             console.log(err);
//     });
//     console.log(products);
//     return products;
// }

module.exports = router;
