import React from 'react';
import Button from '../styled-components/Button.jsx';
import TopSection$ from '../styled-components/TopSection$.jsx';
import Spacer from '../styled-components/Spacer.jsx';
import CodeDiv from '../styled-components/CodeDiv.jsx';
import PageTitle$ from '../styled-components/PageTitleH2$.jsx';
import ButtonDiv from '../styled-components/ButtonDiv.jsx';


const TopSection = () => {
  return (
    <TopSection$ id='top'>
      <PageTitle$>
        Simplifying two-factor SMS authentication for your application so you can relax.
      </PageTitle$>
      <CodeDiv>
        <p>
          const twoFactor = require('two-factor');
          <br />
          const client = twoFactor(*ACC_SID*, *AUTH_TOKEN*);
          <br />
          client.create(*USER_ID*, *PHONE_NUMBER*);
          <br />
          client.send(*USER_ID*);
          <br />
          client.verify(*USER_ID*, *SIX_DIGIT_CODE*);
        </p>
      </CodeDiv>
      <br />
      <ButtonDiv>
      <Button onClick = {() => {window.location.href = "https://www.npmjs.com/package/two-auth"}}>Two-Auth on NPM</Button>
      <Button onClick = {() => {window.location.href = "https://github.com/two-factor/two-auth"}}>GitHub ReadMe</Button>
      </ButtonDiv>
      <Spacer id="installCode" />
      <p>Run this code inside your terminal to install two-auth.</p>
      <CodeDiv>
        <p>~$ npm install --save two-factor</p>
      </CodeDiv>
    </TopSection$>
  )
}

export default TopSection;
