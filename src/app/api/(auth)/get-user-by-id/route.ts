import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { NextResponse } from "next/server";

connectMongoDb();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const _id = searchParams.get("_id");

    if (!_id) {
      return NextResponse.json(
        { message: "Хэрэглэгчийн ID олдсонгүй." },
        { status: 400 }
      );
    }

    const user = await UserModel.findById(_id);

    if (!user) {
      return NextResponse.json(
        { message: "Ийм хэрэглэгч олдсонгүй." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Амжилттай.", user }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving user:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
