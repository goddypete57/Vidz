const colors = {
    primary: '#00FF00',
    white:'#FFFFFF',
    black:'#000000',



  };


  const light = {
    background: '#FFFFFF',
    textDark: 'rgba(0, 0, 0, 0.7)',
    profileText:'rgba(0, 0, 0, 1)',
    searchBorder:'#FFFFFF',
    pullup:'rgba(255, 132, 31, 1)',
    searchIconColor:'rgba(255, 255, 255, 1)',
    searchBackGround:'rgba(0, 255, 0, 0.2)',
    ripple1:'rgba(0, 255, 0, 0.3)',
    ripple2:'rgba(0, 255, 0, 0.9)',
    ...colors,
  }
  
  const dark = {
    background: '#000000',
    textDark: '#rgba(0, 255, 0, 1)',
    profileText:'rgba(255, 255, 255, 1)',
    searchBorder:'rgba(233, 233, 233, 0.23)',
    pullup:'rgba(0, 255, 0, 1)',
    searchIconColor:'rgba(0, 255, 0, 1)',
    searchBackGround:'rgba(255, 255, 255, 0.08)',
    ripple1:'rgba(0, 255, 0, 0.1)',
    ripple2:'rgba(0, 255, 0, 0.7)',
    ...colors,
  }
  
  export default { light, dark,colors };
 