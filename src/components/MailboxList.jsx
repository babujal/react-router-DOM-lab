import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailbox List</h2>
            <div className='mail-box'>
            <ul>
                {props.mailbox.map((el) => (
                    <li key={el._id}>
                        <Link to={`/mailboxes/${el._id}`} >{el.boxholder} {el._id}</Link>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
};

export default MailboxList;