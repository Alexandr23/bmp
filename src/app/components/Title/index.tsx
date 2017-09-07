import * as React from 'react';
const {PureComponent} = React;
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;

/* Styles */
const style = require('./style.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


export enum Sizes {h1 = 'h1', h2 = 'h2', h3 = 'h3'};

interface IProps {
  size?: Sizes;
  children?: any;
}


class Title extends PureComponent<IProps> {
  props: IProps;

  public static defaultProps: Partial<IProps> = {
    size: Sizes.h1,
  };

  public render () {
    const className = cx({
      title: true,
      [`title_size_${this.props.size}`]: this.props.size,
    });

    return (
      this.props.size === Sizes.h1 && <h1 className={className}>{this.props.children}</h1> ||
      this.props.size === Sizes.h2 && <h2 className={className}>{this.props.children}</h2> ||
      this.props.size === Sizes.h3 && <h3 className={className}>{this.props.children}</h3>
    );
  }
}

export default Title;