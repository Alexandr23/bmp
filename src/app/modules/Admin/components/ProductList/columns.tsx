import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {IProduct} from "../../models/product";
import {Link} from 'react-router';

const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export const columns: ColumnProps<any>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: '60px',
  },
  {
    title: 'Название',
    dataIndex: 'short_name',
    key: 'short_name',
    render: (text: string, record: IProduct) => <Link to={`/admin/product/${record.id}`}>{record.attributes.short_name}</Link>,
  },
  {
    title: 'Полное название',
    dataIndex: 'long_name',
    key: 'long_name',
    render: (text: string, record: IProduct) => record.attributes.long_name,
  },
  {
    title: 'Создатель',
    dataIndex: 'creator_id',
    key: 'creator_id',
    render: (text: string, record: IProduct) => record.attributes.creator_id,
  },
  {
    title: 'Дата создания',
    dataIndex: 'date_created',
    key: 'date_created',
    render: (text: string, record: IProduct) => record.attributes.date_created,
  },
  {
    title: 'Редактор',
    dataIndex: 'updater_id',
    key: 'updater_id',
    render: (text: string, record: IProduct) => record.attributes.updater_id,
  },
  {
    title: 'Дата редактирования',
    dataIndex: 'date_updated',
    key: 'date_updated',
    render: (text: string, record: IProduct) => record.attributes.date_updated,
  },
];