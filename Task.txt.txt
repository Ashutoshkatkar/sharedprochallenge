import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Task = () => {

    const [data, setData] = useState([]);
    const [showcard, setshowcard] = useState(false);
    const [carddata, setCarddata] = useState([])
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {

        fdata();
        setshowcard(false)
    }, [])

    const fdata = async () => {

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos ')
            setData(res.data)
            setFilteredData(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log('data is', data)
    const [value, setValue] = useState();
    const sortDescending = () => {

        setFilteredData(filteredData.sort((a, b) => b.id - a.id))

        setValue({});
        //console.log('sorted data', data)
    }

    const sortAscending = () => {

        setFilteredData(filteredData.sort((a, b) => a.id - b.id))

        setValue({});
        // console.log('sorted data', data)
    }


    const showdata = async (id, title) => {
        if (showcard == false) {
            setshowcard(true)
        } else {
            // setshowcard(false)
        }


        // console.log('id is', id, title)

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setCarddata(res.data)
            // console.log('paricular id data is', res.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    // console.log('dataaaaaaaaa', carddata)


    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log('search valiue is', value);
        result = data.filter((data) => {
            return data.title.search(value) != -1;

            //console.log('searching', data.title)
        })
        setFilteredData(result)

    }

    return (
        <div>

            <label>Search:</label>
            <input type="text" onChange={(event) => handleSearch(event)} />

            <div className='row'>
                <div className='col-8'>
                    <table className='table-responsive-sm table-bordered'>
                        <thead>
                            <tr >
                                <th scope='col' >Id
                                    <button className='btn btn-primary mr-2' onClick={sortDescending} >desc</button>
                                    <button className='btn btn-primary' onClick={sortAscending} >Asc</button>
                                </th>
                                <th scope='col'>name</th>
                                <th scope='col'>status</th>
                                <th scope='col'>Action</th>

                            </tr>
                        </thead>

                        {filteredData.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.completed.toString()}</td>
                                    <button class="btn btn-primary" type="submit" onClick={() => showdata(e.id, e.title)} >View User</button>
                                </tr>
                            );
                        })}
                    </table>
                </div>

                {showcard ?
                    (

                        <div>
                            <table className='table-responsive-sm table-bordered'>


                                <tr>
                                    <td>ToDOId</td>
                                    <td>{carddata.id}</td>
                                </tr>
                                {/* <tr>
                                    <td>ToDO title</td>
                                    <td>{carddata[1]}</td>
                                </tr> */}
                                <tr>
                                    <td>user Id</td>
                                    <td>{carddata.id}</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>{carddata.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{carddata.email}</td>

                                </tr>

                            </table>
                        </div>
                    ) : ('')
                }



            </div>
        </div>
    )
}

export default Task
