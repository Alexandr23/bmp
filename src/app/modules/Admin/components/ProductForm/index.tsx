import * as React from 'react';
const {PureComponent} = React;
import {IProductState} from '../../models/product';
import './style.less';

/* Ant Forms */
import {Form, Input, Button} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  product?: IProductState;
}


class ProductForm extends PureComponent<IProps, any> {
  props: IProps;

  handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(this.props.form.getFieldsValue());
  };

  public render () {
    const isLoaded = this.props.product.isLoaded;
    const product = isLoaded ? this.props.product.data : {};
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

    return (
      <Form onSubmit={this.handleSubmit} style={{maxWidth: '600px'}}>
        <FormItem {...formItemLayout} label="Название" hasFeedback>
          {getFieldDecorator('short_name', {
            initialValue: isLoaded ? product.attributes.short_name : '',
            rules: [{required: true, message: 'Введите название товара'}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Полное название" hasFeedback>
          {getFieldDecorator('long_name', {
            initialValue: isLoaded ? product.attributes.long_name : '',
            rules: [{required: true, message: 'Введите полное название товара'}],
          })(
            <TextArea />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Дата создания">
          {product.attributes.date_created || '—'}
        </FormItem>

        <FormItem {...formItemLayout} label="Создатель">
          {product.attributes.creator_id || '—'}
        </FormItem>

        <FormItem {...formItemLayout} label="Дата редактирования">
          {product.attributes.date_updated || '—'}
        </FormItem>

        <FormItem {...formItemLayout} label="Редактор">
          {product.attributes.updater_id || '—'}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

export default (Form.create as any)()(ProductForm);