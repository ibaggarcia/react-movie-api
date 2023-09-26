import { useState } from "react"

export function useSearch() {
    const [search, setSearch] = useState('')
  
    const handleSearch = (e) => {
      e.preventDefault()
      
      setSearch(e.target.search.value)
    }
  
    return { search, handleSearch }
  }