import * as React from 'react';
const {PureComponent} = React;
import {IProduct} from '../../models/catalog';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  product: IProduct;
}


class Product extends PureComponent<IProps, any> {
  props: IProps;

  render() {
    const {title, url} = this.props.product;

    return (
      <div className={cx('product')}>
        <div className={cx('inner')}>
          <img className={cx('image')} src={url} alt={title} />

          <div className={cx('title')}>{title}</div>

          <div className={cx('cart')}>
            <div className={cx('price')}>1000 руб.</div>
            <div className={cx('button')}>В корзину</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;