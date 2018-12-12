# Welcome to Bamazon!

### Customer View 

How to Install and Run the Application:
1. Install the app by cloning this repo and navigating to the file in the command line.
2. Remember to npm install so the dependencies are loaded to your local copy of the app.
3. Create a database using MySQL called Bamazon. Use the code in the bamazonSchema.sql file to populate your Bamazon database with tables and some inventory. (Use Workbench, Sequel Pro or MySQL in the command line).
4. Run the application by typing node bamazonCustomer.js in the command line. 
5. Follow the prompts to Make Bamazon Purchases.

**Demo**

1.In the first image we see availble products for purchase.

![image1](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(35).png)

2. The client enter ID number of the product and how many units of the product they want.
Display message show the customer the total cost of their purchase.

![image2](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(36).png)

3. On this image we can see that we Update SQL database to reflect the remaining quantity.

![image3](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(37).png)

4. If customer want to purchase more items then it is in the stock, the message will be display.

![image4](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(38).png)

## Manager View
**Demo**
1. In the first screen we have list of menu options.

![image5](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(44).png)

2. If Manager select **View Products for Sale**, the app will list every available item.

![image6](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(45).png)

3. if Manager select **View Low Inventory**, will see list of all items with an inventory count lower than five.

![image7](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(46).png)

4. If a manager selects **Add to Inventory**,  app will display a prompt that will let the manager "add more" of any item currently in the store.

![image8](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(47).png)

5. If a manager selects **Add New Product**, it will allow the manager to add a completely new product to the store.

![image9](https://github.com/nenadlazarevic/bamazon/blob/master/assets/images/Screenshot%20(48).png)
