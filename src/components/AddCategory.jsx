import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = (event) => {
        setInputvalue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const valueFix = inputvalue.trim();
        if(valueFix.length <= 1) return;
        onNewCategory(valueFix);
        setInputvalue('');
    }

  return (
    <form onSubmit={(onSubmit)}>

        <input
            type="text"
            value={ inputvalue }
            placeholder="Buscar Gif"
            onChange={ onInputChange } 
        />

    </form>
  )
}
