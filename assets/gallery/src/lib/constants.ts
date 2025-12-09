import { Wifi, Car, Utensils, Wind, Trees, Coffee, MapPin, Clock, Ban, ShieldCheck } from "lucide-react";

export const COMPANY_INFO = {
  name: "Sakura B&B",
  address: "Via San Rocco 19, piano terra, 25033 Cologne (BS), Italia",
  email: "info@sakurabb.it",
  phone: "+39 333 889068",
  whatsapp: "https://wa.me/39333889068",
  checkIn: "15:00",
  checkOut: "11:00",
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "La Casa", href: "#house" },
  { name: "Galleria", href: "#gallery" },
  { name: "Servizi", href: "#services" },
  { name: "Prenota", href: "#book" },
  { name: "Contatti", href: "#contact" },
];

export const FEATURES = [
  {
    title: "Atmosfera Zen",
    description: "Un'esperienza autentica ispirata allo stile giapponese per il massimo relax.",
    icon: Coffee,
  },
  {
    title: "Privacy Totale",
    description: "Appartamento indipendente al piano terra con ingresso privato.",
    icon: ShieldCheck,
  },
  {
    title: "Spazi Esterni",
    description: "Giardino e terrazza privati con vista sul verde per i tuoi momenti di quiete.",
    icon: Trees,
  },
  {
    title: "Comfort Moderno",
    description: "Wi-Fi gratuito, parcheggio e cucina attrezzata per sentirsi come a casa.",
    icon: Wifi,
  },
];

export const HOUSE_HIGHLIGHTS = {
  title: "La Casa in sintesi",
  description: "Sakura B&B offre un ambiente caldo, pulito e raffinato. 1 camera da letto, 1 bagno, cucina attrezzata, soggiorno con divano letto e ingresso indipendente. Ideale per coppie, famiglie o viaggiatori alla ricerca di tranquillità.",
  image: "/assets/gallery/E6284748-F80D-4490-98D7-0F863CCF9163 (1).jpeg",
};

export const GALLERY_IMAGES = [
  { src: "/assets/E6284748-F80D-4490-98D7-0F863CCF9163 (1)/images/BedandBreakfast.jpg", alt: "Vista esterna del B&B" },
  { src: "/assets/gallery/361F837F-2D17-47DA-BA91-3F9697868FFE (1).jpeg", alt: "Soggiorno" },
  { src: "/assets/gallery/ADB22B1B-F742-4A6B-BCE7-637B28EEBE11 (1).jpeg", alt: "Camera da letto" },
  { src: "/assets/gallery/DF6BF1E6-C2ED-4A2F-A939-05B6EDC838BA (1).jpeg", alt: "Cucina attrezzata" },
  { src: "/assets/gallery/1E538348-37F8-4C3E-90A1-3E927E7EDD15 (1).jpeg", alt: "Bagno moderno" },
  { src: "/assets/gallery/1f8aa148-343a-443d-8fb6-9fe80522ed26 (1).jpeg", alt: "Dettagli interni" },
  { src: "/assets/gallery/165b8ca7-619e-457b-bb92-af9ac5d91bb3 (1).jpeg", alt: "Zona relax" },
  { src: "/assets/gallery/FA4F9492-55BA-4298-A4CD-EA65B0A70353 (1).jpeg", alt: "Spazio esterno" },
  { src: "/assets/gallery/D4ECBE44-C536-46B0-B4AF-262F3B9E1A71 (1).jpeg", alt: "Giardino" },
  { src: "/assets/gallery/6d16f217-d2ff-493d-a1a0-3c611e0bb322 (1).jpeg", alt: "Terrazza" },
  { src: "/assets/gallery/4c483d4e-71de-4112-a17a-3a639f338cf8 (1).jpeg", alt: "Vista panoramica" },
  { src: "/assets/gallery/8f1de86f-5196-467d-9cf1-583166099e20 (1).jpeg", alt: "Angolo lettura" },
  { src: "/assets/gallery/6e0e7260-8473-4a8e-bb8b-bbd154fed7f4 (1).jpeg", alt: "Dettagli arredamento" },
  { src: "/assets/gallery/d3dcfe78-0ae2-474e-bb64-bd654ff01752 (1).jpeg", alt: "Zona notte" },
  { src: "/assets/gallery/B7224D1E-D577-42C5-AFAE-FA6DA658F192 (1).jpeg", alt: "Ingresso privato" },
  { src: "/assets/gallery/6A93AF27-79F5-4924-A7A5-DB7DED4C3A4C (1).jpeg", alt: "Spazi comuni" },
  { src: "/assets/gallery/CD032B0A-90D0-42BA-BE5D-A1FC02333F93 (1).jpeg", alt: "Vista dall'alto" },
  { src: "/assets/gallery/52b7a06a-526f-4363-9b15-f156b9c64106 (1).jpeg", alt: "Ambiente accogliente" },
];

export const SERVICES = [
  { name: "Wi-Fi Gratuito", icon: Wifi },
  { name: "Cucina Attrezzata", icon: Utensils },
  { name: "Aria Condizionata / Riscaldamento", icon: Wind },
  { name: "Parcheggio Gratuito", icon: Car },
  { name: "Giardino / Terrazza", icon: Trees },
];

export const RULES = [
  { text: "Niente feste o eventi", icon: Ban },
  { text: "Silenzio nelle ore notturne", icon: Clock },
  { text: "Animali non ammessi", icon: Ban },
];