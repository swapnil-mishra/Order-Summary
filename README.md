 # Hackerearth frontend contest
## Order Summary- Shopping cart order summary using React.js

<img src="https://github.com/swapnil-mishra/Order-Summary/blob/main/preview.png" width="900px" alt="Order Summary"/>

## Description:
The order summary of the shopping cart is created using React.js and the complete workflow is divided in 5 subsections:

1. The Main layer (components/Main.js) comprises of all the products/items inside the cart which is taken from JSON data (data.js)
using product mapping in Main to Product (components/Product.js).
2. The Header layer(components/Header.js)comprises the navbar named order summary.
3. The Cart layer(components/Cart.js) comprises of all the items which are added and modified inside the cart.
4. The Basket layer(components/Basket.js) comprises of total amount achieved after application of discounts.

## Overview:
The webpage is successful in carrying out the following operations.
1. Two-column layout representation of cart items and total cost.
2. Data is imported from the JSON data.
3. User can update the no. of items of items.
4. Toast message notification when any item is deleted from cart (using React Toastify).
5. Dynamic updation of total costs and discounts with change in number of items (without refreshing of page).
6. Reload/refresh of page maintains the items in the cart (due to React useState() property and JSON stringify function used 
to store and parse data values from local storage). 
7. Product add to cart button to get the items loaded to cart from JSON data when no item is present in cart.
8. Responsiveness of page accross various devices is taken care of.
9. The change in total cost, product type discount and normal discount with change in items and its quantity is implemented dynamically. 

## Steps to follow:
* Create a folder with name Shopping_Cart.
* Launch Visual Studio Code and open the folder you recently created.
* Inside the terminal window type:

   `npx create-react-app order_summary`

* A folder named order_summary comprising of *nodemodules* will be created 
* After the completion of process type
  
   `cd order_summary`

* Now, unzip the src folder and replace it with the src folder inside order_summary and inside terminal window type

  `npm start`

* The output will now be available in your browser window.
