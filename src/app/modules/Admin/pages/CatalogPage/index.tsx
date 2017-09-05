import * as React from 'react';
const {PureComponent} = React;
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import CatalogForm from '../../components/CatalogForm';
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {ICatalogState, ICatalog} from '../../models/catalog';
import {catalogUpdate, catalogDelete} from '../../redux/catalog';

/* AntDesign */
import {Layout, Breadcrumb, message, Button, Popconfirm} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  catalog: ICatalogState;
  catalogUpdate: (id: string, data: any) => any;
  catalogDelete: (id: string) => any;
}


class CatalogPage extends PureComponent<IProps, any> {
  props: IProps;

  catalogUpdate = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.catalogUpdate(this.props.catalog.data.id, dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Изменения каталога сохранены.');
        } else {
          message.error('Ошибка сохранения.');
        }
      });
  };

  catalogDelete = () => {
    this.props.catalogDelete(this.props.catalog.data.id)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Каталог удален.');
          browserHistory.push('/admin/catalog/list');
        } else {
          message.error('Ошибка удаления.');
        }
      });
  };

  render() {
    const isLoaded = this.props.catalog.isLoaded;
    const catalog:ICatalog = isLoaded ? this.props.catalog.data : {};

    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalog/list">Каталоги</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? catalog.attributes.name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Каталог "{isLoaded ? catalog.attributes.name : ''}"</h1>
            <Popconfirm title="Удалить каталог?" onConfirm={this.catalogDelete} okText="Удалить" cancelText="Отмена" okType="danger">
              <Button type="danger" icon="delete" ghost>Удалить</Button>
            </Popconfirm>
          </div>

          <div className={cx('content__body')}>
            <CatalogForm catalog={this.props.catalog} onSubmit={this.catalogUpdate} />
          </div>
        </Content>
      </div>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  catalog: state.admin.catalog
}), {catalogUpdate, catalogDelete})(CatalogPage);