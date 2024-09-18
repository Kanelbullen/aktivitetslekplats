import { notFound } from 'next/navigation';
import { createClient } from '@vercel/edge-config';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import StarRating from '@/app/components/StarRating';
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
    
      <>
        <div className='bg-white flex flex-col'>
          <Navbar/>
          <div className='flex flex-row'>
            <div className='basis-1/3 text-[#33582D] text-center text-3xl'>{park!.name}</div>
            <div className=' text-black flex-row flex justify-center basis-2/3 '><div className='bg-[#539049] border border-[#33582D] px-5 py-3 rounded-xl'>
              <StarRating rating={park!.rating}/>
            </div></div>
          </div>
          <img
            className='w-full p-4 pt-6 contain-content'
            src={park!.image_url}
            alt={park!.name}
          />
          <p className='my-4 mx-3 text-black'>
            {park!.description}
          </p>
          <Footer/>
        </div>
      </>
    );
    console.log(parkKey);
  } catch (error) {
    console.error('Error fetching park data:', error);
  }  
}
