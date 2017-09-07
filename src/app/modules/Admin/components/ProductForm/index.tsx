import * as React from 'react';
const {PureComponent} = React;
import {IProductState} from '../../models/product';
import {LAYOUT_MAIN, LAYOUT_BUTTON} from './layouts';
import './style.scss';

/* Ant Forms */
import {Form, Input, Button} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  product?: IProductState;
  onSubmit: (form: Object) => void;
}


class ProductForm extends PureComponent<IProps, any> {
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
    const isLoaded = this.props.product && this.props.product.isLoaded;
    const product = isLoaded ? this.props.product.data : null;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} style={{maxWidth: '600px'}}>
        <FormItem {...LAYOUT_MAIN} label="Название" hasFeedback>
          {getFieldDecorator('short_name', {
            initialValue: isLoaded ? product.attributes.short_name : '',
            rules: [{required: true, message: 'Введите название товара'}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...LAYOUT_MAIN} label="Полное название" hasFeedback>
          {getFieldDecorator('long_name', {
            initialValue: isLoaded ? product.attributes.long_name : '',
            rules: [{required: true, message: 'Введите полное название товара'}],
          })(
            <TextArea />
          )}
        </FormItem>

        <FormItem {...LAYOUT_BUTTON}>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

export default (Form.create as any)()(ProductForm);