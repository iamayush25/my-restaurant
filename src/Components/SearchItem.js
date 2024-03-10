import React, { useEffect, useState } from "react";
import Home from "./Home";


const SearchItem = () => {
    const [Data, setData] = useState([])
    const [Menu, setMenu] = useState([])
    const [input, setInput] = useState([])
    const [find, setFind] = useState("")



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
            const result = await response.json()
            setData(result)
            const arr = []
            const obj = {}
            for (const i of result.meals) {
                obj[i.strCategory] = ""
            }
            for (let j in obj) {
                arr.push(j)
            }
            setMenu(arr)

        }
        fetchData()
    }, [])

    const DisplayItem = () => {
        let array = []
        for (let i of Data.meals) {
            if (input ==="All") {
                array.push(i)
            } else if (input == i.strCategory) {
                array.push(i)
            }
        }
        setFind(array)
        setInput("")
        console.log(array);

    }


}








export default SearchItem;