import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({});
// eslint-disable-next-line react/prop-types
export const ContactProvider = ({children}) => {
    const [contactList, setContactList] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@token"));
        const getContact = async () => {
            try {
                const {data} = await api.get("/contact", {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setContactList(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getContact();
    }, []);

    const CreateContact = async (formData) => {
        try {
            const token = JSON.parse(localStorage.getItem("@token"));
            const {data} = await api.post("/contact", formData, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setContactList([...contactList, data]);
            console.log(data)
            navigate("/Dashboard")
            toast.success("Contato criado com sucesso")
        } catch (error) {
            console.log(error)
            toast.warning("Algo deu errado, tente novamente mais tarde.")
        }
    }

    const deleteContact = async (deleteId) => {
        try {
            const token = JSON.parse(localStorage.getItem("@token"));
            await api.delete(`/contact/${deleteId}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const newContactList = contactList.filter(contact => contact.id !== deleteId);
            setContactList(newContactList)
            toast.success("Contato deletado com sucesso")
        } catch (error) {
            console.log(error)
        }
    }

    const editContact = async (formData) => {
        try {
            const token = JSON.parse(localStorage.getItem("@token"));
        // eslint-disable-next-line no-undef
        const { data } = await api.patch(`/contact/${editingContact.id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const newContactList = contactList.map(contact => {
            if(contact.id === editingContact.id){
                return data;
            } else {
                return contact;
            }
        })

        setContactList(newContactList);
        setEditingContact(null);
        toast.success("Contato editado com sucesso")
        navigate("/Dashboard")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ContactContext.Provider value={{contactList, CreateContact, deleteContact, editContact,editingContact, setEditingContact}}>
            {children}
        </ContactContext.Provider>
    )
}

