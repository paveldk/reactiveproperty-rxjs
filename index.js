const ReactiveProperty = require("./reactive-property");

let pesho = new ReactiveProperty(20);

pesho.subscribe(x => {
    console.log(x);
});

pesho.subscribe(x => {
    console.log(x);
});

pesho.value = 10;