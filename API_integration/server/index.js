const express = require('express')
const app = express();


//  creating product array list to fecth in the fronted
app.get('/api/products', (req, res) => {
    const Products = [
        {
            id: 1,
            name: "Earphone",
            price: 200,
            desc: 'This is a good Earphone'
        },
    
        {
            id: 2,
            name: "Smart phone",
            price: 200,
            desc: 'This is a good Earphone'
        },
    
        {
            id: 3,
            name: "Watch",
            price: 200,
            desc: 'This is a good Earphone'
        },
    
        {
            id: 4,
            name: "Bike",
            price: 200,
            desc: 'This is a good Bike'
        },
    
    ]

    //  For Searching the products
    if(req.query.search){
        const filterProducts = Products.filter(product => product.name.includes(req.query.search));
        res.send(filterProducts);
        return;
    }

    //  for delaying the response
    setTimeout(() => {
        res.send(Products)
    }, 3000);
    
});


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);

})