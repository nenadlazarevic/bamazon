var mysql = require("mysql");
var inquirer = require("inquirer");
 require('console.table');
// var  productQuantity;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "nesa15",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if(err) throw err;
    start();
    
    
});

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        
        console.table(res);
        console.log("--------------------------------");
        
        buyProduct()
    })
    
}
function buyProduct() {
    inquirer
    .prompt([
        {
        name: "id",
        type: "input",
        message: "Enter ID of the product you would like to buy",
    },
     {
         name: "quantity",
         type: "input",
         message: "how many units of the product you would like to buy?"
     }
])
.then(function(answer) {
    var query = "SELECT * FROM products WHERE ?";
    connection.query(query, { id: answer.id}, function(err, res){
        var productData = res[0].stock_quantity
        var updateStock = productData - answer.quantity;
        if (updateStock >=0) {
        //  console.log(updateStock);
        console.log("---------------------------------------------");
        console.log("you purchase: " + answer.quantity + " " + "'" +res[0].product_name+"'");
        console.log("---------------------------------------------");
        
        console.log("your bill is: $" + answer.quantity * res[0].price );
        console.log("---------------------------------------------");
        
    // })
        
    

    
    var queryUpdate = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: updateStock
            },
            {
                id: answer.id
            }
        ],
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            
        }
    )
    } else {
        console.log("Insufficient quantity!");
        
    }
    // console.log(queryUpdate.sql);
   connection.end()
})
 

})
}
