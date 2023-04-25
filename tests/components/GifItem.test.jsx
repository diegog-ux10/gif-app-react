import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests in Component GifItem', () => {
    
    const title = 'Messi';
    const url = 'http://messi.com/messi.jpg'

    test('should match snapshot', () => {
        const {container} = render(<GifItem />);
        expect(container).toMatchSnapshot();
    })

    test('should match img and alt', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('should exist title', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});
