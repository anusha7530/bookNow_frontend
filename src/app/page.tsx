"use client";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";

export default function Home() {
  return (
    <main className="">
      <HomeSlider />
      <div className="m-10">
        <p className="text-4xl font-bold m-4">Featured Movies</p>
        <MovieCarousel />
      </div>
    </main>
  );
}
