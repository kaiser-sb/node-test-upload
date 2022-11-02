const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
    console.log(`The data is received 
    1. ${name}
    2. ${age}`);
})

customEmitter.on("response", () => {
    console.log("New logic passed");
})

customEmitter.emit("response", "Jack", 32);