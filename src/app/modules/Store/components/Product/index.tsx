import * as React from 'react';
const {PureComponent} = React;
import {IProduct} from 'models/catalog';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  product: IProduct;
}


class Product extends PureComponent<IProps, any> {
  render() {
    const {title, url} = this.props.product;

    return (
      <div className={cx('product')}>
        <div className={cx('inner')}>
          <img className={cx('image')} src={url} alt={title} />

          <div className={cx('name')}>{title}</div>
        </div>
      </div>
    );
  }
}

export default Product;