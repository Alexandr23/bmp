import * as React from 'react';
const {PureComponent} = React;
import {ICatalogState} from '../../models/catalog';
import './style.less';
import {LAYOUT_MAIN, LAYOUT_BUTTON} from './layouts';

/* Ant Forms */
import {Form, Input, Button, Switch} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  catalog?: ICatalogState;
  onSubmit: (form: Object) => void;
}


class CategoryForm extends PureComponent<IProps, any> {
  props: IProps;

  isValid = (data) => {
    let isValid = true;

    Object.keys(data).forEach(key => {
      if (data[key] && data[key].length > 0) {
        isValid = false;
      }
    });

    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields();
    const errors = this.props.form.getFieldsError();
    const isValid = this.isValid(errors);

    if (this.props.onSubmit && isValid) {
      this.props.onSubmit(this.props.form.getFieldsValue());
    }
  };

  public render () {
    const isLoaded = this.props.catalog && this.props.catalog.isLoaded;
    const catalog = isLoaded ? this.props.catalog.data : null;
    const {getFieldDecorator} = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} style={{maxWidth: '600px'}}>
        <FormItem {...LAYOUT_MAIN} label="Название" hasFeedback>
          {getFieldDecorator('name', {
            initialValue: isLoaded ? catalog.attributes.name : '',
            rules: [{required: true, message: 'Введите название каталога'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem {...LAYOUT_MAIN} label="Описание" hasFeedback>
          {getFieldDecorator('description', {
            initialValue: isLoaded ? catalog.attributes.description : '',
            rules: [{required: true, message: 'Введите описание каталога'}],
          })(
            <TextArea />
          )}
        </FormItem>

        <FormItem {...LAYOUT_MAIN} label="Активен">
          {getFieldDecorator('is_active', {
            initialValue: isLoaded ? catalog.attributes.is_active : false,
            rules: [{required: true, message: 'Укажите активность каталога'}],
          })
          (
            <Switch defaultChecked={isLoaded ? catalog.attributes.is_active : false} />
          )}
        </FormItem>

        <FormItem {...LAYOUT_BUTTON}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

export default (Form.create as any)()(CategoryForm);