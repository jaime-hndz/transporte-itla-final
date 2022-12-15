export const PageTitle = ({ children, azul = false, escala = 2 }) => {
  return (
    <div
      style={{
        fontSize: `${escala}em`,
        color: azul ? "#0E6CB4" : "black"
      }}
      className='page-title'
    >
      {children}

      <hr />
    </div>
  );
};
