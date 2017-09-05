import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {Layout, Breadcrumb, message} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import ProductForm from '../../components/ProductForm';
import {cx} from '../../components/LayoutAdmin';
import {productCreate} from '../../redux/product';


interface IProps {
  children: any;
  productCreate: (data: any) => any;
}

class ProductCreatePage extends PureComponent<IProps, any> {
  props: IProps;

  createProduct = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.productCreate(dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          console.log('productCreate => ', res);

          message.success('Товар создан');
          browserHistory.push('/admin/product/' + res.payload.data.id);
        } else {
          console.log('productCreate ERROR => ', res);
          message.error('Ошибка создания')
        }
      });
  };

  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/product/list">Товары</Link></BreadcrumbItem>
          <BreadcrumbItem>Создание товара</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Создание товара</h1>
          </div>

          <div className={cx('content__body')}>
            <ProductForm onSubmit={this.createProduct} />
          </div>
        </Content>
      </div>
    );
  }
}

export default (connect as any)(null, {productCreate})(ProductCreatePage);