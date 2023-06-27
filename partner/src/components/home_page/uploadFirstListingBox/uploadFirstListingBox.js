import './uploadFirstListingBox.css'

export default function UploadFirstListingBox() {

    const youtubeWidth = window.innerWidth * 0.20;
    const youtubeHeight = window.innerHeight * 0.25
    return (
        <div className='uflb'>
            <div className='uflb-head'>
                <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-bookmark"></i>
                <p className='uflb-head-text'>Upload Your First Listing</p>
            </div>
            <div className='uflb-body'>
                <iframe width={youtubeWidth} height={youtubeHeight} src="https://www.youtube.com/embed/obppCkYGqI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='uflb-body-right'>
                <div className='uflb-body-right-line'>
                    <div className='uflb-body-right-line-circle'>1</div>
                    <p className='uflb-body-right-line-text'>Select Listing Category</p>
                </div>
                <div className='uflb-body-right-line'>
                <div className='uflb-body-right-line-circle'>2</div>
                    <p className='uflb-body-right-line-text'>Upload Listing Photos</p>
                </div>
                <div className='uflb-body-right-line'>
                <div className='uflb-body-right-line-circle'>3</div>
                    <p className='uflb-body-right-line-text'>Provide Listing Information</p>
                </div>

                <div onClick={()=>{window.open('/supplier/vertical','_self')}} className='uflb-body-right-add'>Add Listing Now</div>
            </div>
            </div>
        </div>
    )
}