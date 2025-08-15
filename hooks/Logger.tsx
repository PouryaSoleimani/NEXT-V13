function Logger(text: string, type: 'log' | 'info' | 'error' | 'success' | 'warning', param: any) {
  console.info(
    `%c ${text} `,
    `
    background-color : ${
      type === 'log'
        ? 'white'
        : type === 'info'
        ? 'cornflowerblue'
        : type === 'warning'
        ? '#ffdd00'
        : type === 'error'
        ? '#c10007'
        : '#0d542b'
    } ;
    font-weight : 800;
    font-size : 12px;
    padding : 2px 4px;
    box-sizing : border-box;
    border-radius : 3px;
    color : ${
      type === 'log'
        ? 'black'
        : type === 'info'
        ? 'black'
        : type === 'warning'
        ? 'black'
        : type === 'error'
        ? 'white'
        : 'white'
    };
    `,
    param
  );
}

export default Logger;
