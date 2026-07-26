document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
      message.textContent = 'Vui lòng nhập đầy đủ thông tin.';
      message.style.color = 'red';
      return;
    }

    if (password.length < 6) {
      message.textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
      message.style.color = 'red';
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = 'Mật khẩu xác nhận không khớp.';
      message.style.color = 'red';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((item) => item.email === email);

    if (existingUser) {
      message.textContent = 'Email này đã được sử dụng.';
      message.style.color = 'red';
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    message.textContent = 'Đăng ký thành công! Bạn có thể đăng nhập ngay.';
    message.style.color = 'green';
    form.reset();
  });
});
