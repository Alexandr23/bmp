import * as React from 'react';
const {PureComponent} = React;
import './style.less';
import {Table as AntTable} from 'antd';
import 'antd/lib/table/style';


interface Column {
  title: string;
  dataIndex: string;
  key: string;
}
type Columns = Column[];
const columns:Columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];
interface Data {
  key: string;
  name: string;
  age: number;
  address: string;
}
const dataSource: Data[] = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}];

class MyAntTable extends AntTable<Data> {}





class Table extends PureComponent<any, any> {
  public render () {
    return (
      <div className="table">
        <MyAntTable bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default Table;