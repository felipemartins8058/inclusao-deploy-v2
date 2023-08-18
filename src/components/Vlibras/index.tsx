'use client'
import { type } from 'os';
import React, { useEffect } from 'react';

function Vlibras() {
    useEffect(() => {
      setTimeout(() => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
        console.log('Vlibras loaded');
      }, 1000);
    }, []);

    const Vlibras = `<div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
  setTimeout(() => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
    console.log("foi")
  }, 100);
  </script>`
  
    

    return (
      <>
        <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: Vlibras }} />
      </>
    );
  }
  
  export default Vlibras;