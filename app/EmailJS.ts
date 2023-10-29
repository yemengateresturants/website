import emailjs from 'emailjs-com';

export const sendEmail = (e: Event | any, dispatch: Function): void => {
  e.preventDefault();
  console.log(e.target);

  emailjs
    .sendForm(
      "service_ax59uib",
      'template_q154l48',
      e.target,
      'rvhOsx5t6duYAWuVK'
    )
    .then(
      (response) => {
        dispatch(true);
        setTimeout(function () {
          dispatch(false);
        }, 5500);
        console.log('SUCCESS!', response);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
}
