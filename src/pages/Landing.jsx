import main from "../assets/images/newmain.png";
import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*Info*/}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Welcome to JobNest! Your ultimate platform for creating and finding
            job opportunities. Employers can effortlessly post vacancies, while
            job seekers can easily apply for their dream roles. Experience
            seamless hiring and job search like never before. Join us at JobNest
            and nest your career to success!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
