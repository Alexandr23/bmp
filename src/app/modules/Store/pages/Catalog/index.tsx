import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {IState} from 'models/store';
import {ICatalogState} from '../../models/catalog';
import Layout from '../../components/Layout';
import Product from '../../components/Product';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
  catalog: ICatalogState;
}


class Catalog extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const {products} = this.props.catalog;

    return (
      <Layout>
        <div className={cx('page')}>
          <h1 className={cx('title')}>Каталог</h1>

          {products.length && <div className={cx('list')}>
            {products.map((product) => <Product product={product} key={product.id} />)}
          </div>}
          {! products.length && <p>Товаров нет</p>}
        </div>
      </Layout>
    );
  }
}

export default (connect as any)((state: IState) => ({
  catalog: state.store.catalog,
}))(Catalog);