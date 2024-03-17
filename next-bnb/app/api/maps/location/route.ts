import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const latitude = req.nextUrl.searchParams.get('latitude');
  const longitude = req.nextUrl.searchParams.get('longitude');

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: '위치 정보가 없습니다' },
      {
        status: 400,
      }
    );
  }
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=ko&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    const data = await fetch(url).then((response) => response.json());
    const addressComponent = data.results[0].address_components;
    const { lat, lng } = data.results[0].geometry.location;

    const result =
      addressComponent.length === 3
        ? {
            latitude: lat,
            longitude: lng,
            country: addressComponent[2].long_name,
            city: addressComponent[1].long_name,
            district: addressComponent[1].long_name,
            streetAddress: addressComponent[0].long_name,
            postcode: '',
          }
        : {};
    return NextResponse.json(
      { data: result },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: e },
      {
        status: 405,
      }
    );
  }
};
