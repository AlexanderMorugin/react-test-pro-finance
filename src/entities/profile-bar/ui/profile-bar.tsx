import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton, DateBox, ProfileBox } from '../..';

import styles from './profile-bar.module.scss';
import Routes from '../../../shared/config/routes/routes';

const ProfileBar: FC = () => {
  const navigate = useNavigate();

  const user = 'Иванов И.И.';
  const noUser = 'Зарегистрируйтесь';

  const [name, setName] = useState(user);

  const handleToggleProfile = () => {
    if (name === noUser) setName(user);
    if (name === user) setName(noUser);
  };

  const handleRouting = () => {
    navigate(Routes.ABOUT);
  };

  return (
    <section className={styles.profileBar}>
      <div className={styles.profileBar__leftBox}>
        <ProfileBox name={name} />
        {name === user && <DateBox />}
      </div>
      <div className={styles.profileBar__buttons}>
        <CustomButton
          title={name === user ? 'Выйти' : 'Войти'}
          onClick={handleToggleProfile}
          className={styles.profileBar__buttonProfile}
        />
        <CustomButton
          title='О нас'
          onClick={handleRouting}
          className={styles.profileBar__buttonAbout}
          about={true}
        />
      </div>
    </section>
  );
};

export default ProfileBar;
