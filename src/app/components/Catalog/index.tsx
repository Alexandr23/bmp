import * as React from 'react';
const { PureComponent } = React;
import { Table as AntTable, DatePicker, LocaleProvider } from 'antd';
import * as ruRU from 'antd/lib/locale-provider/ru_RU';
import { PaginationProps } from 'antd/lib/pagination';
import 'antd/lib/table/style';
import 'antd/lib/date-picker/style';
import { columns, dataSource, IData } from './data';
import './style.less';


class CatalogTable extends AntTable<IData> {}
class Catalog extends PureComponent<any, any> {
  public render () {
    const pagination:PaginationProps = {
      total: dataSource.length,
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '15', '20', '50', '100'],
    };

    return (
      <LocaleProvider locale={ruRU}>
        <div className="table">
          <CatalogTable bordered dataSource={dataSource} columns={columns} size="small" pagination={pagination} />
          <DatePicker />
        </div>
      </LocaleProvider>
    );
  }
}

export default Catalog;