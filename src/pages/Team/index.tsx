import Scroll from 'react-scroll'
import { Container } from 'react-bootstrap'
import {
  ContentMobile,
  ContentDesktop,
  MemberImage,
  MemberInfo,
  MemberWrapper,
  SectionWrapper,
  SocialWrapper
} from './Styled'
import SectionTitle from 'components/SectionTitle'
import Member from 'assets/images/Team/member.png'
import Twitter from 'assets/images/Team/twitter.png'
import Telegram from 'assets/images/Team/telegram.png'
import Jack from 'assets/images/Team/Members/jack.png'
import Hizuno from 'assets/images/Team/Members/hizuno.png'
import Zeus from 'assets/images/Team/Members/zeus.png'
import Queen from 'assets/images/Team/Members/queen.png'
import Mula from 'assets/images/Team/Members/mula.png'
import QuestionMark from 'assets/images/Team/question_mark.png'

function Team(): JSX.Element {
  return (
    <Scroll.Element name="team">
      <SectionWrapper>
        <Container>
          <SectionTitle subTitle="Team" alignCenter>
            Marvin Team Structure
          </SectionTitle>
          <ContentMobile>
            <MemberWrapper>
              <MemberImage>
                <img src={Member} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Kikai</h5>
                <p>Co-founder & Master Designer (RIP)</p>
                <SocialWrapper>
                  <a
                    href="https://twitter.com/sir_kikai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
            <MemberWrapper>
              <MemberImage>
                <img src={Jack} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Jack</h5>
                <p>Co-founder & Master Visionary</p>
                <SocialWrapper>
                  <a
                    href="https://twitter.com/shinobiofcrypto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" />
                  </a>
                  <a
                    href="https://www.t.me/Shinobiofcrypto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
            <MemberWrapper>
              <MemberImage>
                <img src={Hizuno} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Hizuno</h5>
                <p>Co-founder & Human Resources</p>
                <SocialWrapper>
                  <a
                    href="https://twitter.com/donhizuno"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" />
                  </a>
                  <a
                    href="https://www.t.me/donhizuno"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
            <MemberWrapper>
              <MemberImage>
                <img src={Zeus} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Zeus</h5>
                <p>Co-founder & Head Of Development</p>
                <SocialWrapper>
                  <a
                    href="https://www.t.me/Stanley668"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
            <MemberWrapper>
              <MemberImage>
                <img src={Queen} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Queen</h5>
                <p>Head of Marketing</p>
                <SocialWrapper>
                  <a
                    href="https://twitter.com/queenscryptos?s=21&t=sOUOfKmNG-dzWrhhr4IGAQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" />
                  </a>
                  <a
                    href="https://www.t.me/QueenMonique88"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
            <MemberWrapper>
              <MemberImage>
                <img src={Mula} alt="" />
              </MemberImage>
              <MemberInfo>
                <h5>Mula</h5>
                <p>Social Management & Content Creation</p>
                <SocialWrapper>
                  <a
                    href="https://twitter.com/mula_mule_300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" />
                  </a>
                  <a
                    href="https://www.t.me/MulaMarvin300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="" />
                  </a>
                </SocialWrapper>
              </MemberInfo>
            </MemberWrapper>
          </ContentMobile>

          <ContentDesktop>
            <div>
              <MemberWrapper>
                <MemberImage>
                  <img src={Hizuno} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Hizuno</h5>
                  <p>Co-founder & Human Resources</p>
                  <SocialWrapper>
                    <a
                      href="https://twitter.com/donhizuno"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="" />
                    </a>
                    <a
                      href="https://www.t.me/donhizuno"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage className="question_mark">
                  <img src={QuestionMark} alt="" />
                </MemberImage>
                {/* <MemberInfo>
                  <h5>Kikai</h5>
                  <p>Co-founder & Master Designer (RIP)</p>
                  <SocialWrapper>
                    <img src={Twitter} alt="" />
                  </SocialWrapper>
                </MemberInfo> */}
              </MemberWrapper>
            </div>
            <div>
              <MemberWrapper>
                <MemberImage>
                  <img src={Member} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Kikai</h5>
                  <p>Co-founder & Master Designer (RIP)</p>
                  <SocialWrapper>
                    <a
                      href="https://twitter.com/sir_kikai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage>
                  <img src={Queen} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Queen</h5>
                  <p>Head of Marketing</p>
                  <SocialWrapper>
                    <a
                      href="https://twitter.com/queenscryptos?s=21&t=sOUOfKmNG-dzWrhhr4IGAQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="" />
                    </a>
                    <a
                      href="https://www.t.me/QueenMonique88"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage className="question_mark">
                  <img src={QuestionMark} alt="" />
                </MemberImage>
                {/* <MemberInfo>
                  <h5>Kikai</h5>
                  <p>Co-founder & Master Designer (RIP)</p>
                  <SocialWrapper>
                    <img src={Twitter} alt="" />
                  </SocialWrapper>
                </MemberInfo> */}
              </MemberWrapper>
            </div>
            <div>
              <MemberWrapper>
                <MemberImage>
                  <img src={Jack} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Jack</h5>
                  <p>Co-founder & Master Visionary</p>
                  <SocialWrapper>
                    <a
                      href="https://twitter.com/shinobiofcrypto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="" />
                    </a>
                    <a
                      href="https://www.t.me/Shinobiofcrypto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage>
                  <img src={Mula} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Mula</h5>
                  <p>Social Management & Content Creation</p>
                  <SocialWrapper>
                    <a
                      href="https://twitter.com/mula_mule_300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="" />
                    </a>
                    <a
                      href="https://www.t.me/MulaMarvin300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage className="question_mark">
                  <img src={QuestionMark} alt="" />
                </MemberImage>
                {/* <MemberInfo>
                  <h5>Kikai</h5>
                  <p>Co-founder & Master Designer (RIP)</p>
                  <SocialWrapper>
                    <img src={Twitter} alt="" />
                  </SocialWrapper>
                </MemberInfo> */}
              </MemberWrapper>
            </div>
            <div>
              <MemberWrapper>
                <MemberImage>
                  <img src={Zeus} alt="" />
                </MemberImage>
                <MemberInfo>
                  <h5>Zeus</h5>
                  <p>Co-founder & Head Of Development</p>
                  <SocialWrapper>
                    <a
                      href="https://www.t.me/Stanley668"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="" />
                    </a>
                  </SocialWrapper>
                </MemberInfo>
              </MemberWrapper>
              <MemberWrapper>
                <MemberImage className="question_mark">
                  <img src={QuestionMark} alt="" />
                </MemberImage>
                {/* <MemberInfo>
                  <h5>Kikai</h5>
                  <p>Co-founder & Master Designer (RIP)</p>
                  <SocialWrapper>
                    <img src={Twitter} alt="" />
                  </SocialWrapper>
                </MemberInfo> */}
              </MemberWrapper>
            </div>
          </ContentDesktop>
        </Container>
      </SectionWrapper>
    </Scroll.Element>
  )
}

export default Team
