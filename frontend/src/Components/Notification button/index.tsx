import img from  '../../assets/img/notification-icon.svg';

import './Styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={img} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;