'use client';
import AdForm from "@/components/AdForm";

//tel aviv location
const locationDefault = {
  lat: 32.0853,
  lng: 34.7818,
}

export default function NewAdPage() {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
}