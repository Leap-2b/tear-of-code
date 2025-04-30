"use client";
import { useUser } from "@/app/_context/UserContext";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

export function FavoriteButton({ staffId }: { staffId: string }) {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const isFavorite = user?.favoriteStaff?.some(
    (id) => id.toString() === staffId
  );

  const toggleFavorite = async () => {
    if (!user || !setUser) return;

    const updatedFavorites = isFavorite
      ? user.favoriteStaff?.filter((id) => id.toString() !== staffId)
      : [...(user.favoriteStaff || []), staffId];

    const originalUser = { ...user };

    // Optimistically update UI
    setUser({ ...user, favoriteStaff: updatedFavorites });

    try {
      setLoading(true);
      await axios.post("/api/favorite-staff", { staffId });
      toast.success("Амжилттай шинэчлэгдлээ");
    } catch (err) {
      setUser(originalUser); // Roll back on error
      toast.error("Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={toggleFavorite}
      variant="ghost"
      size="icon"
      className={`absolute right-2 top-2 h-8 w-8 rounded-full ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      disabled={loading}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart fill={isFavorite ? "currentColor" : "none"} />
    </Button>
  );
}