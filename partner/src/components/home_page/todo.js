import arrow from '../../images/arrow.png'

export default function Todo({pendingorder , outofstock,lowstock }) {
    return (
        <div id="todo">
            <h2>To do list</h2>
            <div id="list_box">
                <div id="list">
                    <span>Pending Orders</span>
                    <img src={arrow} alt="" />
                    <p>{pendingorder}</p>
                </div>
                <div id="list">
                    <span>Out of Stock</span>
                    <img src={arrow} alt="" />
                    <p>{outofstock}</p>
                </div>
                <div id="list">
                    <span>Low Stock</span>
                    <img src={arrow} alt="" />
                    <p>{lowstock}</p>
                </div>
            </div>
        </div>
    )
}