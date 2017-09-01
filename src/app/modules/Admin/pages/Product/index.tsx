import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {IProductState} from '../../models/product';
import ProductForm from '../../components/ProductForm';


interface IProps {
  children: any;
  product: IProductState;
}
interface IState {
  isActive: boolean;
}


class Product extends PureComponent<IProps, IState> {
  props: IProps;

  render() {
    const isLoaded = this.props.product.isLoaded;
    const product = isLoaded ? this.props.product.data : {};

    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalogs">Товары</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? product.attributes.short_name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Товар "{isLoaded ? product.attributes.short_name : ''}"</h1>
          </div>

          <div className={cx('content__body')}>
            <ProductForm product={this.props.product} />
          </div>
        </Content>
      </div>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  product: state.admin.product
}))(Product);