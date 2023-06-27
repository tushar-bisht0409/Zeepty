import './gstinBox.css'

export default function GstinBox() {
    return (
        <div className='gstinBBox'>

            <p className='gstinBPHead'>Phone Number & Email</p>
            <div className='gstinBPBody'>
                <div className='gstinBPBodyL'>
                <i style={{color: '#554BDA',fontSize: '20px'}} class="fa-solid fa-phone"></i>
                <p className='gstinBPBodyLT1'>8171880493</p>
                </div>
                <div className='gstinBPBodyR'>
                <i style={{color: '#554BDA',fontSize: '20px'}} class="fa-solid fa-envelope"></i>
                <p className='gstinBPBodyLT1'>apple@gmail.com</p>
                </div>
            </div>

            <p className='gstinBGHead'>GSTIN</p>
            <div className='gstinBGBody'>
                <div className='gstinBGBodyL'>
                <input className='gstinBGBodyLInput' type='text' placeholder='Enter Your GSTIN'/>
                <div className='gstinBGBodyLSave'>Save</div>
                {/* <i style={{color: '#554BDA',fontSize: '20px'}} class="fa-solid fa-building"></i>
                <p className='gstinBGBodyLT1'>8171880493</p> */}
                </div>
                <div className='gstinBGBodyR'>
                <i style={{color: '#554BDA',fontSize: '20px'}} class="fa-solid fa-store"></i>
                <p className='gstinBGBodyLT1'>Firm Name</p>
                </div>
            </div>

            <div className='gstinBAHead'>
                <p className='gstinBAHeadT1'>Pickup Address</p>
                <i style={{color: '#554BDA',fontSize: '20px'}} class="fa-solid fa-edit"></i>
            </div>
            <div className='gstinBABody'>
                <p className='gstinBABodyT1'>Your Name</p>
                <p className='gstinBABodyT1'>Address Line, Street Line, Apartment Name,Plot</p>
                <p className='gstinBABodyT1'>Dehradun, Uttarakhand</p>
                <p className='gstinBABodyT2'>123456</p>
            </div>

        </div>
    )
}