Meteor.methods({
  EnvioMailgun: function (contentEmail) {
    var data = {
      "from": "Mi Argentina <contacto@mail.argentina.gob.ar>",
      "to": contentEmail.email,
      "subject": contentEmail.subject,
      "text": "",
      "html": contentEmail.template,
      "o:tracking-opens": true,
      "o:tag": contentEmail.tags
    };

    Mailgun.messages().send(data, function (error, body) {
      if (error) {
        throw new Meteor.Error(error, 'Error de comunicacion Mailgun')
      } else {
        return true
      }
    })
  }
})
