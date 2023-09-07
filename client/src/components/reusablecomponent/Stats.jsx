const Stats = ({ statTitle, stat }) => {
    statTitle = statTitle || 'Child friendly';
    const barStyle = {
        width: '3.75rem',
        height: '.75rem',
        backgroundColor: '#544439',
        borderRadius: '8px',
    };

    const barBlueStyle = {
        width: '3.75rem',
        height: '.75rem',
        backgroundColor: '#E0E0E0',
        borderRadius: '8px',
    };

    // const barBlue = <div style={barBlueStyle}></div>;
    const bar = <div style={barStyle}></div>;
    const arr = new Array(5);
    arr.fill(bar);

    return (
        <div className='stat flex cg-1 align-center flow-1 flex-wrap'>
            <p style={{ marginRight: '.4rem', width: '25%', fontWeight: 'bold' }}>{statTitle}</p>
            <div style={{ width: '70%', display: 'flex', gap: '1rem' }}>
                {/* <div style={barStyle}></div> */}
                {/* {arr.map((item, index) => (index < stat ? bar : barBlue))} */}
                {arr.map((item, index) => (index < stat ? <div key={index} style={barStyle}></div> : <div key={index} style={barBlueStyle}></div>))}
            </div>
        </div>
    );
};

export default Stats;
