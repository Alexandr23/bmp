import * as React from 'react';
const {PureComponent} = React;
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Layout, Breadcrumb, message, Popconfirm, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CategoryForm from '../../components/CategoryForm';
import {cx} from '../../components/LayoutAdmin';
import {IState} from 'models/store';
import {ICategoryState} from '../../models/category';
import {categoryUpdate, categoryDelete} from '../../redux/category';


interface IProps {
  children: any;
  category: ICategoryState;
  categoryUpdate: any;
  categoryDelete: any;
}


class CategoryPage extends PureComponent<IProps> {
  onUpdate = (data) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.categoryUpdate(this.props.category.data.id, dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Изменения категории сохранены.');
        } else {
          message.error('Ошибка сохранения.');
        }
      });
  };

  onDelete = () => {
    this.props.categoryDelete(this.props.category.data.id)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Категория удалена.');
          browserHistory.push('/admin/category/list');
        } else {
          message.error('Ошибка удаления.');
        }
      });
  };

  render() {
    const {category} = this.props;
    const name = category.isLoaded ? category.data.attributes.name : '';

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
            <Popconfirm title="Удалить категорию?" onConfirm={this.onDelete} okText="Удалить" cancelText="Отмена" okType="danger">
              <Button size="small" type="danger" icon="delete" ghost>Удалить</Button>
            </Popconfirm>
          </div>

          <div className={cx('content__body')}>
            <CategoryForm category={category.isLoaded ? category : null} onSubmit={this.onUpdate} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default (connect as any)((state: IState) => ({
  category: state.admin.category
}), {categoryUpdate, categoryDelete})(CategoryPage);