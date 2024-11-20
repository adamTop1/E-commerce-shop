import AddProductForm from '@/components/Main/admin/AddProductForm'
import React from 'react'

const page = () => {
	return <div className='flex flex-col items-center justify-center mt-14 '>
        <h3 className='my-5 text-xl text-green-600'>Add product</h3>
        <AddProductForm />
    </div>
}

export default page
