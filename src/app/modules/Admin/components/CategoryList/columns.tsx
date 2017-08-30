import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {Icon} from 'antd';
import {ICategory} from "../../models/category";
import {Link} from 'react-router';

const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export const columns: ColumnProps<any>[] = [
  {
    title: 'image',
    dataIndex: 'thumbnailUrl',
    key: 'thumbnailUrl',
    width: '60px',
    render: (text: string, record: ICategory) => (
      <img className={cx('category__image')} src={record.thumbnailUrl} alt={record.title} title={record.title} />
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
  {
    title: 'edit',
    dataIndex: 'edit',
    key: 'edit',
    width: '40px',
    render: (text: string, record: ICategory) => (
      <Link to={'/admin/category/' + record.id}>
        <Icon type="edit" style={{width: '20px', height: '20px', fontSize: '18px'}} />
      </Link>
    )
  },
];