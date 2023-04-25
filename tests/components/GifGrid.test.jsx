import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {

    const category = 'Messi';

    test('should SHOW loading', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('should show items when images are loaded', () => {
        
        const gifs = [
            {
                id:'ABC',
                title: 'Messi',
                url: 'https://messi.com/messi'
            },
            {
                id:'ABC123',
                title: 'Messi GOAT',
                url: 'https://futbol.com/messi'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        // screen.debug();
        expect(getAllByRole('img').length).toBe(2);
    })
}); 
