import { episodeSer, historySer } from "../../api/api"
import { historyLocalStorage, tokenLocalStorage } from "../../api/localStorage"

export const history = {
    add: (session_id, episode_id) => {
        const isLoggedIn = tokenLocalStorage.get() ? true : false
        if(isLoggedIn) {
            historySer.addHistory(session_id, episode_id)
        } else {
            const historyList = historyLocalStorage.get() ? historyLocalStorage.get() : null 

            //goi API lay du lieu
            episodeSer.getEpisodeByID(episode_id)
            .then(({data}) => {
                if(historyList) {
                    //da co danh sach roi
                    //kiem tra phan phim da ton tai chua
                    const index = historyList.findIndex(item => item.session_id === session_id)
                    if(index !== -1) {
                        let update = historyList.splice(index,1)[0]
                        update = {
                            ...data.content,
                            last_view: new Date().toISOString()
                        }
                        historyList.unshift(update)
                        historyLocalStorage.set(historyList)
                        
                    } else {
                            // chua ton taij => tao moi
                            historyList.unshift({
                                ...data.content,
                                last_view: new Date().toISOString()
                            })
                           
                            historyLocalStorage.set(historyList)
                    }
                } else {
                    // chua co danh sach => tao moi
                    historyLocalStorage.set([{
                        ...data.content,
                        last_view: new Date()
                    }])
                }
            })
           
        }

    }
}