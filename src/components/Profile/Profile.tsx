import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className="container">
      <div className={styles.profile}>
        <p className={styles.profileName}>Пользователь 1</p>
        <img
          src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
          alt="avatar"
          className={styles.profileAvatar}
        />
      </div>
    </div>
  );
}

export default Profile;
