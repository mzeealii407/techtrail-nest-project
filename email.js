 emailjs.init("YOUR_PUBLIC_KEY");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          this
        )
        .then(
          function () {
            document.getElementById("form-message").innerText =
              "Message sent successfully!";
            document.getElementById("contact-form").reset();
          },
          function (error) {
            document.getElementById("form-message").innerText =
              "Failed to send message.";
            console.log(error);
          }
        );
        Name: {{user_name}}

Email: {{user_email}}

Message:
{{message}}
    });