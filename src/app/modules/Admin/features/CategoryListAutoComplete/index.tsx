import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {categoryListGet} from '../../features/CategoryListAutoComplete/redux';
import {ICategoryListState} from "../../models/category";
import {IState as IStore} from 'models/store';

/* Ant Forms */
import {AutoComplete} from 'antd';


interface IProps {
  catalogId: number;
  categoryList: ICategoryListState;
  categoryListGet: any;
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

  componentWillReceiveProps (newProps) {
    this.setState({
      categoryList: newProps.categoryList,
    });
  }

  onSelect = (data) => {
    console.log(data);
  };

  onSearch = (query) => {
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