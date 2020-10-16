import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button, Dropdown, Menu, Table, Pagination } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import DeleteComponent from './delete'

const menu = (handleMenuClick, id, item) => {
  return (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key={"read" + {id}} id={id}><Button type="default">Ver Detalle</Button></Menu.Item>
    <Menu.Item key={"update"+ {id}} id={id}><Button type="primary">Actualizar</Button></Menu.Item>
    <Menu.Item key={"delete" + {id}} id={id}><DeleteComponent id={id} item={item}/></Menu.Item>
  </Menu>
)};

const ReadAllComponent = () => {
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(51);
  const [currentPage, setCurrentPage] = useState(51);

  const handleMenuClick = useCallback((e) => {
    const { key } = e;
    const { id } = e.item.props;
    console.log(id);
    switch (key) {
      case 'read':
        console.log('Ver');
        break;
      case 'update':
        console.log('Actualizar');
        break;
      case 'delete':
        console.log('Eliminar');
        break;
      default:
        break;
    }
  },
  [],
  );

  const onShowSizeChange = (current, _pageSize) => {
    console.log(current, _pageSize);
    setPageSize(_pageSize);
  }

  const onPageChange = (page, _pageSize) => {
    console.log(page, pageSize);
    setCurrentPage(page);
  }
  const dataSource = [
    {
      id: '25',
      name: 'Mike',
      emailAddress: 'contactenos@cliente.com'
    },
    {
      id: '26',
      name: 'John',
      emailAddress: 'contactenos@cliente2.com'
    },
  ];
  
  const columns = [
    {
      title: 'Cliente',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Correo eltectrónico',
      dataIndex: 'emailAddress',
      key: 'emailAddress',
    },
    {
      title: 'Acciones',
      dataIndex: 'id',
      key: 'id',
    render: (id, item) => 
    <Dropdown overlay={menu(handleMenuClick, id, item)}>
      <Button>
        Acciones <DownOutlined />
      </Button>
    </Dropdown>,
    }
  ];

  return (
    <>
    <Table dataSource={dataSource} columns={columns} />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      onChange={onPageChange}
      defaultCurrent={1}
      total={totalItems}
      defaultPageSize = {10}
      pageSize = {pageSize}
    />
    </>
  )
}

export default ReadAllComponent;