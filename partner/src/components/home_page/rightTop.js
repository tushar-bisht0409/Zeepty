export default function RightTop({item}) {
    console.log("item",item)
    return (
        <div id="intro">
            <p id='intro_top'>Welcome back, <span>{item.name}</span></p>
            <p>Manage and grow your business with us</p>
        </div>
    )
}