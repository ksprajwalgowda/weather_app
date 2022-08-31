import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Card.css';
export const Card = () => {
    const [loc, setLoc] = useState('')
    const [name, setName] = useState('')
    const [condi, setCondi] = useState('')
    const [temp, setTemp] = useState('')
    const [time, setTime] = useState('')

    const api_url = `https://api.weatherapi.com/v1/current.json`;
    const api_key = `38c635af908e41379e7175841223108`
    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = { params: { key: api_key, q: loc } }
        console.log(loc);
        axios.get(api_url, obj).then((response) => {
            console.log(response.data.location.name);
            // setData(response.data)
            setName(response.data.location.name)
            setTime(response.data.location.localtime)

            setCondi(response.data.current.condition.text)
            setTemp(response.data.current.temp_c)

        })
        setLoc('');
    }


    return (
        <>

            <div className="container text-white ">
                <div className='text-center mt-5'>                <h1 className=''>Weather App</h1>
                </div>
                <div className="card custom-card">
                    <div className="row">
                        <div className="col col-md-6 col-lg-6 col-12 col-sm-6 bor">

                            <div className="row">
                                <form onSubmit={handlesubmit}>
                                    <div class="mb-3 px-4 pt-4">
                                        <label for="exampleInputEmail1" class="form-label">Enter the location</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" value={loc} onChange={(e) => { setLoc(e.target.value) }} />
                                    </div>
                                    <button type="submit" class="btn btn-primary mx-4">Submit</button>
                                </form>
                            </div>
                            <div className="row m-5">
                                <h5>Location: {name}</h5>
                                <h5>Time: {time}</h5>
                                <h5>condition: {condi}</h5>
                                <h5>Tempture: {temp} °C</h5>

                            </div>


                        </div>
                        <div className="col col-md-6 col-lg-6 col-12 col-sm-6">
                            <img className='imgg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oQk6R-exWbOCIA22JsM5Kqoqry3GCryVxw&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
