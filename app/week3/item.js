

export default function Item({name, quantity, category}){
    return (
        <div className="bg-blue-500 text-white"> 
        <li>
            {name},
        </li>
        <li> buy {quantity}, in {category}</li>
        </div>
    );
}