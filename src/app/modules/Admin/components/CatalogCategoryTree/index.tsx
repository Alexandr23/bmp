import * as React from 'react';
const {PureComponent} = React;
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);

class CatalogCategoryTree extends PureComponent {
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
    const categoryList = [
      {id: '1', title: 'Печенье', sub: [
        {id: '9', title: 'Печенье Яшкино'},
        {id: '10', title: 'Печенье Бонди'},
      ]},
      {id: '2', title: 'Вафли'},
      {id: '3', title: 'Круассаны'},
      {id: '4', title: 'Конфеты'},
      {id: '5', title: 'Драже'},
      {id: '6', title: 'Зефир'},
      {id: '7', title: 'Семечки'},
      {id: '8', title: 'Крекеры'},
    ];

    return (
      <Tree
        defaultExpandedKeys={['1']}
        defaultSelectedKeys={['9']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        {categoryList.length && categoryList.map(category => CatalogCategoryTree.renderTreeNode(category))}
      </Tree>
    );
  }
}

const CategoryTitle = ({category}) => (
  <div className={cx('category')}>
    <div className={cx('category__image', 'category__image_' + category.id)} />
    <div className={cx('category__title')}>{category.title}</div>
  </div>
);


export default CatalogCategoryTree;