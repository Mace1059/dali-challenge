import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";

import "./CreateNewPost.css";

const CreateNewPost = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      className="center"
    >
      <Modal.Header className="center">
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="create-post-modal center" onSubmit={handleSubmit(onSubmit)}>
          <h3>Title</h3>
          <input
            type="text"
            {...register("title", { required: true, maxLength: 20 })}
          />
          {/* <h6>Image</h6>

          <input
            className="center"
            type="file"
            {...register("image", { required: false })}
          /> */}
          <h6>Image URL</h6>

          <input
            type="text"
            {...register("image", { required: false })}
          />
          <h4>Description</h4>
          <input
            className="input"
            type="text"
            {...register("description", { required: false, maxLength: 100 })}
          />

          <Button
            className="default center"
            variant="primary"
            onClick={props.onHide}
            type="submit"
          >
            Post
          </Button>
        </form>
        <Button
          className="default danger"
          variant="secondary"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CreateNewPost;
