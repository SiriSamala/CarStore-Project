import React, { useEffect, useState } from 'react'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'
import { Loader2 } from 'lucide-react'
import { getUsedCarsCount, getUsersCount } from '../../api/api'
// import { toast } from 'sonner'

const AdminDashboard = (req,res) => {
  const [users, setUsers] = useState(0)
  const [newcars, setNewCars] = useState(0)
  const [usedcars, setUsedCars] = useState(0)
  // const [orders, setOrders] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount()
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count)
      }
      // const newcarsresponse = await getNewCarsCount()
      // if (newcarsresponse.status === 200) {
      //   setNewCars(productresponse.data.count)
      // }
      const usedcarsresponse = await getUsedCarsCount()
      if (usedcarsresponse.status === 200) {
        setUsedCars(productresponse.data.count)
      }
      // const orderresponse = await getOrdersCount()
      // if (orderresponse.status === 200) {
      //   setOrders(orderresponse.data.count)
      // }
    } catch (error) {
      // toast.error(error)
      return res.status(500).json({ message: error.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  return (
    // <div>AdminDashboard</div>
    <div className='w-full min-h-[80vh] flex justify-start items-start'>
      <AdminDashboardHomeCards newcars={newcars} usedcars={usedcars} users={users} 
      // orders={orders} 
      />
    </div>
  )
}

export default AdminDashboard