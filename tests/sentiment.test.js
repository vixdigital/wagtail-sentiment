// Sentiment is a third part package, but we should test it to make sure
//  the results are consistent through upgrades. 
// We can also test phrases/words that are particularly important to us to make
//  sure that they are covered as expected in the dictionary.
const sentiment = require('sentiment');

test('Evaluates the word "great" as positive (score > 0)', () => {
    expect(sentiment("great").score).toBeGreaterThan(0);
});

test('Evaluates the word "angry" as negative (score < 0)', () => {
    expect(sentiment("angry").score).toBeLessThan(0);
});

test('Evaluates the word "programming" as neutral (score == 0)', () => {
    expect(sentiment("programming").score).toBe(0);
});

test('Evaluates the phrase "Nice to meet you! Shame the weather is bad today." as exactly -2 (negative overall)', () => {
    expect(sentiment("Nice to meet you! Shame the weather is bad today.").score).toBe(-2);
});