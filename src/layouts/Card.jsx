import styles from '../styles/components/Card.module.css';

const Card = ({ data }) => {
  return (
    <a className={styles["organization-card"]} href={`/climate-champions/${data.slug}`}>
      <div className={styles["logo-wrapper"]}>
        <img
          src={data.logoUrl}
          alt={data.name}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles["organization-name"]}>{data.name}</h3>
        <p className={styles.location}>
          <span className={styles.icon}>
          </span>
          <span className={styles.address}>{data.address}</span>
        </p>
        <p className={styles.description}>
          {data.description.substring(0,112) + "..."}
        </p>
        <div className={styles.tags}>
          {data.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
