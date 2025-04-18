import { connectMongoDb } from "@/server/db/db";
import { AppointmentModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";

connectMongoDb();

export async function POST(req: NextRequest) {
  try {
    const appointment = await req.json();
    const createdStaff = await AppointmentModel.create(appointment);

    return NextResponse.json(
      { message: "Захиалга амжилттай нэмэгдлээ", createdStaff },
      { status: 201 }
    );
  } catch (error) {
    console.error("Захиалгын мэдээлэл нэмэхэд алдаа гарлаа:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "Хэрэглэгчийн ID шаардлагатай" },
        { status: 400 }
      );
    }
    const appointments = await AppointmentModel.find({ userId })
      .populate("userId")
      .populate("serviceIds");

    return NextResponse.json(
      { message: "Амжилттай", data: appointments },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during add appointment:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
