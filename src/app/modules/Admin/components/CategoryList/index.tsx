import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {ICategory, ICategoryListState} from '../../models/category';
import {IState as IStore} from "models/store";
import {columns} from './columns';
import {IParams} from "../../../../models/params";
import categoryListRedux from "../../redux/categoryList";

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);

/* AntDesign*/
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';


interface IProps {
  categoryList: ICategoryListState;
  categoryListGet: (params: IParams, isReplaceLocation?: boolean) => any;
  onParams: (params: IParams) => any;
  location: any;
}


class CategoryTable extends Table<ICategory> {}
class CategoryList extends PureComponent<IProps> {
  componentWillReceiveProps (newProps) {
    newProps.categoryList.isForceUpdate && this.props.categoryListGet(newProps.categoryList.params, true);
  }

  onChange = (page: PaginationProps) => {
    const {params} = this.props.categoryList;
    const newParams = {
      ...params,
      pagination: {
        ...params.pagination,
        number: page.current,
        size: page.pageSize,
      },
    };

    this.props.categoryListGet(newParams, true);
  };

  public render () {
    const {list, params} = this.props.categoryList;
    const pagination:PaginationProps = {
      current: params.pagination.number,
      total: params.pagination.total,
      pageSize: params.pagination.size,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    list.map(item => item.key = '' + item.id); // set rowKey

    return (
      <div className="table">
        <CategoryTable onChange={this.onChange} bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IStore) => ({
  categoryList: state.admin.categoryList,
  location: state.routing.locationBeforeTransitions,
});
export default (connect as any)(mapStateToProps, {categoryListGet: categoryListRedux.get})(CategoryList);