import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { IoCheckmark } from 'react-icons/io5'

const Restock = () => {
  return (
    <>
        <Typography>Options</Typography>
        <div className="row align-items-center">
            <div className="col-9">
                <TextField 
                    label= "add to stock"
                    placeholder='100'
                    className='w-100 my-2'
                    size='small'
                />
            </div>
            <div className="col-3">
                <Button className='bg-purple text-white'>
                    <IoCheckmark />
                    Confirm
                </Button>
            </div>
        </div>
        <Typography className='my-2'>
            Product in stock now: 54
        </Typography>
        <Typography className='my-2'>
            Product in transit now: 380
        </Typography>
        <Typography className='my-2'>
            Last time restocked: 2022
        </Typography>
        <Typography className='my-2'>
            Total stock over lifetime : 2430
        </Typography>

    </>
  )
}

export default Restock