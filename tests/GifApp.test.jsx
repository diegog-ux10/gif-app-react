import { render, renderHook, screen, fireEvent } from "@testing-library/react";
import { GifApp } from "../src/GifApp";
import { useState } from "react";

describe('Test on <GifApp />', () => {
    test('should match snapshot', () => {
        const {container} = render(<GifApp />);
        expect(container).toMatchSnapshot();
    })

    test('should change the categories', () => {
        const {result} = renderHook(()=> useState(['One Punch', 'Dragon Ball']));
        const [categories] = result.current;
        const inputValue = 'Messi';

        render(<GifApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: {value: inputValue}} );
        
        expect(input.value).toBe(inputValue)
    })
});
