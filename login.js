// Hàm kiểm tra đăng nhập
function checkLogin(username, password) {
    return username === 'admin' && password === '123';
}

// Xử lý form (chạy trên browser)
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        const result = checkLogin(user, pass);

        document.getElementById("result").innerText = result 
            ? "Login thành công!" 
            : "Sai tài khoản hoặc mật khẩu!";
    });
}

// Export để test
module.exports = { checkLogin };
