import { Radio, Typography } from '@mui/material'
import React from 'react'

const Shipping = () => {
    return (
        <>
            <Typography className="text-secondary">ShippingType</Typography>
            <div className="d-flex">
                <Radio />
                <div className="d-flex flex-column">
                    <Typography>Fullfilled by seller</Typography>
                    <Typography className="text-sm text-secondary">
                        You'11 be responsible for product delivery. Any damage or delay
                        during shipping may cost you a Damage fee
                    </Typography>
                </div>
            </div>
            <div className="d-flex">
                <Radio />
                <div className="d-flex my-3 flex-column">
                    <Typography>Fulfilled by Company namer</Typography>
                    <Typography className="text-sm text-secondary">
                        You'11 be responsible for product delivery. Any damage or delay
                        during shipping may cost you a Damage fee
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default Shipping