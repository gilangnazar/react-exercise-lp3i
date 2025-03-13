function Dropdown({ data}) {
    return(
        <>
            <label htmlFor="jurusan">Pilih Jurusan: </label>
            <select name="jurusan" id="jurusan">
                <option value="">--Jurusan--</option>
                {data.map((item, index) => {
                    return(
                        <option key={index} value={item.jurusan}>{item.jurusan}</option>
                    )
                })}
            </select>
        </>
    )
}

export default Dropdown;