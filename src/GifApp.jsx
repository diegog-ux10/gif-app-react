import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        const arrCheck = categories.map( (cat) => {return cat.toLocaleLowerCase} );
        console.log(arrCheck);
        const valCheck = newCategory.toLowerCase
        if(arrCheck.includes(valCheck)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)} 
            />
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}