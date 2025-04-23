import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

connectMongoDb();

export async function GET(req: NextRequest, props: Props) {
  const params = await props.params;
  const id = params.id;
  try {
    const userId = id.replace(/"/g, "");

    const user = await UserModel.findById(userId);

    return NextResponse.json({ message: `User ID received:`, user });
  } catch (error) {
    return NextResponse.json(
      { message: "Алдаа гарлаа", error },
      { status: 500 }
    );
  }
}
