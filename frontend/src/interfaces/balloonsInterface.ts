
export default interface Balloon {
    _id: string,
    model_num: string, 
    type_img_url: string, 
    type: string,
    size: string,
    color: string, 
    img_url: string, 
    price: number,
    package: string
}

export default interface User {
    email: string,
    password: string
}