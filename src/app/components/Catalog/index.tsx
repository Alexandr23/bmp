import * as React from 'react';
const { PureComponent } = React;
import {connect} from 'react-redux';
import {categoryGetList} from '../../redux/modules/category';
import { Table, LocaleProvider } from 'antd';
import * as ruRU from 'antd/lib/locale-provider/ru_RU';
import { PaginationProps } from 'antd/lib/pagination';
import 'antd/lib/table/style';
import { columns, dataSource, IData } from './data';
import './style.less';


class CatalogTable extends Table<IData> {}
class Catalog extends PureComponent<any, any> {
  public render () {
    const {list} = this.props.category;
    const pagination:PaginationProps = {
      total: dataSource.length,
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '15', '20', '50', '100'],
    };

    return (
      <LocaleProvider locale={ruRU}>
        <div className="table">
          <CatalogTable bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
          <button onClick={this.props.categoryGetList}>Загрузить список категорий</button>
        </div>
      </LocaleProvider>
    );
  }
}


const mapStateToProps = (state: any) => ({
  category: state.category,
});
export default connect(mapStateToProps, {categoryGetList})(Catalog);