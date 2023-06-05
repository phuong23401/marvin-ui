import Button from "components/Button";
import { ButtonWrapper, CardSubtitle, CardTitle, CardWrapper } from "./Styled";

function CrewTheMoon(): JSX.Element {
  return (
    <CardWrapper>
      <CardTitle>Screw the moon, Elon taking us to Mars</CardTitle>
      <CardSubtitle>
        Marvin, Elon Musk's oldest dog & Floki's oldest brother. A meme that has
        actual real time utility - staking, GameFi, Launchpad , NFT Marketplace,
        and NFTs without the gas fees (well almost).
      </CardSubtitle>
      <ButtonWrapper>
        <Button type="primary">Play</Button>
      </ButtonWrapper>
    </CardWrapper>
  );
}

export default CrewTheMoon;
