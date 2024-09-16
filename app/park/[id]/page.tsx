import { notFound } from 'next/navigation';
import { createClient } from '@vercel/edge-config';

const edgeConfig = createClient(process.env.EDGE_CONFIG!); 

interface ParkProps {
    id: number;
    name: string;
    description: string;
    image_url: string;
    rating: number;
  }
  
export default async function ParkPage({ params }: { params: { id: string } }) {
  const parkKey = `park_${params.id}`;

  console.log('Edge Config URL:', process.env.EDGE_CONFIG);

  try {
    const park = (await edgeConfig.get(parkKey)) as ParkProps | undefined;
  
    if (!park) {
      notFound();
    }
  
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{park!.name}</h1>
        <img
          src={park!.image_url}
          alt={park!.name}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />
        <p style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
          {park!.description}
        </p>
        <p style={{ fontSize: '18px', color: '#555' }}>
          Rating: {park!.rating} ⭐
        </p>
      </div>
    );
    console.log(parkKey);
  } catch (error) {
    console.error('Error fetching park data:', error);
  }  
}
