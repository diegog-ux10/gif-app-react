import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('test en <AddCategory />', () => {
    test('should change value in textbox', () => {
        render(<AddCategory onNewCategory={ ()=>{} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Messi'}} );

        expect( input.value ).toBe('Messi');

        // screen.debug();
    })

    test('should call onNewCategory if input has a value', () => {
        const inputValue = 'Messi';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, {target: {value: inputValue}} );
        fireEvent.submit( form );
        // screen.debug();
        expect(input.value ).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('should not call onNewCategory if input is empty', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');
    
        fireEvent.submit( form );
        // screen.debug();
        expect(onNewCategory).not.toHaveBeenCalled();
    })
});
