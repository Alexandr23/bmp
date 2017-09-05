import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {IProductState, IProduct} from '../../models/product';
import ProductForm from '../../components/ProductForm';

/* AntDesign */
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  product: IProductState;
}
interface IState {
  isActive: boolean;
}


class ProductPage extends PureComponent<IProps, IState> {
  props: IProps;

  render() {
    const isLoaded = this.props.product.isLoaded;
    const product: IProduct = isLoaded ? this.props.product.data : {};

    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/product/list">Товары</Link></BreadcrumbItem>
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
}))(ProductPage);