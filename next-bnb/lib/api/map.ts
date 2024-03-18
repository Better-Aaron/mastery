export type GeoLocationInfoAPIResponse = {
  country: string;
  city: string;
  district: string;
  streetAddress: string;
  detailAddresss: string;
  postCode: string;
  latitude: number;
  longitude: number;
};

export const getLocationInfoAPI = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<GeoLocationInfoAPIResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/maps/location?latitude=${latitude}&longitude=${longitude}`
  );
  const { data }: { data: GeoLocationInfoAPIResponse } = await response.json();
  return data;
};
