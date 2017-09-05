import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CatalogForm from '../../components/CatalogForm';
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {ICatalogState, ICatalog} from '../../models/catalog';


interface IProps {
  children: any;
  catalog: ICatalogState;
}


class CatalogPage extends PureComponent<IProps, any> {
  props: IProps;

  updateCatalog = (data: any) => {
    console.log('update: ', data);
  };

  render() {
    const isLoaded = this.props.catalog.isLoaded;
    const catalog:ICatalog = isLoaded ? this.props.catalog.data : {};

    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalog/list">Каталоги</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? catalog.attributes.name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Каталог "{isLoaded ? catalog.attributes.name : ''}"</h1>
          </div>

          <div className={cx('content__body')}>
            <CatalogForm catalog={this.props.catalog} onSubmit={this.updateCatalog} />
          </div>
        </Content>
      </div>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  catalog: state.admin.catalog
}))(CatalogPage);