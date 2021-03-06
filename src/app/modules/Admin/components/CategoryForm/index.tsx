import * as React from 'react';
const {PureComponent} = React;
import {ICategoryState} from '../../models/category';
import CategoryListAutoComplete from '../../features/CategoryListAutoComplete';
import './style.scss';

/* Ant Forms */
import {Form, Input, Button, Switch, AutoComplete} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  category?: ICategoryState;
  onSubmit: (data: any) => any;
  catalogId?: number;
}

interface IState {
  categoryList: any[];
}


class CategoryForm extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      categoryList: [],
    }
  }

  isValid = (data) => {
    let isValid = true;

    Object.keys(data).forEach(key => {
      if (data[key] && data[key].length > 0) {
        isValid = false;
      }
    });

    return isValid;
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields();
    const errors = this.props.form.getFieldsError();
    const isValid = this.isValid(errors);

    if (this.props.onSubmit && isValid) {
      this.props.onSubmit(this.props.form.getFieldsValue());
    }
  };

  public render () {
    const { getFieldDecorator } = this.props.form;
    const {category} = this.props;

    const dataSource = this.state.categoryList.map(category => ({
      value: category.id,
      text: category.attributes.name + ' ' + category.attributes.description,
    }));

    return (
      <Form onSubmit={this.onSubmit} style={{maxWidth: '600px'}}>
        <FormItem label="Название" hasFeedback>
          {getFieldDecorator('name', {
            initialValue: category ? category.data.attributes.name : '',
            rules: [{required: true, message: 'Введите название категории'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem label="Описание" hasFeedback>
          {getFieldDecorator('description', {
            initialValue: category ? category.data.attributes.description : '',
            rules: [{required: true, message: 'Введите описание категории'}],
          })(
            <TextArea autosize={{ minRows: 3, maxRows: 6 }} />
          )}
        </FormItem>

        <FormItem label="Каталог" hasFeedback>
          {getFieldDecorator('catalog_id', {
            initialValue: category ? category.data.attributes.catalog_id : (this.props.catalogId ? this.props.catalogId : ''),
            rules: [{required: true, message: 'Выберите каталог'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem label="Родительская категория">
          {getFieldDecorator('parent_id', {
            initialValue: category ? category.data.attributes.parent_id : '',
          })(
            <Input />
          )}
        </FormItem>

        <FormItem label="Активна">
          {getFieldDecorator('is_active', {
            initialValue: category ? category.data.attributes.is_active : false,
            rules: [{required: true, message: 'Укажите активность категории'}],
          })
          (
            <Switch defaultChecked={category ? category.data.attributes.is_active : false} />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

export default (Form.create as any)()(CategoryForm);