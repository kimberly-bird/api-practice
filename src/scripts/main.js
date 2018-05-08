const $ = require("jquery")

$.ajax("http://localhost:8088/food")
    .then(() => {
        $.ajax({
            url: "http://localhost:8088/food/ZeLCGnN",
            method: "PUT",
            data: {
                name: "Hamburger again",
                type: "meat again",
                ethnicity: "america",
                sideDishes: ["fries", "tots", "potato salad"]
            }
        })
    })
    // ajax and .then are promises. .then allows chaining promises. if you want a promise to be used in another promise, you need to return it to be used. promises allow code to run in a more syncronous way (wrap in promise to allow it to wait in the order of execution for full request/response cycle)
    .then(() => {
        // must return this promise to the next promise or will come back as undefined
        return $.ajax("http://localhost:8088/food")
    })
    .then(response => {
        console.log(response);
    })