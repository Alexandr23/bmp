import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {catalogGet} from 'redux/modules/catalog';
import {ICatalog, ICatalogState} from 'models/catalog';
import {IStore} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import 'antd/lib/table/style';
import './style.less';


interface IProps {
  catalogGet: any;
  catalog: ICatalogState;
}
class CatalogTable extends Table<ICatalog> {}


class Catalog extends PureComponent<IProps, null> {
  public render () {
    const {list} = this.props.catalog;
    const pagination:PaginationProps = {
      total: list.length,
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['20', '50', '100', '200', '500', '1000', '5000'],
    };

    return (
      <div className="table">
        <CatalogTable bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
        <button onClick={this.props.catalogGet}>Загрузить список категорий</button>
      </div>
    );
  }
}


const mapStateToProps = (state: IStore) => ({
  catalog: state.catalog,
});
export default connect(mapStateToProps, {catalogGet})(Catalog);