export default interface CardModel {
    id: string,
    name: string,
    description: Description;
}
interface Description {
    age: number,
    city: string,
    imgPath: string
}