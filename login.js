document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      message.textContent = 'Vui lòng nhập đầy đủ thông tin.';
      message.style.color = 'red';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((item) => item.email === email && item.password === password);

    if (user) {
      message.textContent = 'Đăng nhập thành công!';
      message.style.color = 'green';
      form.reset();
    } else {
      message.textContent = 'Email hoặc mật khẩu không đúng.';
      message.style.color = 'red';
    }
  });
});
