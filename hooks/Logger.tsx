function Logger(
  text: string,
  type: "log" | "info" | "error" | "success" | "warning" | "pink" | "yellow" | "cyan",
  param: any
) {
  console.info(
    `%c ${text} `,
    `
background-color : ${
      type === "log"
        ? "white"
        : type === "info"
          ? "cornflowerblue"
          : type === "warning"
            ? "orange"
            : type === "error"
              ? "#c10007"
              : type === "pink"
                ? "hotpink"
                : type === "cyan"
                  ? "cyan"
                  : type === "yellow"
                    ? "yellow"
                    : "#497d00"
    };
font-weight : 900;
font-size : 12px;
font-family : 'Fira Code';
padding: 2px 3px;
box-sizing : border - box;
border - radius : 30px;
border: 5px solid black;
color: black; `,
    param
  );
}

export default Logger;
