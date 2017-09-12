import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CategoryForm from '../../components/CategoryForm';
import {cx} from '../../components/LayoutAdmin';
import {IState} from 'models/store';
import {ICategoryState} from '../../models/category';


interface IProps {
  children: any;
  category: ICategoryState;
}


class CategoryPage extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const {name} = this.props.category.data.attributes;

    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem><Link to="/admin/category/list">Категории товаров</Link></BreadcrumbItem>
          <BreadcrumbItem>{name}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Категория "{name}"</h1>
          </div>

          <div className={cx('content__body')}>
            <CategoryForm category={this.props.category} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default (connect as any)((state: IState) => ({
  category: state.admin.category
}))(CategoryPage);