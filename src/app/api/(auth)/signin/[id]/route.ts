import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";

connectMongoDb();

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const userId = context.params.id.replace(/"/g, "");

    const user = await UserModel.findById(userId);

    return NextResponse.json({ message: `User ID received:`, user });
  } catch (error) {
    return NextResponse.json(
      { message: "Алдаа гарлаа", error },
      { status: 500 }
    );
  }
}
