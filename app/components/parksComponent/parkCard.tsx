import { createClient } from '@vercel/edge-config';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import StarRating from '@/app/components/StarRating';
import Link from 'next/link'; // För att skapa länkar till enskilda parksidor
 const edgeConfig = createClient(process.env.NEXT_PUBLIC_EDGE_CONFIG!);


interface ParkProps {
  id: number;
  name: string;
  description: string;
  image_url: string;
  rating: number;
}

// Type guard för att kontrollera att objektet är av typen ParkProps
function isParkProps(park: unknown): park is ParkProps {
  return typeof park === 'object' && park !== null &&
    'id' in park && typeof (park as ParkProps).id === 'number' &&
    'name' in park && typeof (park as ParkProps).name === 'string' &&
    'description' in park && typeof (park as ParkProps).description === 'string' &&
    'image_url' in park && typeof (park as ParkProps).image_url === 'string' &&
    'rating' in park && typeof (park as ParkProps).rating === 'number';
}

export default async function ParkListPage() {
  try {
    // Hämta alla parker
    const allParks = await getAllParks(); // En funktion som hämtar alla parker

    return (
      <>
        <div className='bg-white flex flex-col'>
          <Navbar />
          
          {/* Lista med alla parker */}
          <div className='mt-10'>
            <h2 className='text-2xl text-center text-[#33582D] mb-6'>Alla Parker</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {allParks.map((park: ParkProps) => (
                <div key={park.id} className='border rounded-lg shadow-lg p-4'>
                  <img className='w-full h-48 object-cover mb-4' src={park.image_url} alt={park.name} />
                  <h3 className='text-xl font-bold mb-2 text-center'>{park.name}</h3>
                  <div className='text-center mb-2'>
                    <StarRating rating={park.rating} />
                  </div>
                  <Link href={`/park/${park.id}`}>
                    <a className='text-blue-500 text-center block'>Läs mer</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <Footer />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching parks data:', error);
    return <p>Det gick inte att hämta parker.</p>;
  }
}

// Funktion för att hämta alla parker
async function getAllParks() {
  // Hämta listan med alla park-ID:n från Edge Config
  const parkIds = (await edgeConfig.get('park_list')) as number[];

  const parks: ParkProps[] = [];

  // Hämta varje park med sitt ID
  for (const id of parkIds) {
    const parkData = await edgeConfig.get(`park_${id}`);

    // Kontrollera att parkData är av typen ParkProps
    if (isParkProps(parkData)) {
      parks.push(parkData);
    } else {
      console.warn(`Park data för id ${id} är inte av förväntad typ`);
    }
  }

  return parks;
}
