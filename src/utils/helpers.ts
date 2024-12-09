import { CatelogItem } from './types';
import { Album, Artist, Track } from './types';
import { ItemType } from './types';

type filterDataProps = {
  type: ItemType;
  data: Album | Track | Artist;
};

export default function filterData({ type, data }: filterDataProps): CatelogItem | Error {
  let item: CatelogItem;

  if (type === 'artist') {
    data = data as Artist;
    item = {
      id: data.id,
      type: 'artist',
      title: data.name,
      imageSrc: data.picture_xl
    };
  } else if (type === 'track') {
    data = data as Track;
    item = {
      id: data.id,
      type: 'track',
      title: data.title,
      artist_name: data.artist.name,
      release_date: data.release_date,
      imageSrc: data.album.cover_xl
    };
  } else if (type === 'album') {
    data = data as Album;
    item = {
      id: data.id,
      type: 'album',
      title: data.title,
      artist_name: data.artist.name,
      imageSrc: data.cover_xl,
      release_date: data.release_date
    };
  } else {
    return new Error ('Data unable to be filtered.');
  }

  return item;
};