import nodemailer from "nodemailer";

const handler = async (req, res) => {
    const {
        emails,
        message,
        subject,
        host,
        port,
        username,
        password
    } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: true, // Use SSL/TLS encryption
        auth: {
            user: username,
            pass: password,
        },
    });

    try {
        let info;
        // Send email
        for (let i = 0; i < emails.length; i++) {
            // If message is HTML
            info = await transporter.sendMail({
                from: username,
                to: emails[i],
                subject: subject,
                html: message,
            });
        }


        console.log("Email sent:", info.messageId);

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email." });
    }
};

export default handler;
