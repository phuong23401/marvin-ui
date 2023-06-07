import styled from "styled-components/macro";

export const SectionWrapper = styled.section`
  padding: 2rem 0 4.5rem;
`;

export const DAOWrapper = styled.div`
  margin-bottom: 5.5rem;

  img {
    width: 100%;
    margin-bottom: 1.5rem;
    
    @media (min-width: 992px) {
      width: 45%;
      margin-bottom: 0;
    }

    @media (min-width: 1400px) {
      width: auto;
    }
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin: 0;
    }
  }
`;

export const ContentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2.5rem;

  @media (min-width: 576px) {
    font-size: 18px;
    line-height: 29px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 31px;
    margin-bottom: 2.5rem;
  }
`;

export const SecurityWrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    
    @media (min-width: 576px) {
      width: auto;
    }
  }

  button {
    margin: auto;
    margin-top: 1.5rem;
  }
`
