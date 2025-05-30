import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "@/server/models";
import { getUserFromCookie } from "@/lib/auth"; // httpOnly cookie-г decode хийдэг функц
import { Types } from "mongoose";
import { connectMongoDb } from "@/server/db/db";

connectMongoDb();

export async function POST(req: NextRequest) {
  try {
    const { staffId } = await req.json();
    const userId = await getUserFromCookie();

    if (!userId) {
      return NextResponse.json(
        { message: "Та эхлээд нэвтэрнэ үү." },
        { status: 401 }
      );
    }

    const existingUser = await UserModel.findById(userId);

    if (!existingUser) {
      return NextResponse.json(
        { message: "Хэрэглэгчийн мэдээлэл олдсонгүй." },
        { status: 404 }
      );
    }

    const staffObjectId = new Types.ObjectId(staffId);

    const isFavorite = existingUser.favoriteStaff?.some(
      (id) => id.toString() === staffObjectId.toString()
    );

    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = existingUser.favoriteStaff?.filter(
        (id) => id && id.toString() !== staffObjectId.toString()
      );
    } else {
      updatedFavorites = [...(existingUser.favoriteStaff || []), staffId];
    }

    existingUser.favoriteStaff = updatedFavorites;
    await existingUser.save();

    return NextResponse.json({
      message: isFavorite
        ? "Ажилтан таалагдсан цэснээс хасагдлаа."
        : "Ажилтан таалагдсан цэсэд нэмэгдлээ.",
      favoriteStaff: existingUser.favoriteStaff,
    });
  } catch (error) {
    console.error("Таалагдсан ажилтныг хадгалах үед алдаа гарлаа:", error);
    return NextResponse.json({ message: "Тодорхойгүй алдаа" }, { status: 500 });
  }
}
