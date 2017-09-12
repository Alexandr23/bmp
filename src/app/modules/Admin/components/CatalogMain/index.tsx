import * as React from 'react';
const {PureComponent} = React;
import {browserHistory} from 'react-router';
import {ICatalogState} from '../../models/catalog';
import Title, {Sizes} from '../../../../components/Title';
import CatalogForm from '../../components/CatalogForm';

/* Ant Forms */
import {Button, message, Popconfirm, Modal} from 'antd';

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  catalog: ICatalogState;
  catalogUpdate: (id: string, data: any) => any;
  catalogDelete: (id: string) => any;
}

interface IState {
  isEditModal: boolean;
}

class CatalogMain extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor (props) {
    super(props);

    this.state = {
      isEditModal: false,
    };
  }

  editModalOpen = () => {
    this.setState({isEditModal: true});
  };

  editModalClose = () => {
    this.setState({isEditModal: false});
  };

  catalogUpdate = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.catalogUpdate(this.props.catalog.data.id, dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Изменения каталога сохранены.');
          this.setState({isEditModal: false});
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

  public render () {
    const {catalog} = this.props;

    return (
      <div className={cx('wrap')}>
        <div className={cx('section', 'section_image')}>
          <div className={cx('image')} />
        </div>

        <div className={cx('section', 'section_title')}>
          <Title size={Sizes.h1}>Каталог "{catalog.isLoaded ? catalog.data.attributes.name : ''}"</Title>
          <p className={cx('shop')}>Название витрины</p>
        </div>

        <div className={cx('section', 'section_buttons')}>
          <Button className={cx('button')}
                  size="small"
                  type="primary"
                  icon="edit"
                  ghost
                  onClick={this.editModalOpen}>
            Редактировать
          </Button>

          {this.state.isEditModal && <Modal
            title="Редактирование каталога"
            wrapClassName="vertical-center-modal"
            visible={true}
            onCancel={this.editModalClose}
            footer=""
          >
            <CatalogForm catalog={catalog} onSubmit={this.catalogUpdate} buttons />
          </Modal>}

          <Popconfirm title="Удалить каталог?" onConfirm={this.catalogDelete} okText="Удалить" cancelText="Отмена" okType="danger">
            <Button className={cx('button')} size="small" type="danger" icon="delete" ghost>Удалить</Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default CatalogMain;