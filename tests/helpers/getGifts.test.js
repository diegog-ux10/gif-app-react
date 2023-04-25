import { getGifs } from "../../src/helpers/getGifs";

describe('Test on getGifts.js', () => {
    test('should return an array of gifs', async() => {

        const gifs = await getGifs('Messi');
        expect(gifs.length).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
});
