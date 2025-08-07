import createTemplate from "../functions/createTemplate";
import disburseTemplate from "../functions/disburseTemplate";
import downloadCSV from "../functions/downloadCSV";
import handleFileUpload from "../functions/handleFileUpload";
import reserveTemplate from "../functions/reserveTemplate";
import './SizingTemplate.css';
import { useState, useRef, useEffect } from "react";
import mockData from "../api/mockData";


function SizingTemplate() {
    const [csvData, setCsvData] = useState(null);
    const [uniqueItems, setUniqeItems] = useState(null);
    const [eligibleItems, setEligibleItems] = useState(null);
    const [tab, setTab] = useState('0');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jsonData2, setjsonData2] = useState(null);
    const fileInputRef = useRef(null);

    function handleCategoryDropdown(category) {
        if (category === selectedCategory) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    }

    useEffect(() => {
        setUniqeItems(mockData.items);
        setEligibleItems(mockData.eligibleItems);
    }, [])

    return (
        <div className='overallTemplateContainer' style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
            <div style={{width: '100%', paddingLeft: '50px', paddingTop: '20px'}}>
                <select defaultValue='0' onChange={(e) => {setTab(e.target.value); setSelectedCategory(null); setCsvData(null);}}>
                    <option value='0'>Transform Data</option>
                    <option value="1">Items</option>
                    <option value="2">Categories</option>
                    <option value="3">Get Template</option>
                </select>
            </div>
            {tab === '0' && <div className="template-container"><div className="headerFormatting">
                <div>Follow this table format:</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Badge ID</th>
                            <th>Name</th>
                            <th>Item 1</th>
                            <th>Qty</th>
                            <th>Item 2</th>
                            <th>Qty</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>000001</td>
                            <td>Person A</td>
                            <td>XL</td>
                            <td>2</td>
                            <td>L</td>
                            <td>3</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>000002</td>
                            <td>Person B</td>
                            <td>S</td>
                            <td>1</td>
                            <td>M</td>
                            <td>2</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="dropbox"
                onDrop={(e) => {
                    e.preventDefault();
                    handleFileUpload(e.dataTransfer.files[0], [setCsvData]);
                }}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current.click()}
            >drop here or upload</div>
            <input style={{display: 'none'}} ref={fileInputRef} type="file" accept=".csv" onChange={(e) => handleFileUpload(e.target.files[0], [setCsvData])} />
            {csvData &&
                <div className="button-div">
                    <button onClick={() => downloadCSV(csvData, createTemplate, "bulk-upload-recipient.csv")}>Create Recipient Template</button>
                    <button onClick={() => downloadCSV(csvData, disburseTemplate, "bulk-disbursement.csv")}>Disburse Template</button>
                    <button onClick={() => downloadCSV(csvData, reserveTemplate, "bulk-reserve.csv")}>Reserve Template</button>
                </div>
            }
           </div>}
           {tab === '1' && 
                <div className='items'>{uniqueItems && Object.keys(uniqueItems).map(key => (
                    <div>{uniqueItems[key]['name']}</div>
                ))}</div>
            }
            {tab === '2' && 
                <div className="categories-container">
                    {eligibleItems && Object.keys(eligibleItems).map(key => (
                        <div className='eligible-category-container'>
                            <div className="eligible-category" onClick={() => handleCategoryDropdown(eligibleItems[key]['category'])}>
                                {eligibleItems[key]['category']}
                            </div>
                            <div className={`eligible-item-names-container ${eligibleItems[key]['category'] === selectedCategory ? 'open' : ''}`}>
                                {Object.keys(eligibleItems[key]).map(header => header !== 'category' ? (
                                    <div className="eligible-item-names">{selectedCategory === eligibleItems[key]['category'] &&
                                        <><div>{header}</div>
                                        <div>{eligibleItems[key][header]}</div></>}
                                    </div>
                                ) : null)}
                            </div>
                        </div>
                    ))}
                </div>
            }
            {tab === '3' &&
                <div className='getTemplate-container'>
                    <div className="headerFormatting">
                        <div>Follow this table format:</div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Badge ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>000001</td>
                                    <td>Person A</td>
                                </tr>
                                <tr>
                                    <td>000002</td>
                                    <td>Person B</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="dropbox"
                        onDrop={(e) => {
                            e.preventDefault();
                            handleFileUpload(e.dataTransfer.files[0], [setjsonData2, setCsvData]);
                            setSelectedCategory(null);
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onClick={() => fileInputRef.current.click()}
                    >drop here or upload</div>
                    <input style={{display: 'none'}} ref={fileInputRef} type="file" accept=".csv" onChange={(e) => {
                        handleFileUpload(e.target.files[0], [setjsonData2, setCsvData]);
                        setSelectedCategory(null);
                        }} />
                    {jsonData2 && csvData &&
                        <div style={{display:'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center', gap:'10px'}}>
                            <select defaultValue='' onChange={(e) => {
                                    const cat = e.target.value;
                                    setSelectedCategory(cat);
                                    const newjson = [];
                                    Object.keys(jsonData2).map(id => {
                                        const row = jsonData2[id];
                                        const newObj = {};
                                        Object.keys(row).map(header => {
                                            newObj[header] = row[header];
                                        })
                                        Object.keys(eligibleItems).map(idx => {
                                            if (eligibleItems[idx]['category'] === cat) {
                                                Object.keys(eligibleItems[idx]).map((header, id) => {
                                                    if (header !== 'category') {
                                                        newObj[header] = '-';
                                                        newObj[`qty ${id}`] = eligibleItems[idx][header]
                                                    }
                                                })
                                            }
                                        });
                                        newjson.push(newObj);
                                    });
                                    console.log(newjson);
                                    setCsvData(newjson);
                                }}>
                                <option value='' disabled>Choose Category</option>
                                {Object.keys(eligibleItems).map(header => {
                                    const cat = eligibleItems[header]['category'];
                                    return (<option value={cat}>{cat}</option>);
                                })}
                            </select>
                            {csvData &&
                                <div className="button-div">
                                    <button onClick={() => downloadCSV(csvData, createTemplate, "bulk-upload-recipient.csv")}>Create Recipient Template</button>
                                    <button onClick={() => downloadCSV(csvData, disburseTemplate, "bulk-disbursement.csv")}>Disburse Template</button>
                                    <button onClick={() => downloadCSV(csvData, reserveTemplate, "bulk-reserve.csv")}>Reserve Template</button>
                                </div>
                            }
                            <table className="preview-table">
                                <thead>
                                    <tr>
                                        {Object.keys(csvData[0]).map(header => (
                                            <th>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(csvData).map(key => (
                                        <tr>
                                            {Object.keys(csvData[key]).map(header => (
                                                <td>{csvData[key][header]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                        </div>
                    }
        </div>
    )
}

export default SizingTemplate;