import * as React from 'react';
const {PureComponent} = React;
import {ICategoryState} from '../../models/category';
import './style.scss';

/* Ant Forms */
import {Form, Input, Button, Switch} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  category?: ICategoryState;
  onSubmit: (data: any) => any
}


class CategoryForm extends PureComponent<IProps> {
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

    return (
      <Form onSubmit={this.onSubmit} style={{maxWidth: '600px'}}>
        <FormItem label="Название" hasFeedback>
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Введите название категории'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem label="Описание" hasFeedback>
          {getFieldDecorator('description', {
            rules: [{required: true, message: 'Введите описание категории'}],
          })(
            <TextArea autosize={{ minRows: 3, maxRows: 6 }} />
          )}
        </FormItem>

        <FormItem label="Каталог" hasFeedback>
          {getFieldDecorator('catalog_id', {
            rules: [{required: true, message: 'Выберите каталог'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem label="Родительская категория" hasFeedback>
          {getFieldDecorator('parent_id')(
            <Input />
          )}
        </FormItem>

        <FormItem label="Активна">
          {getFieldDecorator('is_active', {
            initialValue: false,
            rules: [{required: true, message: 'Укажите активность категории'}],
          })
          (
            <Switch defaultChecked={false} />
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