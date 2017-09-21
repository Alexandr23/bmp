import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import CategoryForm from '../../components/CategoryForm';
import {categoryCreate} from '../../redux/category';
import categoryListRedux from '../../redux/categoryList';

/* Ant Forms */
import {message, Modal} from 'antd';


interface IProps {
  categoryCreate: (data: any) => any;
  categoryListGet: (params: any) => any;
  onCancel?: () => any;
  onCreate?: () => any;
  catalogId: number;
}


class CategoryCreateModal extends PureComponent<IProps> {
  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  onSubmit = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.categoryCreate(dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Категория создана.');
          this.props.onCreate && this.props.onCreate();
        } else {
          message.error('Ошибка сохранения.');
        }
      });
  };

  public render () {
    return (
      <Modal title="Создание категории"
             wrapClassName="vertical-center-modal"
             visible={true}
             onCancel={this.onCancel}
             footer="">
        <CategoryForm onSubmit={this.onSubmit}
                      catalogId={this.props.catalogId}
                      categoryListGet={this.props.categoryListGet} />
      </Modal>
    );
  }
}

export default (connect as any)(null, {categoryCreate, categoryListGet: categoryListRedux.get})(CategoryCreateModal);