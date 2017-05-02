interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

type Columns = Column[];

export interface IData {
    key: string;
    name: string;
    age: number;
    address: string;
}


export const columns:Columns = [{
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