import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {categoryListGet} from '../../features/CategoryListAutoComplete/redux';
import {ICategoryListState} from "../../models/category";
import {IState as IStore} from 'models/store';

/* Ant Forms */
import {AutoComplete} from 'antd';

// TODO: как отображать дефолтное значение?

interface IProps {
  catalogId: number;
  categoryId: any;
  categoryList: ICategoryListState;
  categoryListGet: any;
  onChange?: any;
}

interface IState {
  categoryList: ICategoryListState;
}


const prepareCategoryList = (list) => (list && list.length) ? list.map(category => ({
  value: category.id,
  text: category.attributes.name,
})) : [];


class CategoryListAutoComplete extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      categoryList: this.props.categoryList,
    }
  }

  componentWillMount () {
    if (this.props.categoryId) {

    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      categoryList: newProps.categoryList,
    });
  }

  onSelect = (value) => {
    console.log('onSelect = ', value);

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  onSearch = (query) => {
    if (this.props.onChange) {
      //this.props.onChange('');
    }

    const params = {
      filter: {
        catalog_id: this.props.catalogId,
        name: query,
      }
    };

    this.props.categoryListGet(params);
  };

  public render () {
    return (
      <AutoComplete
        defaultValue={'asdfasdf'}
        dataSource={prepareCategoryList(this.props.categoryList.list)}
        onSelect={this.onSelect}
        onSearch={this.onSearch}
        placeholder="Начни вводить, чувак!"
      />
    );
  }
}

export default (connect as any)((state:IStore) => ({
  categoryList: state.admin.categoryListAutoComplete,
}), {categoryListGet})(CategoryListAutoComplete);