export default function ContactConfirmation({
  firstName,
}) {
  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2>Hello {firstName},</h2>

      <p>
        Thank you for contacting our Medical Billing
        team.
      </p>

      <p>
        We have successfully received your inquiry.
      </p>

      <p>
        One of our specialists will review your
        request and get back to you shortly.
      </p>

      <p>
        Expected response time:
        <strong> within 2 business hours.</strong>
      </p>

      <br />

      <p>
        Best Regards,
        <br />
        Medical Billing Team
      </p>
    </div>
  );
}