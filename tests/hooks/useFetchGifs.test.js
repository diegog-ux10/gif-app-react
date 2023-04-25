import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test in custom hook', () => {
    test('should return initial state', () => {
        const {result} = renderHook(()=> useFetchGifs('Messi'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('should return an array of images and isLoading in false', async() => {
        const {result} = renderHook(()=> useFetchGifs('Messi'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )
            
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy ();
    })
});
