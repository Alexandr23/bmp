import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {Layout, Breadcrumb, message} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CatalogForm from '../../components/CatalogForm';
import {cx} from '../../components/LayoutAdmin';
import {catalogCreate} from '../../redux/catalog';


interface IProps {
  children: any;
  catalogCreate: (data: any) => any;
}

class CatalogCreate extends PureComponent<IProps, any> {
  props: IProps;

  createCatalog = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.catalogCreate(dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          console.log('catalogCreate => ', res);

          message.success('Каталог создан');
          browserHistory.push('/admin/catalog/' + res.payload.data.id);
        } else {
          console.log('catalogCreate ERROR => ', res);
          message.error('Ошибка создания')
        }
      });
  };

  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalogs">Каталоги</Link></BreadcrumbItem>
          <BreadcrumbItem>Создание каталога</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Создание каталога</h1>
          </div>

          <div className={cx('content__body')}>
            <CatalogForm onSubmit={this.createCatalog} />
          </div>
        </Content>
      </div>
    );
  }
}

export default (connect as any)(null, {catalogCreate})(CatalogCreate);