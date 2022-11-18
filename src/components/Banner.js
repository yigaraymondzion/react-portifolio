import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/my_profile.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);

      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

      setDelta(500);
    } else {
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">
                Hi!, You are welcome to my Space #Portfolio
              </span>
              <h1>
                {`I'm Raymond, a`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Passionate about creating a positive impact in the world. Self
                motivated and always working towards being the best in every
                thing that I do. Looking forward to collaborating with those
                whose ambition is to create a positive impact to the society and
                strive to be their best versions as well and at the same time be
                willing to help others be their best versions.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
