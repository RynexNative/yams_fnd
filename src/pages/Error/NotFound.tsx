import FuzzyText from '@/components/FuzzyText';

import React from 'react'

function NotFound() {
    const enableHover = true;
    const hoverIntensity = 1;
    return (
        <div style={{backgroundColor: 'rgba(1, 4, 53, 1)', display:'flex', justifyContent:'center',alignItems:'center', height:'100vh'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', width:'100vw', textAlign:'center'}}>
                <div>

            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
            >
                404 
                
            </FuzzyText>
                </div>

            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
            >
                page not found 
                
            </FuzzyText>

            </div>
        </div>
    )
}

export default NotFound

