export interface ICar {
  _id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  fuelType: string;
  passengerCapacity: number;
  color: string;
  condition: string;
}

export interface IAuthResponse {
  data: {
    success: boolean;
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
