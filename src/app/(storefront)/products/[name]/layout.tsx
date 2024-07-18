import { PriceFilter } from '@/components/Pricefilter'
import Filter from '@/components/filter'
import React from 'react'

const displaylayout = ({children,params}:{children:React.ReactNode,params:{name:string}}) => {
  return (
    <div>
        <div className='mt-5 mb-5 flex items-center justify-between'>
            <Filter params={params} ></Filter>
            <PriceFilter></PriceFilter>
        </div>
      {children}
    </div>
  )
}

export default displaylayout
