import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import DemoRequest from "../../../models/DemoRequest";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      firstName, lastName, email, phone,
      practice, specialty, size, products,
      timeframe, message,
    } = body;

    // ── Basic server-side validation ──────────────────────────────────────
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "First name, last name, email and phone are required." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!practice || !specialty || !size) {
      return NextResponse.json(
        { success: false, message: "Practice, specialty and size are required." },
        { status: 400 }
      );
    }

    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json(
        { success: false, message: "Select at least one product." },
        { status: 400 }
      );
    }

    // ── Connect & save ────────────────────────────────────────────────────
    await connectDB();

    const demo = await DemoRequest.create({
      firstName, lastName, email, phone,
      practice, specialty, size, products,
      timeframe: timeframe || "",
      message:   message   || "",
    });

    return NextResponse.json(
      { success: true, message: "Demo request saved successfully.", id: demo._id },
      { status: 201 }
    );

  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}