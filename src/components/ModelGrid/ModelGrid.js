import './ModelGrid.css'

function ModelGrid(props) {

    const model = props.model;

    function getList(models) {
        return (
            <>
                {models.map((model, index) =>
                (<tr key={index} className="section-models__row">
                    {
                        <>
                            <td className='section-models__cell'>{model.productivity}</td>
                            <td className='section-models__cell'>{model.lamps}</td>
                        </>
                    }
                </tr>)
                )}
            </>
        )
    }

    return (
        <table className="section-models__table" >
            <thead>
                <tr className='section-models__table-title'>
                    <th colSpan="2" className='section-models__cell'>
                        {model.title}
                    </th>
                </tr>

            </thead>
            <tbody>
                <tr className='section-models__table-subtitle'>
                    <td colSpan="2" className='section-models__cell'>
                        {model.control}
                    </td>
                </tr>
                {getList(model.models)}
            </tbody>
        </table>
    )
}

export default ModelGrid;