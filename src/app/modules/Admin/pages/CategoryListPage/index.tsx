import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import CategoryList from '../../components/CategoryList';
import CategoryCreateModal from '../../features/CategoryCreateModal';
import categoryListRedux from '../../redux/categoryList';
import {IParams} from '../../../../models/params';
import {ICategoryListState} from '../../models/category';

/* AntDesign */
import {Layout, Breadcrumb, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;

/* Styles from AdminLayout */
const style = require('../../components/LayoutAdmin/style.scss');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
  forceUpdate: () => any;
}

interface IState {
  isCreateModal: boolean;
}


class CategoryListPage extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      isCreateModal: false,
    };
  }

  createModalOpen = () => this.setState({isCreateModal: true});
  createModalClose = () => this.setState({isCreateModal: false});

  onCreate = () => {
    this.createModalClose();
    this.props.forceUpdate();
  };

  render() {
    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem>Категории товаров</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Категории товаров</h1>
            <Button size="small" type="primary" icon="plus" ghost onClick={this.createModalOpen}>Добавить</Button>
            {this.state.isCreateModal && <CategoryCreateModal onCancel={this.createModalClose} onCreate={this.onCreate} />}
          </div>

          <div className={cx('content__body')}>
            <CategoryList />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default (connect as any)(null, {forceUpdate: categoryListRedux.forceUpdate})(CategoryListPage);