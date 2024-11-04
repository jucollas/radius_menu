import styles from './style.module.css'
import { useState } from 'react';
import { HomeIcon, Cog8ToothIcon, HeartIcon } from '@heroicons/react/24/outline';

const items = [ 
  { Icon : HomeIcon }, 
  { Icon : HeartIcon },
  { Icon : HeartIcon },
  { Icon : HeartIcon },
  { Icon : HeartIcon },
  { Icon : HeartIcon },
  { Icon : HeartIcon },
  { Icon : HeartIcon } 

]

function RadialMenu() {
  const [isActive, setIsActive ] = useState(false)

  const active = () =>{
    setIsActive(!isActive)
  }

  return (
    <div className={styles.menu}>
      <div className={`${styles.center} ${isActive ? styles.center_active : ""}`} onClick={active}>
        <Cog8ToothIcon width="100%" height="100%"/>
      </div>

      {items.map((item, index) => {
        const Icon = item.Icon
        return(
          <div style={{"--i" : index.toString() } as any} key={index} className={`${styles.menu_item} ${isActive ? styles.menu_item_active : ""}`}>
            <div>
              <Icon width="100%" height="100%" ></Icon>
            </div>
          </div>
      )}
      )}

    </div>
  );
}

export default RadialMenu;
