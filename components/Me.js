import React from 'react';
import Image from 'next/image';

const Me = () => {
  return (
    <section className="me">
      <Image src="/myself.png" alt="Me" width="228" height="300" />
    </section>
  )
}

export default Me;
