import './uploadMoreListingBox.css'

export default function UploadMoreListingBox() {

    const youtubeWidth = window.innerWidth * 0.25;
    const youtubeHeight = window.innerHeight * 0.30
    return (
        <div className='umlb'>
            <div className='umlb-head'>
                <div className='umlb-head-left'>
                    <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-box"></i>
                    <p className='umlb-head-left-text'>To get your first order quickly, upload more catalogs. We recommend uploading 6-7 catalogs.</p>
                </div>
                <div className='umlb-head-right'>
                    <div onClick={()=>{window.open('/supplier/vertical','_self')}} className='umlb-head-right-upload'>Upload More Listing</div>
                </div>
            </div>

            <div className='umlb-body'>
                <p className='umlb-body-text'>More listings helps in</p>
                <div className='umlb-body-iconBox'>
                    <i class="fa-solid fa-chevron-right"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <p className='umlb-body-text'>Higher visibility</p>
                <div className='umlb-body-iconBox'>
                    <i class="fa-solid fa-chevron-right"></i>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <p className='umlb-body-text'>Getting More Orders</p>
            </div>
        </div>
    )
}