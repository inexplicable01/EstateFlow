import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "./section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: "assets/images/team/img-1.jpg",
          title: "Frank Johnson",
          desc: "CEO",
        },
        {
          image: "assets/images/team/img-2.jpg",
          title: "Elaine Stclair",
          desc: "DESIGNER",
        },
        {
          image: "assets/images/team/img-3.jpg",
          title: "Wanda Arthur",
          desc: "DEVELOPER",
        },
        {
          image: "assets/images/team/img-4.jpg",
          title: "Joshua Stemple",
          desc: "MANAGER",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-4" id="team">
          <Container>
            {/* section title */}
            <SectionTitle
              title="BEHIND THE PEOPLE"
              desc="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
            />

            <Row className="mt-5">
              {/* team box */}
              <TeamBox teams={this.state.teams} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
