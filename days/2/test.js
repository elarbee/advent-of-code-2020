const assert = require('assert');
const {tokenizeLine,lengthRule,posRule,getTokens,partI,partII} = require('./index.js');

describe('Day 2', () => {
    describe('Helper functions', () => {
        it('tokenizeLine', () => {
            const password = "5-9 g: ggccggmgn";
            const token = tokenizeLine(password);
            assert(token.rule.a === 5);
            assert(token.rule.b === 9);
            assert(token.rule.letter === 'g');
            assert(token.password === 'ggccggmgn')
        });
        it('lengthRule', () => {
            const goodPW = '11-16 l: llllqllllllllflq';
            const goodToken = tokenizeLine(goodPW);

            const badPW = '1-2 l: llllqllllllllflq';
            const badToken = tokenizeLine(badPW);

            assert(lengthRule(goodToken));
            assert(!lengthRule(badToken));
        });
        it('posRule', () => {
            const goodPW = '3-5 f: fffvnpvf';
            const goodToken = tokenizeLine(goodPW);

            const badPW = '3-5 f: ffdvnpvf';
            const badToken = tokenizeLine(badPW);

            assert(posRule(goodToken));
            assert(!posRule(badToken));
        });
        it('getTokens', () => {
            getTokens(tokens => {
                tokens.every(t => {
                    assert(t.rule.a);
                    assert(t.rule.b);
                    assert(t.rule.letter);
                    assert(t.password)
                });
            });
        });
    });
    describe('solution', () => {
        it('partI', () => {
            partI(ans => assert(ans === 458));
        });
        it('partII', () => {
            partII(ans => assert(ans === 342))
        });
    });
});