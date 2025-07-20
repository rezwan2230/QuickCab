import React from "react";

const CarsDetailsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ carId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { carId } = await params;
  const { category, price } = await searchParams;
  console.log(carId);
  console.log(searchParams);
  return <div>CarsDetailsPage : {carId} Category: {category} Price: {price}</div>;
};

export default CarsDetailsPage;
