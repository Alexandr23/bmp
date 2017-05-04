import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {ICatalog} from "models/catalog";

const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export const columns: ColumnProps<any>[] = [
  {
    title: 'image',
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
    width: '60px',
    render: (text: string, record: ICatalog) => (
      <img className={cx('catalog__image')} src={record.thumbnailUrl} alt={record.title} title={record.title} />
    )
  },
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
];