const React = require("react");
const { Hero, Container, Heading } = require("react-bulma-components");
const { Link } = require("react-router-dom");

module.exports = () => (
    <Hero color="primary" gradient>
        <Hero.Body>
            <Container>
                <Link to="/">
                    <Heading>서울과학고등학교 회장단 선거</Heading>
                    <Heading subtitle>당신의 선택을 기다립니다.</Heading>
                </Link>
            </Container>
        </Hero.Body>
    </Hero>
);
