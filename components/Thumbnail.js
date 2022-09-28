import { forwardRef } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform md:hover:scale-105 md:hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1980}
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        alt={result}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white group-hover:font-bold transition-all duration-100 ease-in-out">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date} ● {" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
