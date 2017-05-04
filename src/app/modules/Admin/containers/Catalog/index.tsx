import * as React from 'react';
const {PureComponent} = React;
import Catalog from '../../components/Catalog';


interface IProps {
  children: any;
}


class CatalogPage extends PureComponent<IProps, null> {
  render() {
    return (
      <div>
        <h1>Каталог</h1>
        <Catalog />
      </div>
    );
  }
}

export default CatalogPage;