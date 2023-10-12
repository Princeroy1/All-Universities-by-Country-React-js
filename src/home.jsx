import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { countries } from 'country-data-list';

const Home = () => {
    const [name, setName] = useState('');
    const [maindata, setMaindata] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://universities.hipolabs.com/search?country=${name}`);
                setMaindata(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        setCountry(countries.all);
    }, [name]);

    const define = (e) => {
        const d = e.target.value;
        setName(d);
    };

    return (
        <>
            <div className="container py-5">
                <header className="text-center text-white">
                    <h1 className="display-4">Search Universities by Country</h1>
                </header>
                <div className="row py-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="mb-3">
                            <select className="form-select"
                                onChange={define}
                                value={name}>
                                <option value="">Select a country</option>
                                {country.map((val, index) => (
                                    <option key={index} value={val.name}>{val.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="card rounded shadow border-0">
                            <div className="card-body p-5 bg-white rounded">
                                <div className="table-responsive">
                                    <table id="example"
                                        className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>University Name</th>
                                                <th>Domains</th>
                                                <th>Country</th>
                                                <th>Web Pages</th>
                                                <th>State / Province</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {maindata.map((val, index) => (
                                                <tr key={index}>
                                                    <td>{val.name}</td>
                                                    <td>{val.domains}</td>
                                                    <td>{val.country}</td>
                                                    <td>{val.web_pages}</td>
                                                    <td>{val['state-province']}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
