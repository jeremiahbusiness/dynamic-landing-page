

function WhyUs1({ modInfo }) {
  return (
    <div style={{ padding: '50px', backgroundColor: modInfo.colors.secondary, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
    <img src={'/icons/questionMark.png'} style={{ width: '100px', margin: '20px auto' }} />
    <div style={{ textAlign: 'center', color: 'white' }}>
      <p style={{ marginTop: '0', fontSize: '30px' }}>
        Why choose us?
      </p>
      <p style={{ padding: '0 5vw', fontSize: '20px', fontWeight: '300', }}>{modInfo.whyUs}</p>
    </div>


  </div>
  );
}

export default WhyUs1;
