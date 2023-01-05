import res from '../api/db.json'

export default function apiItems () {
    const data = res.items

    console.log(data.map(e => console.log(e.type)))
    
}