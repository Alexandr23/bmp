import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {ICatalog, ICatalogListState} from '../../models/catalog';
import {IState} from "models/store";
import {Table} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';
import {columns} from './columns';
import './style.less';


interface IProps {
  catalogList: ICatalogListState;
}
class CatalogTable extends Table<ICatalog> {}


class CatalogList extends PureComponent<IProps, null> {
  props: IProps;

  public render () {
    const {list} = this.props.catalogList;
    const pagination:PaginationProps = {
      total: list.length,
      pageSize: 20,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    };

    // set rowKey
    list.map(item => item.key = '' + item.id);

    return (
      <div className="table">
        <CatalogTable bordered dataSource={list.reverse()} columns={columns} size="small" pagination={pagination} />
      </div>
    );
  }
}


const mapStateToProps = (state: IState) => ({
  catalogList: state.admin.catalogList,
});
export default (connect as any)(mapStateToProps, {})(CatalogList);