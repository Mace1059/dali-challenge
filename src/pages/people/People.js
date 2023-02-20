import React, { useState } from "react";
import PeopleCard from "./PeopleCard/PeopleCard";
import Posts from "./PostsCard/Posts";

import "./People.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "../../components/Button/Button";
import CreateNewPost from "./CreateNewPost/CreateNewPost";


const People = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row>
        <Col className="center">
          <div className="posts-box">
            <Posts all={true}/>
          </div>
        </Col>
        <Col className="center" style={{ paddingTop: "40px" }}>
          <Stack gap={3} className="center">
            <div className="discover-box shadow">
              Friends
              <div className="people-list center">
                {props.dummyUsers.map((user) => (
                  <PeopleCard
                    key={user.name}
                    name={user.name}
                    picture={user.picture}
                    type="friend"
                  />
                ))}
              </div>
            </div>
            <div className="discover-box shadow">
              Discover New People!
              <div className="people-list center">
                {props.users.map((user) => (
                  <PeopleCard
                    key={user.name}
                    name={user.name}
                    picture={user.picture}
                  />
                ))}
              </div>
            </div>
            <Button className="default create" onClick={handleShow}>
              Create New Post
            </Button>
          </Stack>
        </Col>
      </Row>

      <CreateNewPost show={show} onHide={handleClose}/>
    </Container>
  );
};

export default People;
