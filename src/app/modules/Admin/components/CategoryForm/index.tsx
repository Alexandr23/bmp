import * as React from 'react';
const {PureComponent} = React;
import {ICategoryState} from '../../models/category';
import './style.less';

/* Ant Forms */
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
  form?: any;
  category?: ICategoryState;
}


class CategoryForm extends PureComponent<IProps, any> {
  props: IProps;

  handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(this.props.form.getFieldsValue());
  };

  public render () {
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
          {getFieldDecorator('name', {
            initialValue: this.props.category.data.title ,
            rules: [{required: true, message: 'Введите название категории'}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Активна">
          {getFieldDecorator('active', {valuePropName: 'checked'})(
            <Checkbox />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Описание" hasFeedback>
          {getFieldDecorator('description', {
            rules: [{required: true, message: 'Введите описание категории'}],
          })(
            <TextArea />
          )}
        </FormItem>

        <FormItem {...formItemLayout} hasFeedback
          label={(
            <span>
              Изображение&nbsp;
              <Tooltip title="Заргузите изображение 40px*40px">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )} >
          {getFieldDecorator('image', {
            rules: [{ required: true, message: 'Загрузите изображение', whitespace: true }],
          })(
            <Input />
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