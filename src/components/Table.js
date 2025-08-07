import '../App.css';
import Card from './card';

const Table = ({header, todaydata, weekdata, totaldata}) => {
    return (
        <Card>
            <span className='Table-header' style={{fontSize: 18, fontWeight: 'normal'}}>{header}</span>
            <hr style={{width: '75%', borderTop: '1px solid #cacaca'}}></hr>
            <table className='Table-actual'>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='Table-row'>
                  <td>Today</td>
                  <td>{todaydata ? todaydata : 0}</td>
                </tr>
                <tr className='Table-row'>
                  <td>Past 7 Days</td>
                  <td>{weekdata ? weekdata : 0}</td>
                </tr>
                <tr className='Table-row'>
                  <td>Total</td>
                  <td>{totaldata ? totaldata : 0}</td>
                </tr>
              </tbody>
            </table>
          </Card>
    )
}

export default Table