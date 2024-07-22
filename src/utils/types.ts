export type IconProps = {
  classNames: string;
};

export type SearchType = 'All' | 'Artists' | 'Songs' | 'Albums';

export type FormValuesType = {
  searchInput: string;
  searchType: SearchType;
};

type Url = string;

interface AlbumSummary {
  id: number;
  title: string;
  cover: Url;
  cover_small: Url;
  cover_medium: Url; 
  cover_big: Url;
  cover_xl: Url;
  md5_image?: string;
  tracklist: Url;
  type: string;
};

interface AlbumTrack {
  id: number;
  readable?: boolean;
  title: string;
  title_short?: string;
  title_version?: string;
  link: Url;
  duration: number;
  rank: number | string;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: boolean | number;
  preview?: Url;
  md5_image?: string;
  artist: { 
    id: number | string, 
    name: string, 
    tracklist?: Url;
    type: string;
  };
  album: AlbumSummary;
  type: string;
};

type ChartArtist = {
  id: number;
  name: string;
  link: string;
  picture: Url;
  picture_small: Url;
  picture_medium: Url; 
  picture_big: Url;
  picture_xl: Url;
  radio: boolean;
  tracklist: Url;
  type: string;
};

export interface ChartArtistWithPosition extends ChartArtist {
  position: number;
};

export interface ChartAlbum extends AlbumSummary {
  link: Url;
  record_type: string;
  explicit_lyrics: boolean;
  position: number;
  artist: ChartArtist;
  type: string;
};

export type ChartTrack = Omit<AlbumTrack, 'artist' | 'readable'> & {
  position: number;
  artist: ChartArtist;
};

export type TrackChartList = {
  data: ChartTrack[];
};

export interface AlbumChartList {
  data: ChartAlbum[];
};

export type ArtistChartList = {
  data: ChartArtistWithPosition[];
};

export type Album = {
  id: number;
  title: string;
  upc: string;
  link: Url;
  share?: Url;
  cover: Url;
  cover_small: Url;
  cover_medium: Url;
  cover_big: Url;
  cover_xl: Url;
  md5_image?: string;
  genre_id?: number;
  genres?: {
    data: {
      id?: number;
      name?: string;
      picture?: string;
      type?: string;
    }[]
  };
  label?: string;
  nb_tracks: number;
  duration: number;
  fans?: number;
  release_date: string | Date;
  record_type?: string;
  available?: boolean;
  alternative?: {};
  tracklist: Url;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: boolean | number;
  contributors: {
    id: number;
    name?: string;
    link?: Url;
    share?: Url;
    picture?: Url;
    picture_small?: Url;
    picture_medium?: Url; 
    picture_big?: Url;
    picture_xl?: Url;
    radio?: boolean;
    tracklist?: Url;
    type?: string;
    role?: string;
  }[];
  fallback?: { id: number; status: string };
  artist: {
    id: number;
    name: string;
    picture: Url;
    picture_small: Url;
    picture_medium: Url; 
    picture_big: Url;
    picture_xl: Url;
    tracklist: Url;
    type: string;
  };
  type?: string;
  tracks: {
    data: AlbumTrack[];
  };
};