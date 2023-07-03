import events from 'events'

export const emitter = new events.EventEmitter()
emitter.on("access-token", (token) => {
    if(!token){
        throw new Error("Access token is not provided!!")
    }
})