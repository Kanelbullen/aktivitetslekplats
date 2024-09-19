import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";

const parkCard: React.FC<{ id: number; name: string; distance: number; description:string ;img:any }> = ({ id, name, distance, img, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-11/12 mx-auto border bottom-1 bg-gray-500 rounded-xl flex flex-col">
      <div onClick={() => setIsOpen((prev) => !prev)} className="flex w-full flex-row justify-between px-4 py-2">
        <div>{name}</div>
        <div className="flex flex-row">
          <div>{distance}km</div>
          {!isOpen ? (
            <RiArrowDropDownLine size={30} />
          ) : (
            <RiArrowDropUpLine size={30} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-row gap-3 mx-4 mb-5">
          <Image className="w-[40%] h-[13vh] bg-gray-300 rounded-md" src={img} alt={name} />
          <div  className="w-[60%]">{description}</div>
        </div>
      )}
    </div>
  );
};
export default parkCard;

// import { createClient, getAll } from "@vercel/edge-config";
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";
// import StarRating from "@/app/components/StarRating";
// import Link from "next/link"; // För att skapa länkar till enskilda parksidor
// const edgeConfig = createClient(process.env.EDGE_CONFIG!);

// interface ParkProps {
//   id: number;
//   name: string;
//   description: string;
//   image_url: string;
//   rating: number;
// }

// // Type guard för att kontrollera att objektet är av typen ParkProps
// function isParkProps(park: unknown): park is ParkProps {
//   return typeof park === 'object' && park !== null &&
//     'id' in park && typeof (park as ParkProps).id === 'number' &&
//     'name' in park && typeof (park as ParkProps).name === 'string' &&
//     'description' in park && typeof (park as ParkProps).description === 'string' &&
//     'image_url' in park && typeof (park as ParkProps).image_url === 'string' &&
//     'rating' in park && typeof (park as ParkProps).rating === 'number';
// }
// async function getAllParks(): Promise<ParkProps[]> {
//   // Hämta alla data från Edge Config
//   const parkData = await edgeConfig.getAll();

//   const parks: ParkProps[] = [];

//   // Gå igenom alla objekt och kontrollera att de är av typen ParkProps
//   for (const key in parkData) {
//     if (key.startsWith('park_')) {
//       const park = parkData[key];

//       if (isParkProps(park)) {
//         parks.push(park);
//       } else {
//         console.warn(`Park data för nyckel ${key} är inte av förväntad typ`);
//       }
//     }
//   }

//   return parks; // Returnera listan med parker
// }

// export default async function ParkListPage() {
//   try {
//     // Hämta alla parker
//     const allParks = await getAllParks(); // En funktion som hämtar alla parker

//     return (
//       <>
//         <div className='bg-white flex flex-col'>
//           <Navbar />

//           {/* Lista med alla parker */}
//           <div className='mt-10'>
//             <h2 className='text-2xl text-center text-[#33582D] mb-6'>Alla Parker</h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//               {allParks.map((park: ParkProps) => (
//                 <div key={park.id} className='border rounded-lg shadow-lg p-4'>
//                   <img className='w-full h-48 object-cover mb-4' src={park.image_url} alt={park.name} />
//                   <h3 className='text-xl font-bold mb-2 text-center'>{park.name}</h3>
//                   <div className='text-center mb-2'>
//                     <StarRating rating={park.rating} />
//                   </div>
//                   <Link href={`/park/${park.id}`}>
//                     <a className='text-blue-500 text-center block'>Läs mer</a>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Footer />
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error('Error fetching parks data:', error);
//     return <p>Det gick inte att hämta parker.</p>;
//   }
// }
