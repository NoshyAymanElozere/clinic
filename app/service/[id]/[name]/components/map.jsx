"use client";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

export default function Map ({ data }) {

    const config = useSelector((state) => state.config);
    const center = { lat: -3.745, lng: -38.523 };

    return (

        <div className="w-full h-full flex justify-center items-center rounded-md overflow-hidden">

            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>

                <GoogleMap mapContainerStyle={{width: '100%', height: '100%'}} center={center} zoom={10}>

                    <Marker position={center}/>

                </GoogleMap>

            </LoadScript>

        </div>

    )

};
