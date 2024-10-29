import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {


    console.log('Props on detail:', props.mailbox)
    const singleMailbox = props.mailbox.find(el => {
        console.log(el)
        return el._id.toString() === (useParams().id)
    })

    console.log('MailBox on details', singleMailbox)


    return (
        <>
            <div className='show-box'>
                <h4>Mailbox holder: {singleMailbox.boxholder}</h4>
                <dl>
                    <dt>Size:</dt>
                    <dd>{singleMailbox.boxSize}</dd>
                </dl>
            </div>
        </>
    )
}

export default MailboxDetails;