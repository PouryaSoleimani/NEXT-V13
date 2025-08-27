function Logger(text: string, type: "log" | "info" | "error" | "success" | "warning", param: any) {
  console.info(
    `%c ${text} `,
    `
background-color : ${
      type === "log" ? "white" : type === "info" ? "cornflowerblue" : type === "warning" ? "#ffdd00" : type === "error" ? "#c10007" : "#497d00"
    } ;
    font-weight : 900;
    font-size : 12px;
    font-family : 'Fira Code';
    padding : 2px 3px;
    box-sizing : border-box;
    border-radius : 30px;
    border: 5px solid black;
    color : ${type === "log" ? "black" : type === "info" ? "black" : type === "warning" ? "black" : type === "error" ? "white" : "white"};
    `,
    param
  );
}

export default Logger;
