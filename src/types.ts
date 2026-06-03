export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  gridArea?: string;
}

export interface RoomOption {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
  features: string[];
  maxGuests: number;
}
