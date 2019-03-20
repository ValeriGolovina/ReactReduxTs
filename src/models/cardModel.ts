export default interface CardModel {
    id: string,
    name: string,
    description: Description;
    status: string
}
interface Description {
    age: number,
    city: string,
    imgPath: string
}