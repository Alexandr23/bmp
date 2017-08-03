import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {ICatalog, ICatalogState} from 'models/catalog';
import {IState} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import 'antd/lib/table/style';
import './style.less';


interface IProps {
  catalog: ICatalogState;
}
class CategoryTable extends Table<ICatalog> {}


class CategoryList extends PureComponent<IProps, null> {
  public render () {
    const {list} = this.props.catalog;
    const pagination:PaginationProps = {
      total: list.length,
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    return (
      <div className="table">
        <CategoryTable bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IState) => ({
  catalog: state.catalog,
});
export default connect(mapStateToProps, {})(CategoryList);