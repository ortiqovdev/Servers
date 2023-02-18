import net, {Server, createServer , Socket} from 'net'

const app:Server = createServer()

app.on('connection', (socket: Socket)=>{
    console.log('boglanish bor')
    socket.on("data",(data)=>{
        
    })
})

// 172.20.3.18
// 1116