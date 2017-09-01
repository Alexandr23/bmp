import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {Icon} from 'antd';
import {ICatalog} from "../../models/catalog";
import {Link} from 'react-router';

const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export const columns: ColumnProps<any>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: '40px',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: ICatalog) => <Link to={`/admin/catalog/${record.id}`}>{record.attributes.name}</Link>,
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    render: (text: string, record: ICatalog) => record.attributes.description,
  },
  {
    title: 'Активен',
    dataIndex: 'is_active',
    key: 'is_active',
    width: '65px',
    render: (text: string, record: ICatalog) => record.attributes.is_active ? 'Да' : 'Нет',
  },
  {
    title: 'Создатель',
    dataIndex: 'creator_id',
    key: 'creator_id',
    width: '80px',
    render: (text: string, record: ICatalog) => record.attributes.creator_id,
  },
  {
    title: 'Дата создания',
    dataIndex: 'date_created',
    key: 'date_created',
    width: '120px',
    render: (text: string, record: ICatalog) => record.attributes.date_created,
  },
  {
    title: 'Редактор',
    dataIndex: 'updater_id',
    key: 'updater_id',
    width: '80px',
    render: (text: string, record: ICatalog) => record.attributes.updater_id,
  },
  {
    title: 'Дата редактирования',
    dataIndex: 'date_updated',
    key: 'date_updated',
    width: '120px',
    render: (text: string, record: ICatalog) => record.attributes.date_updated,
  },
];