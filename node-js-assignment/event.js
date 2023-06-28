const Events = require("events")

const emmiter = new Events()
const subscribeCallback = (name) => console.log(`Thanks for Subscribing to ${name}`)
emmiter.addListener("subscribe", subscribeCallback)
// before removing 
emmiter.emit("subscribe", "College Wallah")

emmiter.setMaxListeners(5)
console.log(`The maximum number of event listners are: ${emmiter.getMaxListeners()}`)
// after removing print nothing
emmiter.removeListener("subscribe", subscribeCallback)
emmiter.emit("subscribe", "College Wallah")