///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal * (1 + tax) - couponValue;
};


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The first property in the customer object should be a name. 
        The restaurant should know the customer's name so they can connect with them and know who they are serving.
        The data type will be a string.
        It's only one customer so it should be a string.
    The second property will be the customer's age.
        If they are serving alcohol they will need to make sure the customer is old enough to order it.
        The data type will be a number.
        Age is number.
    The third property will be the order.
        The restaurant needs to know what the customer wants to eat and drink.
        The data type will be an array.
        If the customer wants to order multiple things it should be in an array.
    The fourth property will be if the customer is satisfied.
        The restaurant wants to know how their service and food is so they want to know if the customer is satisfied.
        The data type will be a boolean.
        The customer is either satisfied or not so it needs to be a boolean.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: `Bill`,
    age: 40,
    order: [`tacos`, `sandwich`, `fries`, `water`, `beer`],
    isSatisfied: true 
};

console.log(customer);