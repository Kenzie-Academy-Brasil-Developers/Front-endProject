/* eslint-disable no-const-assign */
import {  createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom"
import { api } from "../services/api";
export const UserContext = createContext({});
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {

    const [user, setUser ] = useState(null);

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const pathname = window.location.pathname;

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@token"));
        const idUser = localStorage.getItem("@USERID");

        const getUser =  async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/client/${idUser}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data);
                navigate(pathname);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        }
        if(idUser && token){
            getUser();
        }
    }, [])

    const logout = () => {
        setUser(null)
        localStorage.removeItem("@token")
        localStorage.removeItem("@USERID")
        navigate("/")
        toast.warning("Deslogando...")
    }

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const response = await api.post("/login", formData);
            const token = response.data.token;
            localStorage.setItem("@token", JSON.stringify(token));
            await getUserInfo();
            reset();
            navigate("/dashboard");
            toast.success( "Bem vindo(a)!")
        } catch (error) {
            if(error.response?.data.message === "Invalid credentials"){
                toast.error("O e-mail e a senha não correspondem.");
            }
        } finally {
            setLoading(false);
        }
    }
    
    const getUserInfo = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("@token"));
            const response = await api.get(`/client`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const user = response.data
            setUser(user);
            localStorage.setItem("@USERID", user.id)
        } catch (error) {
            toast.warning("Ops! parece que algo deu errado.")
        }
    }

    const userRegister = async (formData, setLoading,reset) => {
        try {
            setLoading(true)
            await api.post("/client", formData);
            toast.success("Cadastro realizado com sucesso")
            reset()
            navigate("/");
        } catch (error) {
            if(error.response?.data.message === "Email already exists"){
                toast.warning("Usuário ja cadastrado");
            }
        } finally{
            setLoading(false);
        }
    }

    const deleteUser = async (deleteId) => {
        try {
            const token = JSON.parse(localStorage.getItem("@token"));
            await api.delete(`/client/${deleteId}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            navigate("/")
            toast.success("Conta deletada com sucesso")
        } catch (error) {
            toast.warning("Algo deu errado!");
            console.log(error)
        }
    }
    return(
        <UserContext.Provider value={{user, loading,  logout, setUser, userLogin, userRegister, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}