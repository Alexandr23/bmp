import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {Icon} from 'antd';
import {ICategory} from "../../models/category";
import {Link} from 'react-router';

const style = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export const columns: ColumnProps<any>[] = [

  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: ICategory) => <div>{record.attributes.name}</div>,
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    render: (text: string, record: ICategory) => <div>{record.attributes.description}</div>,
  },
  {
    title: 'Активен',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (text: string, record: ICategory) => <div>{record.attributes.is_active ? 'Да' : 'Нет'}</div>,
  },
  {
    title: '',
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