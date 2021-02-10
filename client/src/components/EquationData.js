import { MathComponent } from 'mathjax-react'

export const EquationsData = ({ text }) => {
  return (
    <>
      <MathComponent tex={String.raw`${text}`} display={false} />
    </>
  );
};
