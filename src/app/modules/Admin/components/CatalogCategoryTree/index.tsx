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
    const categoryList = this.props.categoryList.list;

    let categoryTree = [...categoryList];

    // console.log(categoryTree);
    //
    // categoryList.map((category, i) => {
    //   const parentId = category.attributes.parent_id + '';
    //   const parent = parentId ? categoryTree.filter(category => category.id == parentId)[0] : false;
    //
    //   console.log(`categoryId = ${category.id}, parentId = ${parentId}, parent = ${parent}`);
    //
    //   if (parent) {
    //     parent.sub = parent.sub || [];
    //     parent.sub.push(category);
    //     categoryTree.splice(i, 1);
    //   }
    // });
    //
    // console.log(categoryTree);

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
    <div className={cx('category__title')}>{category.attributes.parent_id ? category.attributes.parent_id + '_' : ''}{category.id}_{category.attributes.name}</div>
  </div>
);


export default CatalogCategoryTree;