import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Input from './Input';
import User from './User';



const UserComponent = () => {

    const [apiData, setApiData] = useState([]);
    const [inputText, setInputText] = useState('')
    const [filterData, setfilterData] = useState([])

    


    const users = useSelector((state) => state.users.usersList)


    useEffect(() => {
        
        const setUsers = () => {
            setApiData(users)
        }

        return setUsers();
        
    }, [users])



    const searchFilter = (text) => {
        setInputText(text)

        if (inputText !== '') {
            const filterUserData = apiData.filter((val) => {
                return Object.values(val).join().toLowerCase().includes(inputText.toLowerCase());
            })

            setfilterData(filterUserData);
        }else{
            setfilterData(apiData)
        }

    }




    return ( 

        <>
            <div className="input">
                <Input inputText={inputText} searchFilter={searchFilter}  />
            </div>

            <div className="user__box">
                { 
                    inputText.length > 1 ? (
                        filterData.map((val) => (
                            <User val={val} />
                        ))
                    ) : (
                        users.map((val) => (
                            <User val={val} />
                        ))
                    )
                }
            </div>
        </>

    );
}

export default UserComponent;
