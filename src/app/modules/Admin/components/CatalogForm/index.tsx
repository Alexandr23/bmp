import * as React from 'react';
const {PureComponent} = React;
import {ICatalogState} from '../../models/catalog';
import './style.less';

/* Ant Forms */
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  catalog?: ICatalogState;
}


class CategoryForm extends PureComponent<IProps, any> {
  props: IProps;

  handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(this.props.form.getFieldsValue());
  };

  public render () {
    const isLoaded = this.props.catalog.isLoaded;
    const catalog = isLoaded ? this.props.catalog.data : {};
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    console.log('isLoaded ', isLoaded);
    console.log('catalog ', catalog);

    return (
      <Form onSubmit={this.handleSubmit} style={{maxWidth: '600px'}}>
        <FormItem {...formItemLayout} label="Название" hasFeedback>
          {getFieldDecorator('name', {
            initialValue: isLoaded ? catalog.attributes.name : '',
            rules: [{required: true, message: 'Введите название каталога'}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Описание" hasFeedback>
          {getFieldDecorator('description', {
            initialValue: isLoaded ? catalog.attributes.description : '',
            rules: [{required: true, message: 'Введите описание каталога'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Активна">
          {getFieldDecorator('active', {valuePropName: 'checked'})(
            <Checkbox />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

export default (Form.create as any)()(CategoryForm);