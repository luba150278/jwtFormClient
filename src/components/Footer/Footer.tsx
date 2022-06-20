import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Container } from 'react-bootstrap';
import { FooterWrapDiv, Section } from './Footer.styles';

export function Footer(): JSX.Element {
  return (
    <Section>
      <Container>
        <FooterWrapDiv>
          <div>
            <p>Contact me:</p>
            <a href="mailto: luba150278@gmail.com">
              <HiOutlineMail />
            </a>
            <a href="tel:+380935331342">
              <HiOutlinePhone />
            </a>
          </div>
          <div>Lyubov Myetolkina - Frontend Developer</div>
        </FooterWrapDiv>
      </Container>
    </Section>
  );
}
