import nexiosInstance from "@/config/nexios.config";
import { ICar } from "@/types";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";

const CarsDetailsPage = async ({
  params,
}: {
  params: Promise<{ carId: string }>;
}) => {
  const { carId } = await params;
  const {data} = await nexiosInstance.get<{ data: ICar}>(`/cars/${carId}`, {
    cache: "force-cache",
  });

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
      <Card
        key={data?.data?._id}
        className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg"
      >
        {/* Car Image with Overlay */}
        <div className="relative">
          <Image
            alt={data?.data.name || "Car Image"}
            className="w-full h-[500px] object-cover transition-transform transform hover:scale-110"
            src={data?.data.image || "/fallback-car.jpg"}
            width={800}
            height={500}
          />
          {/* Frosted Glass Effect for Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-6">
            <CardHeader className="space-y-2 backdrop-blur-md bg-white/20 p-4 rounded-lg shadow-md">
              <h4 className="text-white font-extrabold text-4xl tracking-wider uppercase">
                {data?.data.name}{" "}
                <span className="text-lg text-white/70">({data?.data.model})</span>
              </h4>
              <p className="text-white/80 text-sm font-medium tracking-wide">
                Rating: {data?.data.rating} / 5
              </p>
            </CardHeader>
          </div>
        </div>

        {/* Footer Section with Frosted Effect */}
        <CardFooter className="p-8 backdrop-blur-md bg-white/20 dark:bg-gray-800/40 rounded-b-lg shadow-lg border-t border-gray-300 dark:border-gray-600">
          <div className="grid grid-cols-2 gap-4 w-full text-gray-800 dark:text-white">
            <div className="space-y-2">
              <p className="font-bold text-2xl">Brand: {data?.data.brand}</p>
              <p className="font-light text-lg">Model: {data?.data.model}</p>
              <p className="font-light text-lg">Color: {data?.data.color}</p>
              <p className="font-light text-lg">Condition: {data?.data.condition}</p>
            </div>
            <div className="space-y-2">
              <p className="font-light text-lg">Fuel Type: {data?.data.fuelType}</p>
              <p className="font-light text-lg">
                Passenger Capacity: {data?.data.passengerCapacity}
              </p>
              <p className="font-light text-lg">Rating: {data?.data.rating} / 5</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-4 justify-center">
            <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              Explore More
            </button>
            <button className="px-6 py-3 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 transition-all">
              Contact Dealer
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarsDetailsPage;
