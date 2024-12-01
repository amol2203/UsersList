import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUserById } from '../Store/UserSlice'

const UserDetail = () => {
  const { id } = useParams()
const dispatch = useDispatch();
const{ userDetails,status }= useSelector((state)=> state.userReducer);

console.log("userDetail",userDetails)

  useEffect(() => {
   
dispatch(fetchUserById(id));
  }, [dispatch, id])

  console.log("Details", userDetails);
  return (
    <div className="w-100">
      <p className='text-5xl capitalize font-bold mt-5'>userDetals</p>
      {status === 'loading' ? 
      (
        <>
        <p className="text-xl font-bold mt-[100px]">Loading...</p>
        </>
      ):
      (
        <>
      { userDetails &&(
      <div className="border-4 current mt-5 bg-cyan-700 max-sm:p-[20px] sm:p-[30px] lg:p-[80px]">
        <div className='border-2 p-5 rounded-[12px]'>


          <div className='mb-5'>
            <p className='max-sm:text-2xl font-bold sm:text-3xl font-bold'>{userDetails?.name}</p>
          </div>


          <div className='grid md:grid-cols-1 lg:grid-cols-3'>
            <div>

              <p><strong>Email:</strong> {userDetails?.email}</p>
            </div>
            <div>
              <p><strong>Phone:</strong> {userDetails?.phone}</p>
            </div>
            <div>

              <p><strong>Company:</strong> {userDetails?.company?.name}</p>
            </div>
          </div>
        </div>
        <p className='mt-5 mb-5'><strong>Company Details:</strong></p>
        <div className='grid grid-cols-1'>
          <div>
            <p><strong>bs:</strong> {userDetails?.company?.bs}</p>
          </div>
          <div>
            <p><strong>catchPhrase:</strong> {userDetails?.company?.catchPhrase}</p>
          </div>
        </div>

        <p className='mt-5 mb-5'><strong>Company Address:</strong></p>
        <div className='grid max-sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>
          <div >
            <p><strong>City:</strong> {userDetails?.address?.city}</p>
          </div>
          <div>
            <p><strong>Street:</strong> {userDetails?.address?.street}</p>
          </div>
          <div>
            <p><strong>Suite:</strong> {userDetails?.address?.suite}</p>
          </div>
          <div>
            <p><strong>zipcode:</strong> {userDetails?.address?.zipcode}</p>
          </div>
        </div>

      </div>
     )} </>
    ) }

    </div>
  )
}

export default UserDetail