// Allows users to enter details for and submit new mailboxes.
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const MailboxForm = (props) => {
    const [formData, setFormData] = useState({
        boxSize: '',
        boxholder: '',
    })
    const navigate = useNavigate();

    // console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setMailbox([
            ...props.mailbox, 
            {
                _id: props.mailbox.length + 1,
                ...formData
            }
        ]);
        navigate('/mailboxes')
    }

    const handleChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Box Holder:</label>
                <input
                    type='text'
                    id='boxholder:'
                    name='boxholder'
                    value={formData.boxholder}
                    onChange={handleChange}
                />

                <label htmlFor="boxSize">Box Size:</label>
                <input
                    type='text'
                    id='boxSize'
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;