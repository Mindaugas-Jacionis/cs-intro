function fibonachi(n) {
  if (n < 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
}

describe('fibonachi', () => {
  it('returns correct answers', () => {
    expect(fibonachi(1)).toBe(1);
    expect(fibonachi(2)).toBe(2);
    expect(fibonachi(3)).toBe(3);
    expect(fibonachi(4)).toBe(5);
    expect(fibonachi(5)).toBe(8);
    expect(fibonachi(6)).toBe(13);
  });
});

function factorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
}

describe('factorial', () => {
  it('returns correct answers', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });
});
