import { Socket } from "net";

const clent = new Socket

clent.connect(1116,()=>{
    console.log(":1116");
    
})
clent.on ('data ', (data : Buffer)=>{
    console.log('salom'+ data.toString);
    
})