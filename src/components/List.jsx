const List = ({name}) => {
    return(
        <>
            <ul>
                {name && names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>          
        </>
    )
}

export default List;
