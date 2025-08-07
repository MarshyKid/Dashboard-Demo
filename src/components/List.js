import { useEffect, useMemo, useState } from 'react';
import './List.css';
import Card from './card';
import mockData from '../api/mockData';

const List = ({data, search, idx_until=null, reverse=false, firstcol = 'Timestamp', GMS=false}) => {
    const headers = Object.keys(data[0] || {});
    let shownHeaders = headers.slice(0, idx_until);
    if (!idx_until) {
        shownHeaders = headers;
    }
    const [sortAsc, setSortAsc] = useState(reverse);
    const [selectedRow, setSelectedRow] = useState(false);
    const [category, setCategory] = useState("");
    const [badgeNumber, setBadgeNumber] = useState("");
    const [badgeValid, setBadgeValid] = useState(false);
    const [uploadDone, setUploadDone] = useState(null);
    const [eligibility, setEligibility] = useState(null);
    useEffect(() => {
        setEligibility(mockData.eligibleItems);
    }, []);
    const handleRowClick = (item) => {
        setSelectedRow(item);
        if (GMS) {
            setBadgeNumber(item['Badge ID']);
            setBadgeValid(true);
        }
    };
    const handleCloseCard = () => {
        setSelectedRow(null);
        setCategory('');
        handleBadge('');
        setUploadDone(null);
    };
    const handleBadge = (badge) => {
        setBadgeNumber(badge);
        if (badge.length === 6) {
            setBadgeValid(true);
        } else {
            setBadgeValid(false);
        }
    }
    const filteredData = useMemo(() => {
        return data.filter(item => 
            Object.values(item).some(value => 
                String(value).toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    const finalData = useMemo(() => {
        return sortAsc ? filteredData : [...filteredData].reverse();
    }, [filteredData, sortAsc]);
    
    if (Object.keys(data[0] || {}).slice(0)[0] === "Loaded") return (
        <div className='list-container'>
            <div className='loading'>
                <div className='spinner'></div>
            </div>
            <table className='list'>
                <thead>
                    <tr>
                        <th className='skeleton-header'></th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(10)].map(() => (
                        <tr>
                            <td className='skeleton-box'></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className='list-container'>
            <p className='results'>{filteredData.length} results (Mock Data generated using ChatGPT)</p>
            <table className="list">
                <thead>
                    <tr className='list-header-row'>
                        {shownHeaders.map((header, idx) => (
                            <th className={`list-header ${idx < 3 ? '' : 'hide'}`} key={header}>
                                {header === firstcol ? (
                                    <>
                                    {header}
                                    <button
                                        onClick={() => setSortAsc(prev => !prev)}
                                        className='button-arrow'
                                    >{sortAsc ? '↑' : '↓'}</button>
                                    </>
                                ) : (header)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='list-body'>
                    {finalData.map((row, idx2) => (
                        <tr key={idx2} className='list-row' onClick={() => handleRowClick(row)}>
                            {shownHeaders.map((header, idx2) => (
                                <td className={`list-rowtd ${idx2 < 3 ? '' : 'hide'}`} key={idx2}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedRow && (
                <div className='selected-container'>
                    <div className='selected-card'>
                        <Card>
                            <div className='card-inner-container'>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}><button className='card-closeButton' onClick={() => handleCloseCard()}>X</button></div>
                                <div className='card-content'>
                                    <div className='card-info-container'>
                                        {headers.map((header, id) => (
                                            <div>
                                                <div>{header}</div>
                                                <div className='card-info'>{header === 'Photo' ? <a href={selectedRow[header]} target="_blank">{selectedRow[header]}</a> : selectedRow[header]}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='card-eligibility'>
                                        <select defaultValue="" onChange={(e) => setCategory(e.target.value)}>
                                            <option value="" disabled>Select Category</option>
                                            {eligibility &&
                                                Object.keys(eligibility).map(idx => (
                                                    <option value={eligibility[idx]['category']}>{eligibility[idx]['category']}</option>
                                                ))
                                            }
                                        </select>
                                        <p>{category &&
                                            <div className='card-eligible-items'>
                                                <div>Entitlement</div>
                                                <div className='card-eligible-items-container'>
                                                    {Object.keys(eligibility).map(id => (eligibility[id]['category'] === category ?
                                                        Object.keys(eligibility[id]).map(item => (
                                                            <div className='card-eligible-item'>
                                                                <div>{item}:</div>
                                                                <div>{eligibility[id][item]}</div>
                                                            </div>
                                                        )) : null
                                                    ))}
                                                </div>
                                                {!GMS && <input value={badgeNumber} onChange={(e) =>  handleBadge(e.target.value)} style={{borderRadius: 5, outline: 'None', border: '1px solid black', padding: 5}}/>}
                                                {!badgeValid && <div style={{color: 'red', fontSize: 12}}>Please input valid Badge No.!</div>}
                                                {badgeValid && <button onClick={() => {
                                                    console.log("syncing...");
                                                    setUploadDone(true);
                                                }}>sync</button>}
                                                {uploadDone === true && <div>Upload Successful</div>}
                                                {uploadDone === false && <div>Upload Failed!</div>}
                                            </div>
                                        }</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}

export default List;