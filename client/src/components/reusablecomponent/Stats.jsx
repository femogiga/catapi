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

    const barBlue = <div style={barBlueStyle}></div>;
    const bar = <div style={barStyle}></div>;
    const arr = new Array(5);
    arr.fill(bar);

    return (
        <div className='stat flex gap1 align-center'>
            <p style={{ marginRight: '0rem', width: '30%',fontWeight:'bold' }}>{statTitle}</p>
            <div style={{ width: '100%', display: 'flex', gap: '1rem' }}>
                {/* <div style={barStyle}></div> */}
                {arr.map((item, index) => (index < stat ? bar : barBlue))}
            </div>
        </div>
    );
};

export default Stats;
