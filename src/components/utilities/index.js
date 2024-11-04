import toast from "react-hot-toast"

// get all coffees from local storage
const getAllFav = () => {
    const getFav = localStorage.getItem('favorite')
    if (getFav) {
        const fav = JSON.parse(getFav)
        return fav

    }
    else {
        return []
    }
}



//add items to local storage

const addFav = coffee => {
    const fav = getAllFav()
    const isExist = fav.find(item => item.id === coffee.id)
    if (isExist) {
        toast.error('This Coffee already exist!');


    }
    else {
        toast.success('Coffee added Successfully!');
        fav.push(coffee)
        localStorage.setItem('favorite', JSON.stringify(fav))
        
        const disable = true
    }


}




// remove item from local storage


const removeFav = (id)=>{
    toast.success('Coffee removed Successfully!');
    const fav = getAllFav()
    const remaining = fav.filter(coffee=> coffee.id != id)
    localStorage.setItem('favorite', JSON.stringify(remaining))

}


export { addFav, getAllFav, removeFav }