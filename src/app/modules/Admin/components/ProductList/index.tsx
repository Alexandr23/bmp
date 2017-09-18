import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {IProduct, IProductListState} from '../../models/product';
import {IState} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


interface IProps {
  productList: IProductListState;
}
class ProductTable extends Table<IProduct> {}


class ProductList extends PureComponent<IProps, null> {
  props: IProps;

  public render () {
    const {list} = this.props.productList;
    const pagination:PaginationProps = {
      total: list.length,
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    // set rowKey
    list.map(item => item.key = '' + item.id);


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
      }),
    };


    return (
      <div className={cx('table')}>
        <ProductTable rowSelection={rowSelection} dataSource={list} columns={columns} size="small" pagination={pagination} scroll={{ y: true }} />
      </div>
    );
  }
}


const mapStateToProps = (state: IState) => ({
  productList: state.admin.productList,
});
export default (connect as any)(mapStateToProps, {})(ProductList);