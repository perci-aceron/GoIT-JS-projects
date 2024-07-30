document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;

    if (!email || !password) {
      alert("All fields must be filled in");
      return;
    }

    let data = {
      email,
      password,
    };

    console.log(data);
    console.log(`Email: ${data.email}`);
    console.log(`Password: ${data.password}`);
    event.target.reset();
  });
});
