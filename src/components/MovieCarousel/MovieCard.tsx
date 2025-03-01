import React from "react";
import { MovieCardType } from "@/types/types";
import { useRouter } from "next/navigation";
import { BsFillStarFill } from "react-icons/bs";

const MovieCard = (data: MovieCardType) => {
  const router = useRouter();
  const { title, rating, genre, portraitImgUrl } = data;
  return (
    <div
      className="cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 text-white"
      onClick={() => router.push(`/pages/mumbai/movies/${title}`)}
    >
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${portraitImgUrl})` }}
      >
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs font-bold px-2 py-1 flex items-center gap-1 rounded-full">
          <BsFillStarFill className="text-yellow-500" />
          {rating}/10
        </div>
      </div>

      <div className="p-4 bg-gray-900">
        <p className="text-lg font-semibold truncate">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{genre.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
