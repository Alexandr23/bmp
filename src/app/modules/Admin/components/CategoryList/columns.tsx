import * as React from 'react';
import {ColumnProps} from "antd/lib/table/Column";
import {Icon} from 'antd';
import {ICategory} from "../../models/category";
import {Link} from 'react-router';
import {cx} from './index';


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
    render: (text: string, record: ICategory) => (
      <Link to={'/admin/category/' + record.id}>
        {record.attributes.name}
      </Link>
    ),
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
    render: (text: string, record: ICategory) => <div>{record.attributes.description}</div>,
  },
  {
    title: 'Каталог',
    dataIndex: 'catalog_id',
    key: 'catalog_id',
    render: (text: string, record: ICategory) => <div>{record.attributes.catalog_id}</div>,
  },
  {
    title: 'Активен',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (text: string, record: ICategory) => <div>{record.attributes.is_active ? 'Да' : 'Нет'}</div>,
  },
];