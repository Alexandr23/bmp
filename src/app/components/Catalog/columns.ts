interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

export const columns: Column[] = [
  {
    title: 'albumId',
    dataIndex: 'albumId',
    key: 'albumId',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'url',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'thumbnailUrl',
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
  }
];