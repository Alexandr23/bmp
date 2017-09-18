import * as React from 'react';
const {PureComponent} = React;
import {ICategoryListState} from "../../models/category";
import {CATEGORY_TREE} from './example';

/* AntDesign */
import {Tree, Input} from 'antd';
const {Search} = Input;
const TreeNode = Tree.TreeNode;

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);

interface IProps {
  categoryList: ICategoryListState;
}

class CatalogCategoryTree extends PureComponent<IProps> {
  props: IProps;

  onSelect = (data, e) => {
    console.log(data, e);
  };

  onCheck = (data, e) => {
    console.log(data, e);
  };

  static renderTreeNode = (category) => {
    if (category.sub && category.sub.length > 0) {
      return (
        <TreeNode key={category.id} title={<CategoryTitle category={category} />} id={category.id}>
          {category.sub.map(category => CatalogCategoryTree.renderTreeNode(category))}
        </TreeNode>
      );
    } else {
      return <TreeNode key={category.id} title={<CategoryTitle category={category} />} id={category.id} />;
    }
  };

  public render () {
    const categoryTree = this.props.categoryList.list.length ? this.props.categoryList.list.map(category => ({
      id: category.id,
      title: category.attributes.name
    })) : CATEGORY_TREE;

    const defaultCategoryId = categoryTree[0].id;

    return (
      <div>
        <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />
        <Tree
          defaultExpandedKeys={['1']}
          defaultSelectedKeys={[defaultCategoryId]}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          {categoryTree.length && categoryTree.map(category => CatalogCategoryTree.renderTreeNode(category))}
        </Tree>
      </div>
    );
  }
}

const CategoryTitle = ({category}) => (
  <div className={cx('category')}>
    <div className={cx('category__image', `category__image_${category.id % 10 + 1}`)} />
    <div className={cx('category__title')}>{category.title}</div>
  </div>
);


export default CatalogCategoryTree;