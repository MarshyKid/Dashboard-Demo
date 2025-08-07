import { useState, useEffect } from "react";
import List from "../components/List";
import '../App.css';
import mockData from "../api/mockData";

const testdata = [
    {"Loaded" : false},
];

function GMSData () {
    const [data, setData] = useState(testdata);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setData(mockData.GMS);
        }, 2000)
    }, []);

    return (
        <div className="NewAccred-list">
            <input
                className="searchBar"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <List data={data} search={search} idx_until={7} reverse={true} firstcol="Printed Date" GMS={true}/>
        </div>
    );
}

export default GMSData;