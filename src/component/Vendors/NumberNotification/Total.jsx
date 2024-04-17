import React, { useState } from 'react'

import {useEffect} from 'react';
import {notificationSer} from '../../../api/api';

const Total = () => {
    const [totalNoti, setTotalNoti] = useState(0)
    useEffect(() => {
        notificationSer.getTotalNumberOfNotiByUser()
        .then(({data}) => {
            setTotalNoti(data.content.total)
        })
    },[])
    return (
        <span>{totalNoti}</span>
      )
}

export default Total
