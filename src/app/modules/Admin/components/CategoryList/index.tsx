import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {ICategoryListState} from 'models/categoryList';
import {ICategory} from 'models/category';
import {IState} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import './style.less';


interface IProps {
  categoryList: ICategoryListState;
}
class CategoryTable extends Table<ICategory> {}


class CategoryList extends PureComponent<IProps, null> {
  public render () {
    const {list} = this.props.categoryList;
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
  categoryList: state.categoryList,
});
export default (connect as any)(mapStateToProps, {})(CategoryList);