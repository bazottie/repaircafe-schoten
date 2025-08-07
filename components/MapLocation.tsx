"use client";
import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MapLocationProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: number;
  width?: number;
}

const DEFAULT_LAT = 52.416749592928355
const DEFAULT_LNG = 4.650756487607348; // Placeholder: Schoten

export const MapLocation: React.FC<MapLocationProps> = ({
  lat = DEFAULT_LAT,
  lng = DEFAULT_LNG,
  zoom = 13,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainer.current,
        style: '/map-style.json',
        center: [lng, lat],
        zoom,
        attributionControl: false,
      });
      // Add marker
      new maplibregl.Marker().setLngLat([lng, lat]).addTo(mapRef.current);
    }
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, lng, zoom]);

  // Google Maps directions link
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;

  return (
    <div className="space-y-4">
      <div
        ref={mapContainer}
        className="overflow-hidden rounded-lg w-full h-96"
      />
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({variant: "default"}), 'no-underline')}
      >
        Routebeschrijving naar deze locatie
      </a>
    </div>
  );
};
