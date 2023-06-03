import styled from 'styled-components/macro'

export const FooterMain = styled.footer`
  background-color: #000;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 2rem;
  }
`

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const LogoWrap = styled.a`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  width: 200px;
`

export const SupportedWallets = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
  }

  img {
    margin: 0 7px;
  }

  @media (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    p {
      margin-right: 1rem;
    }
  }

  @media (min-width: 992px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 1200px) {
    margin-right: 0.75rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 0;
  }

  @media (min-width: 992px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 1200px) {
    margin-right: 0.75rem;
  }

  img {
    width: 30px;
    margin: 0 0.75rem;

    @media (min-width: 576px) {
      margin: 0 1rem;
    }

    @media (min-width: 768px) {
      width: auto;
      margin-left: 1.5rem;
      margin-right: 0;
    }

    @media (min-width: 1200px) {
      margin-left: 2rem;
    }
  }
`

export const TagLine = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #cacaca;
  margin-bottom: 0;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: end;
  }

  @media (min-width: 992px) {
    margin-right: 0.5rem;
  }

  @media (min-width: 1200px) {
    margin-right: 0.75rem;
  }

  span {
    font-weight: 700;
    color: #ad203e;
  }
  a.link-policy {
    font-weight: 700;
    color: #ad203e;
  }
`

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: underline;
`
