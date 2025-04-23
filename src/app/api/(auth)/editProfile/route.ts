import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    await connectMongoDb();
    const { searchParams } = new URL(req.url);
    const _id = searchParams.get("_id");
    const { username, email, phoneNumber } = await req.json();
    const user = await UserModel.findById(_id);
    if (!_id) {
        return NextResponse.json(
          { message: "Хэрэглэгчийн ID олдсонгүй." },
          { status: 400 }
        );
      }
    if (!user) {
      return NextResponse.json(
        { message: "Хэрэглэгч олдсонгүй." },
        { status: 404 }
      );
    }

    // Email давхардлыг шалгах
    if (email && email !== user.email) {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { message: "Энэ имэйл аль хэдийн бүртгэгдсэн байна." },
          { status: 409 }
        );
      }
      user.email = email;
    }

    if (username) user.username = username;
    if (phoneNumber) user.phoneNumber = phoneNumber;

    await user.save();
    return NextResponse.json(
      { message: "Профайл амжилттай шинэчлэгдлээ.", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile update error:", error);

    return NextResponse.json(
      {
        message: "Сервер дээр алдаа гарлаа.",
        error: error instanceof Error ? error.message : "Тодорхойгүй алдаа",
      },
      { status: 500 }
    );
  }
}