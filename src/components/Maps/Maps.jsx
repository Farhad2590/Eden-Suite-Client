import { Map, Marker } from "pigeon-maps"

const Maps = () => {
  return (
    <div className="bg-white pt-5 mt-10">
      <h1 className='text-2xl py-3 font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
        Book Our Hotel, Here Is Our Location
      </h1>
      <div className="border border-dashed my-3"></div>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default Maps;