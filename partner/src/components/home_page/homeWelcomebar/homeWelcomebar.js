import './homeWelcomebar.css'

export default function HomeWelcomebar({item}) {
    console.log("item",item)
    return (
        <div className='hwb'>
            <div className='hwb-left'>
                <p className='hwb-left-text1'>Welcome back, <span className='hwb-left-text1-text'>{item.name}</span></p>
                <p className='hwb-left-text2'>Manage and grow your business with us</p>
            </div>
            
            <div className='hwb-right'>
                <div className='hwb-right-book'>
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <p className='hwb-right-book-text'>Book Training</p>
                </div>
                <div className='hwb-right-help'>
                    <i class="fa-solid fa-comments"></i>
                    <p className='hwb-right-help-text'>Help</p>
                </div>
            </div>
        </div>
    )
}