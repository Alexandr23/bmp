import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {IProduct, IProductListState} from '../../models/product';
import {IState} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import './style.less';


interface IProps {
  productList: IProductListState;
}
class ProductTable extends Table<IProduct> {}


class ProductList extends PureComponent<IProps, null> {
  public render () {
    const {list} = this.props.productList;
    const pagination:PaginationProps = {
      total: list.length,
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    // set rowKey
    list.map(item => item.key = '' + item.id);

    return (
      <div className="table">
        <ProductTable bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IState) => ({
  productList: state.admin.productList,
});
export default (connect as any)(mapStateToProps, {})(ProductList);