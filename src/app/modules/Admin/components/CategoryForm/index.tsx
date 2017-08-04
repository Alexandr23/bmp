import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {IState} from "models/store";
import {ICategoryState} from 'models/category';
import './style.less';

/* Ant Forms */
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;


interface IProps {
}


class CategoryForm extends PureComponent<null, null> {
  public render () {
    return (
      <div>sdfsdf</div>
    );
  }
}

//const WrapperCategoryForm = Form.create()(CategoryForm);

// const mapStateToProps = (state: IState) => ({
//   category: state.category,
// });
export default CategoryForm;