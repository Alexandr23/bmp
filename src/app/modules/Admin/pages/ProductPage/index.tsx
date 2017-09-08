import * as React from 'react';
const {PureComponent} = React;
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {IProductState, IProduct} from '../../models/product';
import ProductForm from '../../components/ProductForm';
import {productUpdate, productDelete} from '../../redux/product';

/* AntDesign */
import {Layout, Breadcrumb, message, Popconfirm, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  product: IProductState;
  productUpdate: (id: string, data: any) => any;
  productDelete: (id: string) => any;
}
interface IState {
  isActive: boolean;
}


class ProductPage extends PureComponent<IProps, IState> {
  props: IProps;

  productUpdate = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.productUpdate(this.props.product.data.id, dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Изменения товара сохранены.');
        } else {
          message.error('Ошибка сохранения.');
        }
      });
  };

  productDelete = () => {
    this.props.productDelete(this.props.product.data.id)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Товар удален.');
          browserHistory.push('/admin/product/list');
        } else {
          message.error('Ошибка удаления.');
        }
      });
  };

  render() {
    const isLoaded = this.props.product.isLoaded;
    const product: IProduct = isLoaded ? this.props.product.data : {};

    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/product/list">Товары</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? product.attributes.short_name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Товар "{isLoaded ? product.attributes.short_name : ''}"</h1>
            <Popconfirm title="Удалить товар?" onConfirm={this.productDelete} okText="Удалить" cancelText="Отмена" okType="danger">
              <Button type="danger" icon="delete" ghost>Удалить</Button>
            </Popconfirm>
          </div>

          <div className={cx('content__body')}>
            <ProductForm product={this.props.product} onSubmit={this.productUpdate} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  product: state.admin.product
}), {productUpdate, productDelete})(ProductPage);