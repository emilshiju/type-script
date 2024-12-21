// if dont want access


class User{
    public email:string
    name:string
    private  readonly city:string='lkjio'
    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }
}