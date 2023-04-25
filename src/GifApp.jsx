import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        const arrCheck = categories.map( (cat) => {return cat.toLocaleLowerCase} );
        const valCheck = newCategory.toLowerCase
        if(arrCheck.includes(valCheck)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)} 
            />
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))}
            </ol>
        </>
    )
}