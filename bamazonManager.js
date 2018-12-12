var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "nesa15",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Products for Sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View Products for Sale":
        itemsForSale();
        break;

      case "View Low Inventory":
        lowInventory();
        break;

      case "Add to Inventory":
      addInventory();
        break;

      case "Add New Product":
        newProduct();
        break;
      }
    });
};
function itemsForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
        
        console.table(res);
        console.log("--------------------------------");
        
    })
    connection.end()
}
function lowInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        for (let i = 0; i < res.length; i++){
        if ( res[i].stock_quantity < 5) {
        console.table(res[i]);
        console.log("--------------------------------");
        }
    }
    }
    
    );
   
}

function addInventory() {
    inquirer
    .prompt([
        {
        name: "id",
        type: "input",
        message: "Id of the item where you would like to add",
    },
     {
         name: "quantity",
         type: "input",
         message: "how many units of the product you would like to add?"
     }
])
.then(function(answer) {
    var query = "SELECT * FROM products WHERE ?";
    connection.query(query, { id: answer.id}, function(err, res){
        var productData = res[0].stock_quantity
        var updateStock = productData + parseInt(answer.quantity);
        console.log("--------------------------------------");
        
    console.log("you have " + updateStock + " in the stock");
    console.log("-------------------------------------");
    
    

    
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
            console.log("-----------------------------------------");
            
            
        }
    )
})


}) 

}
function newProduct() {
    inquirer
    .prompt([
        {
        name: "product_name",
        type: "input",
        message: "What is the name of the product?",
    },
    {
        name: "department_name",
        type: "input",
        message: "What is the name of department?",
    },
    {
        name: "price",
        type: "input",
        message: "What is the price of the product?",
    },
     {
         name: "quantity",
         type: "input",
         message: "how many units of the product you would like to add?"
     }
])
.then(function(answer) {
    console.log("Inserting a new product...\n");
    var updateStock = parseInt(answer.quantity);
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: answer.product_name,
        department_name: answer.department_name,
        price: answer.price,
        stock_quantity: updateStock,
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
     
      }
    )
    }
    
)
// connection.end()
}

