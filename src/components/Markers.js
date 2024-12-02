import { UserLocationContext } from '@/context/UserLocationContext'
import { MarkerF, OverlayView } from '@react-google-maps/api'
import React, { useContext } from 'react'

function Markers({business}) {
    // const {selectedBusiness,setSelectedBusiness}=useContext(SelectedBusinessContext)
    const {userLocation,setUserLocation}=React.useContext(UserLocationContext)
    const lat = userLocation.locations.lat[0]
    const lng = userLocation.locations.lng[0]
    const coordinate = { lat, lng }
  return (
    <div>
        <MarkerF
                position={coordinate}
                icon={{
                  url:'/circle.png',
                  scaledSize:{
                    width:10,
                    height:10
                  }
                }}
                
        >
         {/* {selectedBusiness.reference==business.reference?   
         <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
            <div className='ml-[-90px] mt-[-230px]'>
                <BusinessItem business={business} showDir={true} />
            </div>
            </OverlayView>:null} */}
            </MarkerF>
    </div>
  )
}

export default Markers