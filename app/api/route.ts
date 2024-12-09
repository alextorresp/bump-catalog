import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type');
  const id = request.nextUrl.searchParams.get('id');

  if (!type || !id) {
    return Response.json({ error: 'Type and ID are required' }, { status: 400 });
  };

  try {
    const response = await fetch(`https://api.deezer.com/${type}/${id}`);
    
    if (!response.ok) {
      return Response.json({ error: 'Error fetching data' }, { status: 500 });
    };

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Error fetching data from Deezer' }, { status: 500 });
  };
};
