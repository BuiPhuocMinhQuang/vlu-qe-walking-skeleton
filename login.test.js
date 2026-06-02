const { checkLogin } = require('./login');

test('Đăng nhập đúng (admin / 123)', () => {
    expect(checkLogin('admin', '123')).toBe(true);
});

test('Sai username', () => {
    expect(checkLogin('user', '123')).toBe(false);
});

test('Sai password', () => {
    expect(checkLogin('admin', 'wrong')).toBe(false);
});

test('Sai cả username và password', () => {
    expect(checkLogin('abc', 'xyz')).toBe(false);
});
