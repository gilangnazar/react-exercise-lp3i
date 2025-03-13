function Accordion({data}) {
    return(
        <>
        <div className="accordion" id="accordionExample">
            {data.map((item, index) => {
                return(
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="heading">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                            {item.title}
                        </button>
                        </h2>
                        <div id="collapse" className="accordion-collapse collapse show" aria-labelledby="heading" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {item.description}
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Accordion;