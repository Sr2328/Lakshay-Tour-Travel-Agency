import { useRef } from "react";
import ImageCursorTrail from "../components/ui/image-cursortrail";

// Define the fleet images with proper descriptions
const fleetImages = [
  {
    url: "https://i.postimg.cc/XYbJF7NS/force-traveller-26.jpg",
    alt: "Force Traveller",
    title: "Force Traveller"
  },
  {
    url: "https://i.postimg.cc/nrXZ8NH1/white-color-volvo-bus-ai-image-856405-1061.avif",
    alt: "Volvo Bus",
    title: "Volvo Bus"
  },
  {
    url: "https://i.postimg.cc/J4b71VNT/front-left-side-47.avif",
    alt: "Swift Dzire",
    title: "Swift Dzire"
  },
  {
    url: "https://i.postimg.cc/8kvNHQ01/ertigas.webp",
    alt: "Ertiga",
    title: "Ertiga"
  },
  {
    url: "https://i.postimg.cc/d00JmhzX/desktop-wallpaper-toyota-innova-crysta.jpg",
    alt: "Innova",
    title: "Innova"
  }
];

const FleetGallery = () => {
  // Convert fleet images to format expected by ImageCursorTrail
  const images = fleetImages.map(img => img.url);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <ImageCursorTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36 object-cover"
        className="max-w-6xl mx-auto rounded-3xl"
        fadeAnimation={true}
      >
        <article className="relative z-50 flex flex-col items-center justify-center text-white space-y-6">
          <h1 className="max-w-2xl text-center text-4xl md:text-5xl font-bold tracking-tight">
            Explore Our Premium Fleet
          </h1>
          <p className="max-w-xl text-center text-gray-300 text-lg">
            Move your cursor to discover our range of vehicles available for your journey
          </p>
        </article>
      </ImageCursorTrail>

      {/* Static Fleet Display */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetImages.map((vehicle, index) => (
            <div
              key={`vehicle-${index}`}
              className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={vehicle.url}
                  alt={vehicle.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{vehicle.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FleetGallery;