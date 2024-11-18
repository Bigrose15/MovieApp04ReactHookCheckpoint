import React from "react";
import Movie from "./Movie";

import { Row, Col } from "react-bootstrap";

const Movielist = ({ movies }) => {
  return (
    <Row style={{ rowGap: "10px" }}>
      {movies.map((eachMovie) => {
        return (
          <Col xs={12} md={6} lg={3} key={eachMovie.id}>
            <Movie
              title={eachMovie.title}
              description={eachMovie.description}
              imgURL={eachMovie.imgURL}
              rating={eachMovie.rating}
            />
          </Col>
        );
      })}
    </Row>
  );
};
export default Movielist;
