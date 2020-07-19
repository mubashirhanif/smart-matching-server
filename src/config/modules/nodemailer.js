"use strict";

const config = require("./config");
const nodemailer = require("nodemailer");
const nodemailerSmtpTransport = require("nodemailer-smtp-transport");

/**
 * Reusable mail transport method (nodemailer)
 */
const smtpTransport = nodemailer.createTransport(
  nodemailerSmtpTransport({
    service: "gmail",
    auth: {
      user: config.emailAddress,
      pass: config.emailPassword,
    },
  })
);

let sendEmail = (userEmail, subject, templateName = "") => {
  const mailOptions = {
    from: config.emailAddress, // sender address
    to: userEmail, // list of receivers
    subject: subject, // Subject line
    html: `<h1>User with email ${userEmail} registered</h1>` // html body
  };

  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

module.exports = {
  sendEmail
};
