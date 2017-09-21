import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {ICatalog, ICatalogListState} from '../../models/catalog';
import catalogListRedux from '../../redux/catalogList';
import {IState} from "models/store";
import {columns} from './columns';

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);

/* AntDesign */
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';


interface IProps {
  catalogList: ICatalogListState;
  catalogListGet: any;
}


class CatalogTable extends Table<ICatalog> {}
class CatalogList extends PureComponent<IProps> {
  onChange = (data) => {
    const {params} = this.props.catalogList;
    const newParams = {
      ...params,
      pagination: {
        ...params.pagination,
        number: data.current,
        size: data.pageSize,
      },
    };

    this.props.catalogListGet(newParams, true);
  };

  public render () {
    const {list, params} = this.props.catalogList;
    const pagination:PaginationProps = {
      current: params.pagination.number,
      total: params.pagination.total,
      pageSize: params.pagination.size,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    // set rowKey
    list.map(item => item.key = '' + item.id);

    return (
      <div className="table">
        <CatalogTable onChange={this.onChange} bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IState) => ({
  catalogList: state.admin.catalogList,
});
export default (connect as any)(mapStateToProps, {catalogListGet: catalogListRedux.get})(CatalogList);