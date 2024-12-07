export type IconProps = {
  classNames?: string;
  width?: string;
  fill: string;
};

export type CardProps = {
  type: string;
  id: number;
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
};

export type SearchType = 'Artists' | 'Songs' | 'Albums';

export type ApiReturnObject<T> = {
  data: T;
  total: number;
  next?: Url;
};

export type FormValuesType = {
  searchInput: string;
  searchType: SearchType;
};

export type ChartType = 'artists' | 'albums' | 'tracks';
export type ItemType = 'artist' | 'album' | 'track';

type Url = string;

export type AlbumSummary = {
  id: number;
  title: string;
  cover: Url;
  cover_small: Url;
  cover_medium: Url; 
  cover_big: Url;
  cover_xl: Url;
  md5_image?: string;
  tracklist?: Url;
  type?: string;
  link?: Url;
  genre_id?: string;
  nb_tracks?: number;
  record_type?: string;
  explicit_lyrics?: boolean;
  artist?: ChartArtist;
};

export type AlbumTrack = {
  id: number;
  readable?: boolean;
  title: string;
  title_short?: string;
  title_version?: string;
  link: Url;
  duration: number;
  rank?: number;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_cover?: boolean | number;
  preview?: Url;
  md5_image?: string;
  artist: ChartArtist;
  album: AlbumSummary;
  type?: string;
};

export type ChartArtist = {
  id: number;
  name: string;
  link: string;
  picture: Url;
  picture_small: Url;
  picture_medium: Url; 
  picture_big: Url;
  picture_xl: Url;
  radio?: boolean;
  nb_album?: number;
  nb_fan?: number;
  tracklist?: Url;
  type?: string;
};

export type GeneralSearchResult = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: ChartArtist;
  album: AlbumSummary;
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
  type?: string;
};

export type ChartTrack = Omit<AlbumTrack, 'artist' | 'readable'> & {
  position: number;
  artist: ChartArtist;
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
    tracklist?: Url;
    type?: string;
  };
  type?: string;
  tracks: {
    data: AlbumTrack[];
  };
};

export type Artist = {
  id: number;
  name: string;
  link: Url;
  share: Url;
  picture: Url;
  picture_small: Url;
  picture_medium: Url;
  picture_big: Url;
  picture_xl: Url;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: Url;
};

export type Track = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  unseen: boolean;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries: string[];
  alternative: Track | null;
  contributors: {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: "artist";
    role: string;
  }[];
  md5_image: string;
  track_token: string;
  artist: {
    id: string;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: "artist";
  };
  album: {
    id: string;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    release_date: string;
  };
};

// Context type
export type GlobalState = {
  userName: string;
  topArtists: number[];
  topAlbums: number[];
  topTracks: number[];
  isListFull: boolean;
  isAlreadyInList: boolean;
  isNotificationVisible: boolean;
  closeNotification: () => void;
  setUserName: (userName: string) => void;
  addToList: (type: string, id: number) => boolean;
  removeFromList: (type: string, id: string) => void;
  reorderList?: (type: string, newList: string[]) => void;
};