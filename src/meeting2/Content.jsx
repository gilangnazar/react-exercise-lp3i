function Content({data}) {
    const tampilan = {
    backgroundColor: "grey",
        padding: '10px',
        borderRadius: '10px',
        color: 'black',
        margin: '10px 0'
    }

    return(
        <>
        {data.map((item, index) => {
            return(
                <div style={tampilan} key={index}>
                    Nama Lengkap : {item.nama} <br />
                    Jurusan : {item.jurusan}
                </div>
            )
        })}
        </>
    )
}

export default Content;