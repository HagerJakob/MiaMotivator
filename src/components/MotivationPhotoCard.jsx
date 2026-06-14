import React, { useMemo, useState } from "react";
import { Camera, RefreshCcw } from "lucide-react";
import { galleryPhotos } from "../data/galleryPhotos.js";

const photos = galleryPhotos;

export default function MotivationPhotoCard() {
  const [index, setIndex] = useState(() =>
    photos.length ? Math.floor(Math.random() * photos.length) : 0
  );

  const photo = useMemo(() => photos[index % photos.length], [index]);

  if (!photos.length) {
    return null;
  }

  const nextPhoto = () => {
    setIndex((current) => (current + 1 + Math.floor(Math.random() * Math.max(1, photos.length - 1))) % photos.length);
  };

  return (
    <article className="glass overflow-hidden rounded-[1.6rem]">
      <div className="p-4 sm:p-6">
        <span className="pill">
          <Camera className="h-4 w-4" />
          Motivation von uns
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-berry sm:text-3xl">
          Schau kurz her: Du bist geliebt.
        </h3>
        <p className="mt-2 text-sm leading-6 text-berry/75 sm:mt-3 sm:text-base sm:leading-7">
          Wenn der Kopf laut wird, ist hier ein kleiner Beweis: Du musst da
          morgen nicht allein durch. Ein Foto, ein Atemzug, dann weiter.
        </p>
      </div>
      <div className="mx-4 aspect-[4/5] max-h-[58vh] overflow-hidden rounded-[1.2rem] bg-cream shadow-soft sm:mx-6 sm:aspect-[16/10] sm:max-h-[24rem]">
        <img
          src={photo}
          alt="Ein motivierendes gemeinsames Erinnerungsfoto"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6">
        <button
          type="button"
          onClick={nextPhoto}
          className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-berry px-5 py-3 text-sm font-extrabold text-white transition hover:bg-rosewood sm:w-auto sm:text-base"
        >
          <RefreshCcw className="h-4 w-4" />
          Noch ein Foto
        </button>
      </div>
    </article>
  );
}
