$(document).ready(function() {
  // Run btoa('your@email.com') to get yours!
  var base64_email = "ZWR3YXJkX3dlQGhvdG1haWwuY29t";
  var base_url = 'https://formspree.io/';
  var action = base_url + atob(base64_email);
  $('#contact-form').attr('action', action);

  // For demo purpose, you can remove this
  $('#demo').html(action);
});