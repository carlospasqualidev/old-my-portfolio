/* eslint-disable react/no-array-index-key */
import * as Style from './styles';

export const AnimatedLetter = ({ text }: { text: string }) => (
  <Style.LetterContainer>
    {text.split('').map((element, index) => (
      <Style.Letter key={element + index}>
        <h1 key={element + index}>{element}</h1>
      </Style.Letter>
    ))}
  </Style.LetterContainer>
);
