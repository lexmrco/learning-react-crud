import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const DeleteComponent = (props) => {
  const { id, item } = props;
  const [state, setState] = useState({ visible: false });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };
  return(
      <>
        <Button type="primary" onClick={showModal} danger>
          Eliminar
        </Button>
        <Modal
          title="Basic Modal"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Está seguro que quiere eliminar el cliente "{item.name}"?</p>
        </Modal>
      </>
    );
}
export default DeleteComponent;