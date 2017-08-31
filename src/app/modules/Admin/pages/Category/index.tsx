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


class Category extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    const {title} = this.props.category.data;

    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem><Link to="/admin/categories">Категории товаров</Link></BreadcrumbItem>
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <h1 className={cx('title')}>Категория "{title}"</h1>

          <CategoryForm category={this.props.category} />
        </Content>
      </div>
    );
  }
}

export default (connect as any)((state: IState) => ({
  category: state.admin.category
}))(Category);