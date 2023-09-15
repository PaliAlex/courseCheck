//write the easiest test first
describe('test', () => {
    it('should pass', () => {
        //Given
        const first = [
            'first',
            'second',
            'third'
        ];

        //Then
        expect(first).toBe(first);
    });
});
