import React from 'react'; 
import icons from  'fht-components/icons.svg';
import { Icon } from 'fht-components/Icon/Icon';
import './IconList.scss';

const IconList = () => {
    const iconList = icons.node.children;
    return (
        <ul>
        {
            Object.keys(iconList).map(item => {
                const iconName = iconList[item].id.slice(6);
                return (
                    <li key={iconName} className='icon-list-items'>
                        <Icon icon={ iconName } />
                        <span className='icon-list-name'>{iconName}</span>
                    </li>
                )
            })
        }
        
    </ul>
      );
}
export default IconList;
