
import React from "react";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css"



const ContactList = ({ contacts,OnDeleteContact }) => (
    <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
            return (
                <li key={id} className={styles.itemList}>
                {/* // <ContactListItem */}
                name={name}
                    number={number}
                    id={id}
                    <button onClick={()=>OnDeleteContact(id)}>Delete</button>
                {/* // /> */}
                    </li>
    )
})}
    </ul>
)
export default ContactList;