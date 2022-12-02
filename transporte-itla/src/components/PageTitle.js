export const PageTitle = ({ children, azul = false, escala = 2 }) => {
  return (
    <div
      style={{
        fontSize: `${escala}em`,
        color: azul ? "#0E6CB4" : "black",
        fontWeight: "bold",
        marginBlockStart: "0.67em",
        marginBlockEnd: "0.67em",
      }}
    >
      {children}

      <hr />
    </div>
  );
};
