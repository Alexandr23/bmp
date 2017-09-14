import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import * as _ from "lodash";
import {ICategory, ICategoryListState} from '../../models/category';
import {IState as IStore} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import './style.scss';
import {IPagination} from "../../../../models/pagination";
import {categoryListGet, onPagination} from "../../redux/categoryList";


interface IProps {
  categoryList: ICategoryListState;
  categoryListGet: (params: any) => any;
  onPagination: (params: any) => any;
  location: any;
}

interface IState {
  pagination: IPagination;
}

class CategoryTable extends Table<ICategory> {}
class CategoryList extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      pagination: this.props.categoryList.pagination,
    }
  }

  componentWillReceiveProps (newProps) {
    const pagination = newProps.categoryList.pagination;
    const isNeedUpdate = !_.isEqual(pagination, this.props.categoryList.pagination);

    console.log('isNeedUpdate = ', isNeedUpdate);
    console.log(pagination, this.props.categoryList.pagination);

    if (isNeedUpdate) {
      this.setState({pagination});
      this.props.categoryListGet({pagination});
    }
  }

  onChange = (page: PaginationProps, filter?: any, sorter?: any) => {
    console.log(page, filter, sorter);

    this.props.onPagination({number: page.current, size: page.pageSize});
  };

  public render () {
    const {list} = this.props.categoryList;
    const pagination:PaginationProps = {
      current: this.state.pagination.number,
      total: this.state.pagination.total,
      pageSize: this.state.pagination.size,
      showSizeChanger: true,
      pageSizeOptions: ['1','10', '20', '50', '100'],
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
export default (connect as any)(mapStateToProps, {categoryListGet, onPagination})(CategoryList);