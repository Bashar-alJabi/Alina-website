import styles from "./Button.module.css";

const Button = () => {
	return (
		<button className={styles.btn} type="button">
			<p className={styles.strong}>Explore</p>
			<div className={styles.containerStars}>
				<div className={styles.stars}></div>
			</div>

			<div className={styles.glow}>
				<div className={styles.circle}></div>
				<div className={styles.circle}></div>
			</div>
		</button>
	);
};

export default Button;