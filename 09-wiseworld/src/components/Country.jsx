import style from "./Country.module.css";

function Country({ country }) {
  return (
    <>
      <div className={style.country}>
        <img src={country.emoji} width="20%" />
        {country.country}
      </div>
    </>
  );
}

export default Country;
