import UseFetch from "../userFetch/Fetchs";
const Letter=({studens:{_id, email, first_name, last_name}})=>{
    return(
        <div className="hay">
            <h1>{first_name} {last_name}</h1>
            <p>{_id}</p>
            <p>{email}</p>
        </div>
    )
}
const SinhVien=(props)=>{
    const url='http://localhost:4000/hello'
    const data=UseFetch(url)
    return(
        <div className="sinhvien">
            <h1>Số sinh viên lấy đc là{data.length}</h1>
            {
                data.map((studens)=>(
                    <Letter key={studens._id} studens={studens}/>
                ))
            }
        </div>
    )
}
export default SinhVien