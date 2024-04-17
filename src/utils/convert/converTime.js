const monthArray = [
    {text: 'JAN',
    number: '01'},

    {text: 'FEB',
    number: '02'},

    {text: 'MAR',
    number: '03'},

    {text: 'APR',
    number: '04'},

    {text: 'MAY',
    number: '05'},

    {text: 'JUN',
    number: '06'},

    {text: 'JUL',
    number: '07'},

    {text: 'AUG',
    number: '08'},

    {text: 'SEP',
    number: '09'},

    {text: 'OCT',
    number: '10'},

    {text: 'NOV',
    number: '11'},

    {text: 'DEC',
    number: '12'},
]

export const converTime = (string) => {
    var startTimeDate = new Date(string);
    const str = startTimeDate.toString().replaceAll(' ','')

    let output = ''
    const year = str.slice(8,12)
    let month = str.slice(3,6)
    const date = str.slice(6,8)
    const time = str.slice(12,20)

    const index = monthArray.findIndex(item => item.text === month.toUpperCase())

    month = monthArray[index].number

    output = date + '/' + month+ '/' + year + ' - ' + time

    return output
}


export const converTimeForNotification = (string) => {
    var startTimeDate = new Date(string);
    const str = startTimeDate.toString().replaceAll(' ','')

    let output = ''
    let month = str.slice(3,6)
    const date = str.slice(6,8)
    const time = str.slice(12,20)

    const now = new Date()
    const nowDate = now.getDate()
    const nowMonth = now.getMonth() + 1

    const index = monthArray.findIndex(item => item.text === month.toUpperCase())

    month = monthArray[index].number

    if(nowDate === Number(date) && nowMonth === Number(month)) {
        output = time.slice(0,5)
    } else {
        if(nowMonth === Number(month)) {
            output = nowDate - Number(date) + ' ngày trước'
        } else {
            output = nowMonth -  Number(month) + ' tháng trước'
        }
    }
    return output
}


export const convertTime = (string) => {
    var startTimeDate = new Date(string);
    const str = startTimeDate.toString().replaceAll(' ','')

    let output = ''

    // thoi gian tu database
    const year = str.slice(8,12)
    let month = str.slice(3,6)
    const date = str.slice(6,8)
    const time = str.slice(12,20)
    const hour = str.slice(12,14)
    const minute = str.slice(15,17)

    // thoi gian hien tai 
    const now = new Date()
    
    const nowYear = now.getFullYear()
    const nowMonth = now.getMonth() + 1
    const nowDate = now.getDate()

    const nowHour = now.getHours()
    const nowMinute = now.getMinutes()

    const index = monthArray.findIndex(item => item.text === month.toUpperCase())

    month = monthArray[index].number

    if(nowYear !== Number(year)) { // khac nam
        let caculate = nowYear - Number(year)
            output = caculate + ' năm trước'

    } else if(nowMonth !== Number(month) && nowYear === Number(year) ) { //khac thang
        let caculate = nowMonth - Number(month)
        output = caculate + ' tháng trước'
        
    } else if(nowDate !== Number(date) && nowMonth === Number(month) && nowYear === Number(year)) { // khac ngay
        let caculate = nowDate - Number(date)
        output = caculate + ' ngày trước'
    } else { //cung ngay
        if(nowHour === Number(hour)) { // cung gio
            let caculate = nowMinute - Number(minute)
            if(caculate === 0) {
                output = 'Vừa xong'
            } else {
                output = caculate + ' phút trước'
            }
        } else {
            let caculate = nowHour - Number(hour)
            output = caculate + ' giờ trước'
        }

    }
    return output
}