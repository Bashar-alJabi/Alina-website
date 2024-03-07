import styles from "./loading.module.css";

export default function Loading() {
	return (
		<div className={styles.container}>
			<div className={styles.loading}>
				<span className={`${styles.span} ${styles.child1}`}></span>
				<span className={`${styles.span} ${styles.child2}`}></span>
				<span className={`${styles.span} ${styles.child3}`}></span>
				<span className={`${styles.span} ${styles.child4}`}></span>
				<span className={`${styles.span} ${styles.child5}`}></span>
			</div>
		</div>
	);
}