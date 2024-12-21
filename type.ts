type User={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditCard?:number
}

let myUser:User={
    _id:"12345",
    name:"hey",  
    email:"@gmail.com",
    isActive:true
}


myUser.name='HAIIII'

