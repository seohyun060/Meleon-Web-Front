export type ListItemType = {
  title: string;
  coin: number;
  volume: number;
  date: string;
};

export type MusicListItemType = ListItemType & {
  playtime: string;
};

export type VideoListItemType = ListItemType & {
  playtime: string;
};

export type ThreeDListItemType = ListItemType;

export type TempleteListItemType = ListItemType & {
  playtime: string;
};

export type ImageListItemType = ListItemType;

export type IllustListItemType = ListItemType;

export type ContentType =
  | 'music'
  | 'video'
  | 'threed'
  | 'templete'
  | 'image'
  | 'illust';

export type ContentUploadType = {
  title: string;
  content: string;
  smallTag: string;
  bigTag: string;
  coin: number;
};

export type ImageUploadType = ContentUploadType;
