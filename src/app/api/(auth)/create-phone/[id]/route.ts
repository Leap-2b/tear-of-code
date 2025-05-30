import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectMongoDb();
  const { phoneNumber } = await req.json();

  if (!/^\d{8}$/.test(phoneNumber)) {
    return NextResponse.json(
      { error: "Утасны дугаар буруу байна" },
      { status: 400 }
    );
  }

  try {
    await UserModel.findByIdAndUpdate(params.id, { phoneNumber });
    return NextResponse.json({ message: "Утасны дугаар амжилттай сольсон" });
  } catch (err) {
    return NextResponse.json({ error: "Update амжилтгүй" }, { status: 500 });
  }
}
