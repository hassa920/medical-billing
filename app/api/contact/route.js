import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Contact from "../../../models/contact";
import { resend } from "../../../lib/resend";

export async function POST(req) {
  try {
    console.log("========== CONTACT API START ==========");

    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      practice,
      specialty,
      inquiryType,
      message,
    } = body;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !inquiryType?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const savedContact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      practice,
      specialty,
      inquiryType,
      message,
    });

    console.log("Contact Saved:", savedContact._id);

    let userEmailSent = false;
    let adminEmailSent = false;
    let userEmailError = null;
    let adminEmailError = null;

    if (
      process.env.RESEND_API_KEY &&
      process.env.EMAIL_FROM &&
      process.env.ADMIN_EMAIL
    ) {
      try {
        const userMail = await resend.emails.send({
          from: process.env.EMAIL_FROM,
          to: [email],
          subject: "We Received Your Inquiry",
          html: `
            <div style="font-family:Arial,sans-serif">
              <h2>Hello ${firstName},</h2>

              <p>
                Thank you for contacting Medicore.
              </p>

              <p>
                We have received your inquiry and a member of our team
                will contact you shortly.
              </p>

              <hr />

              <p>
                <strong>Inquiry Type:</strong> ${inquiryType}
              </p>

              <p>
                <strong>Your Message:</strong><br/>
                ${message}
              </p>

              <br/>

              <p>
                Regards,<br/>
                Medicore Team
              </p>
            </div>
          `,
        });

        console.log("USER EMAIL:", userMail);

        userEmailSent = true;
      } catch (error) {
        console.error("USER EMAIL ERROR:", error);

        userEmailError =
          error?.message || "Unknown email error";
      }

      try {
        const adminMail = await resend.emails.send({
          from: process.env.EMAIL_FROM,
          to: [process.env.ADMIN_EMAIL],
          subject: "New Contact Form Submission",
          html: `
            <div style="font-family:Arial,sans-serif">
              <h2>New Contact Form Submission</h2>

              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Practice:</strong> ${practice || "N/A"}</p>
              <p><strong>Specialty:</strong> ${specialty || "N/A"}</p>
              <p><strong>Inquiry Type:</strong> ${inquiryType}</p>

              <hr/>

              <p>
                <strong>Message:</strong>
              </p>

              <p>${message}</p>
            </div>
          `,
        });

        console.log("ADMIN EMAIL:", adminMail);

        adminEmailSent = true;
      } catch (error) {
        console.error("ADMIN EMAIL ERROR:", error);

        adminEmailError =
          error?.message || "Unknown email error";
      }
    } else {
      console.warn(
        "EMAIL CONFIG MISSING:",
        {
          hasResendKey: !!process.env.RESEND_API_KEY,
          hasEmailFrom: !!process.env.EMAIL_FROM,
          hasAdminEmail: !!process.env.ADMIN_EMAIL,
        }
      );
    }

    return NextResponse.json({
      success: true,
      userEmailSent,
      adminEmailSent,
      userEmailError,
      adminEmailError,
      data: savedContact,
    });
  } catch (error) {
    console.error("CONTACT API ERROR");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}