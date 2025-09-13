// components/ImageGallery.jsx
import Image from "next/image";

const images = Array(12).fill(
  "/assests/gallery/1498ea19-c8cd-494a-b2b2-16847a1744df.jpeg"
);

export default function ImageGallery() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Event Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 md:h-48 lg:h-56">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
