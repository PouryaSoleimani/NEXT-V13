function Logger(text: string, type: 'log' | 'info' | 'error' | 'success' | 'warning', param: any) {
  console.info(`%c ${text} `,
    `
    background-color : ${type === 'log' ? 'white' : type === 'info' ? 'cornflowerblue' : type === 'warning' ? '#ffdd00' : type === 'error' ? '#c10007' : '#00a63e'} ;
    font-weight : 800;
    font-size : 14px;
    padding : 2px 4px;
    margin : 10px 0;
    box-sizing : border-box;
    border-radius : 8px;
    color : ${type === 'log' ? 'black' : type === 'info' ? 'black' : type === 'warning' ? 'black' : type === 'error' ? 'white' : 'black'};
    `, param)
}

export default Logger