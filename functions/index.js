/* eslint-disable no-tabs */
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const cors = require("cors")({ origin: true });

const functions = require("firebase-functions");
let Mailchimp = require("mailchimp-api-v3");
let mailchimp = new Mailchimp("de0e860b7f7abc77eebfaedbaa9ce3fb-us12");
const mail = require("@sendgrid/mail");
mail.setApiKey(
	"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"
);

// This is a test comment

exports.addSubscriber = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		mailchimp
			.post("/lists/9e36f80a3a/members", {
				email_address: req.body.email,
				status: "subscribed",
			})
			.then(function (results) {
				res.json(results);
			})
			.catch(function (err) {
				res.json(err);
			});
	});
});

exports.emailMessage = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		// const body = JSON.parse(req.body);

		const message = `
		Name: ${req.body.name}\r\n 
		Email: ${req.body.email}\r\n 
		Phone: ${req.body.phone}\r\n 
		Message: ${req.body.message}\r\n 
		`;

		const messageHTML = `
			<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@200;300;500;700&display=swap" rel="stylesheet">
  
	<title></title>
	<!--[if mso]>
	<noscript>
		<xml>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
	</noscript>
	<![endif]-->
	<style>
		table, td, div, h1, p {font-family: Arial, sans-serif;}
	</style>
</head>
<body style="margin:0;padding:0;">
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:black;">
		<tr>
			<td align="center" style="padding:0;">
				<table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cc1414;border-spacing:0;text-align:left;">
					<tr>
						<td align="center" style="padding:0px 0 0px 0; height: 20px; background:#cc1414;">
						</td>
					</tr>
					<tr>
						<td style="padding:36px 30px 42px 30px;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
								<tr>
									<td style="padding:0 0 36px 0;color:#e6e6e6;">
										<h1 style="font-size:24px;margin:0 0 20px 0;font-family: 'Spectral', serif; font-weight: 300; font-size: 14px;
                               letter-spacing: 0.31875em; margin-top: 50px; margin-bottom: 80px; text-align: center;">THE DATING <span style="color: #cc1414;">ARTS</span></h1>
                    
                    <h2 style="font-size:24px;margin:0 0 20px 0;font-family: 'Spectral', serif; font-weight: 300; font-size: 14px;
                                margin-top: 0px; margin-bottom: 30px; font-size: 20px; align-self: flex-start;">Hey WEM!<br>You have a message from ${req.body.name}</h2>
                    
                    
                    
                    
										<p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family: 'Spectral', serif; font-weight: 200;">${req.body.message}</p>
                    
                     <h2 style="font-size:24px;margin:0 0 20px 0;font-family: 'Spectral', serif; font-weight: 300; font-size: 14px;
                                margin-top: 20px; margin-bottom: 10px; font-size: 18px; align-self: flex-start;">Contact Details:</h2>
                    <p style="margin:0 0 12px 0;font-size:14px;line-height:24px;font-family: 'Spectral', serif; font-weight: 200; align-self: flex-start;">Email Address: ${req.body.email}</p>
                    <p style="margin:0 0 12px 0;font-size:14px;line-height:24px;font-family: 'Spectral', serif; font-weight: 200;align-self: flex-start;">Phone Number: ${req.body.phone}</p>
                    
                    
                    
										<p style="margin:0;font-size:16px;line-height:24px;font-family:'Spectral',serif; margin-top: 50px; color: #cc1414; text-align:center;"><a style="color:#cc1414;text-decoration:underline;" href="mailto:${req.body.email}?Subject=The%20Dating%20Arts%20Inquiry" target="_top">Click to reply</a></p>
									</td>
								</tr>
								
							</table>
						</td>
					</tr>
					<tr>
						<td style="padding:30px;background:#cc1414;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
								<tr>
									<td style="padding:0;width:100%;" align="left">
										<p style="color: white; margin:0;font-size:14px;line-height:16px;font-family: 'Spectral', serif; font-weight: 200;">
											&reg; All rights reserved. The Dating Arts. 2021<br/>
										</p>
									</td>
									<td style="padding:0;width:50%;" align="right">
										<table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
											
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
		`;
		const data = {
			to: ["thedatingarts22@gmail.com", "wem@thedatingarts.com"],
			from: "wem@thedatingarts.com",
			subject: `THE DATING ARTS (CONTACT) ${req.body.name}`,
			text: message,
			html: messageHTML,
		};

		mail.send(data)
			.then((res) =>
				res.status(200).json({ status: "Ok", body: res.body })
			)
			.catch((err) =>
				res.status(300).json({ status: "Error", body: err })
			);

		// return "";
		// res.status(200).json({ status: "Ok", body: req.body });
	});
});
