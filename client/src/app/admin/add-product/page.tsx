import AddProductForm from '@/components/Main/admin/AddProductForm'
import React from 'react'

const page = () => {
	return <div className='flex flex-col items-center justify-center'>
        <h3 className='my-10 text-4xl font-bold text-green-600'>Add product</h3>
        <AddProductForm />
       
    </div>
}

export default page
