import React from 'react'

const EmptyBody = ({message}) => {
  return (
    <tr>
        <td className=' p-[28px] dot-line-buttom text-center font-semibold text-[24px] bg-light_gray_2'>
            <i className="fa fa-info-circle text-[40px] mb-[16px]"></i>
            <p>{message}</p>
        </td>
    </tr>
  )
}

export default EmptyBody