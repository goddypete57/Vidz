const colors = {
    primary: '#00FF00',
    white:'#FFFFFF',
    black:'#000000',



  };


  const light = {
    background: '#FFFFFF',
    textDark: 'rgba(0, 0, 0, 0.7)',
    ...colors,
  }
  
  const dark = {
    background: '#000000',
    textDark: '#',

    ...colors,
  }
  
  export default { light, dark,colors };
 