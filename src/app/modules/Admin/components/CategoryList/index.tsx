import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {ICategory, ICategoryListState} from '../../models/category';
import {IState as IStore} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import './style.scss';
import {IPagination} from "../../../../models/pagination";
import {categoryListGet} from "../../redux/categoryList";


interface IProps {
  categoryList: ICategoryListState;
  categoryListGet: (params: any) => any;
  location: any;
}

interface IState {
  page: IPagination;
}

class CategoryTable extends Table<ICategory> {}
class CategoryList extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      page: this.props.categoryList.pagination,
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      page: newProps.categoryList.pagination,
    })
  }

  onPage = (page: any) => {
    const params = {
      filter: {},
      page: {
        number: page.current,
        size: page.pageSize,
      },
    };

    console.log(this.props.location);

    this.props.categoryListGet(params).then(() => {
      browserHistory.push({...this.props.location, query: {page: page.current, size: page.pageSize}});
    });
  };

  public render () {
    const {list} = this.props.categoryList;
    const {page} = this.state;
    const pagination:PaginationProps = {
      current: page.number,
      total: page.total,
      pageSize: page.size,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    list.map(item => item.key = '' + item.id); // set rowKey

    return (
      <div className="table">
        <CategoryTable onChange={this.onPage} bordered dataSource={list} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IStore) => ({
  categoryList: state.admin.categoryList,
  location: state.routing.locationBeforeTransitions,
});
export default (connect as any)(mapStateToProps, {categoryListGet})(CategoryList);