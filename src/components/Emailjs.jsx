import emailjs from '@emailjs/browser';

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_slw95pl',      // Replace with your Service ID
    'template_5gsc4ak',     // Replace with your Template ID
    {
      from_name: e.target.user_name.value,
      from_email: e.target.user_email.value,
      message: e.target.message.value,
    },
    '1qgLP4siZLZQELpIA'     // Replace with your Public Key
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    // Optionally, display a success message to the user here
  }, (error) => {
    console.log('FAILED...', error);
    // Optionally, display an error message to the user here
  });
};
